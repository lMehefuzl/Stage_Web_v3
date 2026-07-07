from motor.motor_asyncio import AsyncIOMotorClient #pour communiquer avec MongoDB
import os
from dotenv import load_dotenv #Charge le fichier .env

load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")
DB_NAME = os.getenv("DB_NAME")

client = AsyncIOMotorClient(MONGO_URI)
db = client[DB_NAME]

users_collection = db["users"]