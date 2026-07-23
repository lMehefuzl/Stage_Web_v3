from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import users

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000", "http://localhost:5173", "http://10.151.128.105:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(users.router)

@app.get("/")
async def root():
    return {"message": "API OK"}