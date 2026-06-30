from pydantic import BaseModel, EmailStr, Field
from typing import Optional
from datetime import datetime
from bson import ObjectId

# Pour convertir ObjectId en string (utile pour les réponses)
class PyObjectId(ObjectId):
    @classmethod
    def __get_validators__(cls):
        yield cls.validate

    @classmethod
    def validate(cls, v):
        if not ObjectId.is_valid(v):
            raise ValueError("Invalid objectid")
        return ObjectId(v)

    @classmethod
    def __modify_schema__(cls, field_schema):
        field_schema.update(type="string")

# Modèle pour créer un utilisateur (inscription)
class UserCreate(BaseModel):
    name: str = Field(..., min_length=2, max_length=50)
    email: EmailStr
    password: str = Field(..., min_length=4)
    
# Modèle pour la connexion
class UserLogin(BaseModel):
    email: EmailStr
    password: str

# Modèle pour mettre à jour un utilisateur (score par exemple)
class UserUpdate(BaseModel):
    name: Optional[str] = None
    email: Optional[EmailStr] = None
    password: Optional[str] = None
    score: Optional[int] = None

# Modèle pour la réponse (ce qu'on renvoie au frontend)
class UserResponse(BaseModel):
    id: str = Field(alias="_id")
    name: str
    email: str
    score: int = 0
    created_at: Optional[datetime] = None
    
    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}