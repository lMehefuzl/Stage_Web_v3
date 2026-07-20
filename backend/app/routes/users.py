from fastapi import APIRouter, HTTPException, status    #Router + gestion d'erreurs
from datetime import datetime, timedelta                           #Pour la date de création du compte
from pydantic import BaseModel                          #Pour le modèle ScoreUpdate
from ..database import users_collection                 #Collection MongoDB des utilisateurs
from ..models.user import UserCreate, UserLogin, ForgotPassword, ResetPassword         #Modèles de validation
from bson import ObjectId                               #Pour convertir les IDs MongoDB
import bcrypt 

import smtplib
from email.mime.text import MIMEText
import secrets 
import os                                     #Pour hasher les mots de passe


router = APIRouter(prefix="/users", tags=["Users"])

# --- Config email (reset mot de passe) ---
EMAIL_ADDRESS = os.getenv("EMAIL_ADDRESS")
EMAIL_PASSWORD = os.getenv("EMAIL_PASSWORD")

def send_reset_email(to_email: str, token: str):
    reset_link = f"http://localhost:5173/reset-password?token={token}"

    msg = MIMEText(f"Clique ici pour réinitialiser ton mot de passe : {reset_link}\n\nCe lien expire dans 1h.")
    msg["Subject"] = "Réinitialisation de mot de passe"
    msg["From"] = EMAIL_ADDRESS
    msg["To"] = to_email

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as server:
        server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
        server.send_message(msg)


class ScoreUpdate(BaseModel):
    score: int
    quiz_id: str = "default" #avant y avait pas


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
        "scores": {},
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
        {"$set": {f"scores.{data.quiz_id}": data.score}} #avant c t : {"$set": {"score": data.score}}
    )
    if result.matched_count == 0:
        raise HTTPException(status_code=404, detail="Utilisateur non trouvé")
    updated = await users_collection.find_one({"_id": ObjectId(user_id)})
    updated["_id"] = str(updated["_id"])
    del updated["password"]
    return updated


# Mot de passe oublié — envoi du lien
@router.post("/forgot-password")
async def forgot_password(data: ForgotPassword):
    user = await users_collection.find_one({"email": data.email})
    if not user:
        return {"message": "Si cet email existe, un lien a été envoyé"}

    token = secrets.token_urlsafe(32)
    expiry = datetime.now() + timedelta(hours=1)

    await users_collection.update_one(
        {"_id": user["_id"]},
        {"$set": {"reset_token": token, "reset_token_expiry": expiry}}
    )

    send_reset_email(data.email, token)
    return {"message": "Si cet email existe, un lien a été envoyé"}


# Réinitialisation effective
@router.post("/reset-password")
async def reset_password(data: ResetPassword):
    user = await users_collection.find_one({"reset_token": data.token})

    if not user or user.get("reset_token_expiry") < datetime.now():
        raise HTTPException(status_code=400, detail="Lien invalide ou expiré")

    await users_collection.update_one(
        {"_id": user["_id"]},
        {
            "$set": {"password": hash_password(data.new_password)},
            "$unset": {"reset_token": "", "reset_token_expiry": ""}
        }
    )
    return {"message": "Mot de passe réinitialisé avec succès"}