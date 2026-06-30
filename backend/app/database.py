from motor.motor_asyncio import AsyncIOMotorClient
from .config import config

# Connexion à MongoDB
client = AsyncIOMotorClient(config.MONGO_URI)
db = client[config.DB_NAME]

# Collections (comme des tables dans une base SQL)
users_collection = db["users"]        # pour les utilisateurs
quiz_collection = db["quiz"]          # pour les questions du quiz
scores_collection = db["scores"]      # pour les scores