from fastapi import APIRouter, HTTPException, status
from datetime import datetime
from ..database import users_collection
from ..models.user import UserCreate, UserLogin, UserUpdate, UserResponse
from bson import ObjectId
import bcrypt

router = APIRouter(prefix="/users", tags=["Users"])

# ---------- FONCTIONS UTILITAIRES ----------
def hash_password(password: str) -> str:
    """Hache le mot de passe avec bcrypt"""
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    """Vérifie si le mot de passe correspond au hash"""
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

# ---------- ROUTES ----------

# GET /users - Récupérer tous les utilisateurs
@router.get("/")
async def get_users():
    """Récupère la liste de tous les utilisateurs"""
    users = []
    async for user in users_collection.find():
        user["_id"] = str(user["_id"])
        users.append(user)
    return users

# GET /users?email=xxx - Récupérer un utilisateur par email
@router.get("/")
async def get_user_by_email(email: str):
    """Récupère un utilisateur par son email"""
    user = await users_collection.find_one({"email": email})
    if not user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    user["_id"] = str(user["_id"])
    return user

# POST /users - Créer un nouvel utilisateur (inscription)
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate):
    """Crée un nouvel utilisateur"""
    # Vérifier si l'email existe déjà
    existing_user = await users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(
            status_code=400, 
            detail="Cet email est déjà utilisé"
        )
    
    # Créer le nouvel utilisateur
    new_user = {
        "name": user.name,
        "email": user.email,
        "password": hash_password(user.password),
        "score": 0,
        "created_at": datetime.now()
    }
    
    # Insérer dans la base
    result = await users_collection.insert_one(new_user)
    
    # Récupérer l'utilisateur créé
    created_user = await users_collection.find_one({"_id": result.inserted_id})
    created_user["_id"] = str(created_user["_id"])
    
    return created_user

# POST /users/login - Connexion utilisateur
@router.post("/login")
async def login(user: UserLogin):
    """Connecte un utilisateur"""
    # Chercher l'utilisateur par email
    db_user = await users_collection.find_one({"email": user.email})
    if not db_user:
        raise HTTPException(
            status_code=401, 
            detail="Email ou mot de passe incorrect"
        )
    
    # Vérifier le mot de passe
    if not verify_password(user.password, db_user["password"]):
        raise HTTPException(
            status_code=401, 
            detail="Email ou mot de passe incorrect"
        )
    
    # Retourner l'utilisateur (sans le mot de passe)
    db_user["_id"] = str(db_user["_id"])
    del db_user["password"]  # On enlève le mot de passe pour la sécurité
    
    return db_user

# PATCH /users/{user_id} - Mettre à jour un utilisateur (ex: score)
@router.patch("/{user_id}")
async def update_user(user_id: str, update_data: UserUpdate):
    """Met à jour un utilisateur (score, nom, etc.)"""
    
    # Filtrer les champs à mettre à jour (enlever les None)
    update_dict = {k: v for k, v in update_data.dict().items() if v is not None}
    
    # Si on met à jour le mot de passe, on le hache
    if "password" in update_dict:
        update_dict["password"] = hash_password(update_dict["password"])
    
    # Si pas de données à mettre à jour
    if not update_dict:
        raise HTTPException(status_code=400, detail="Aucune donnée à mettre à jour")
    
    # Mettre à jour l'utilisateur
    result = await users_collection.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": update_dict}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    # Récupérer l'utilisateur mis à jour
    updated_user = await users_collection.find_one({"_id": ObjectId(user_id)})
    updated_user["_id"] = str(updated_user["_id"])
    if "password" in updated_user:
        del updated_user["password"]  # On enlève le mot de passe
    
    return updated_user

# GET /users/{user_id} - Récupérer un utilisateur par son ID
@router.get("/{user_id}")
async def get_user(user_id: str):
    """Récupère un utilisateur par son ID"""
    user = await users_collection.find_one({"_id": ObjectId(user_id)})
    if not user:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    user["_id"] = str(user["_id"])
    if "password" in user:
        del user["password"]
    return user