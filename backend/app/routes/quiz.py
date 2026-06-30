from fastapi import APIRouter, HTTPException
from ..database import quiz_collection
from pydantic import BaseModel
from typing import Optional
from bson import ObjectId

router = APIRouter(prefix="/quiz", tags=["Quiz"])

# Modèle pour une question
class Question(BaseModel):
    question: str
    option1: str
    option2: str
    option3: str
    option4: str
    ans: int
    explications: Optional[str] = None

# GET /quiz - Récupérer toutes les questions
@router.get("/")
async def get_questions():
    """Récupère toutes les questions du quiz"""
    questions = []
    async for q in quiz_collection.find():
        q["_id"] = str(q["_id"])
        questions.append(q)
    return questions

# POST /quiz - Ajouter une question (pour admin)
@router.post("/")
async def add_question(question: Question):
    """Ajoute une nouvelle question au quiz"""
    result = await quiz_collection.insert_one(question.dict())
    return {
        "message": "Question ajoutée avec succès",
        "id": str(result.inserted_id)
    }

# GET /quiz/{question_id} - Récupérer une question spécifique
@router.get("/{question_id}")
async def get_question(question_id: str):
    """Récupère une question par son ID"""
    question = await quiz_collection.find_one({"_id": ObjectId(question_id)})
    if not question:
        raise HTTPException(status_code=404, detail="Question non trouvée")
    question["_id"] = str(question["_id"])
    return question