from pydantic import BaseModel, EmailStr
from typing import Optional

# Modèle pour créer un utilisateur
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

# Modèle pour la connexion
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Modèle pour mettre à jour (score)
class UserUpdate(BaseModel):
    score: Optional[int] = None