import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    MONGO_URI = os.getenv("MONGO_URI", "mongodb+srv://khondakermehefuz_db_user:jYcf50BlaUXUz8PE@cluster0.prwpprf.mongodb.net/")
    DB_NAME = os.getenv("DB_NAME", "db_mlf_niryo")
    
config = Config()

#
#from motor.motor_asyncio import AsyncUIMotorClient

#Mongo URI
#MONGO_URI = "mongodb+srv://khondakermehefuz_db_user:jYcf50BlaUXUz8PE@cluster0.prwpprf.mongodb.net/"
#client = AsyncIOMotorClient(MONGO_URI)
#db = client["db_mlf_niryo"]  # nom du db