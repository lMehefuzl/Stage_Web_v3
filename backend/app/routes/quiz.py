from fastapi import APIRouter
from ..database import quiz_collection

router = APIRouter(prefix="/quiz", tags=["Quiz"])

# GET /quiz - Récupérer toutes les questions
@router.get("/")
async def get_questions():
    questions = []
    async for q in quiz_collection.find():
        q["_id"] = str(q["_id"])
        questions.append(q)
    return questions