from fastapi import APIRouter, HTTPException, status
from datetime import datetime
from pydantic import BaseModel
from ..database import users_collection
from ..models.user import UserCreate, UserLogin
from bson import ObjectId
import bcrypt

router = APIRouter(prefix="/users", tags=["Users"])

class ScoreUpdate(BaseModel):  # ← AJOUTE CE MODÈLE
    score: int


def hash_password(password: str) -> str:
    salt = bcrypt.gensalt()
    return bcrypt.hashpw(password.encode('utf-8'), salt).decode('utf-8')

def verify_password(password: str, hashed: str) -> bool:
    return bcrypt.checkpw(password.encode('utf-8'), hashed.encode('utf-8'))

# Inscription
@router.post("/", status_code=status.HTTP_201_CREATED)
async def create_user(user: UserCreate):
    if await users_collection.find_one({"email": user.email}):
        raise HTTPException(status_code=400, detail="Email déjà utilisé")
    
    result = await users_collection.insert_one({
        "name": user.name,
        "email": user.email,
        "password": hash_password(user.password),
        "score": 0,
        "created_at": datetime.now()
    })
    
    created = await users_collection.find_one({"_id": result.inserted_id})
    created["_id"] = str(created["_id"])
    return created

# Connexion
@router.post("/login")
async def login(user: UserLogin):
    db_user = await users_collection.find_one({"email": user.email})
    if not db_user or not verify_password(user.password, db_user["password"]):
        raise HTTPException(status_code=401, detail="Email ou mot de passe incorrect")
    
    db_user["_id"] = str(db_user["_id"])
    del db_user["password"]
    return db_user

# Mise à jour score
@router.patch("/{user_id}")
async def update_user(user_id: str, data: ScoreUpdate):
    result = await users_collection.update_one(
        {"_id": ObjectId(user_id)},
        {"$set": {"score": data.score}}
    )
    
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    
    updated = await users_collection.find_one({"_id": ObjectId(user_id)})
    updated["_id"] = str(updated["_id"])
    del updated["password"]
    return updated