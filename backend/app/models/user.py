from pydantic import BaseModel, EmailStr
from typing import Optional  #pour les champs vide comme un score nul par défaut  (= None)

# Modèle pour créer un utilisateur
class UserCreate(BaseModel):
    name: str
    email: EmailStr
    password: str

# Modèle pour la connexion
class UserLogin(BaseModel):
    email: EmailStr
    password: str

class ForgotPassword(BaseModel):
    email: EmailStr

class ResetPassword(BaseModel):
    token: str
    new_password: str

# Modèle pour mettre à jour (score)
#class UserUpdate(BaseModel):
#    score: Optional[int] = None