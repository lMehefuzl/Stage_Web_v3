from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from .routes import users, quiz

app = FastAPI(
    title="API Niryo Ned 2 - MLF",
    description="API pour le guide du robot Niryo Ned 2",
    version="1.0.0"
)

# Configuration CORS (permet à React de parler à l'API)
app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:3000",    # Port par défaut de React
        "http://localhost:5173",    # Port de Vite
        "http://127.0.0.1:3000",
    ],
    allow_credentials=True,
    allow_methods=["*"],            # Autorise toutes les méthodes (GET, POST, PATCH, DELETE)
    allow_headers=["*"],            # Autorise tous les headers
)

# Inclure les routes
app.include_router(users.router)
app.include_router(quiz.router)

# Route racine
@app.get("/")
async def root():
    return {
        "message": "Bienvenue sur l'API MLF Niryo Ned 2",
        "docs": "/docs",
        "routes": {
            "users": "/users",
            "quiz": "/quiz"
        }
    }

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(
        "app.main:app", 
        host="0.0.0.0", 
        port=6789, 
        reload=True  # Recharge automatiquement quand tu modifies le code
    )


#from fastapi import FastAPI

#app = FastAPI()

#@app.get("/")

#async def root():
#    return {"message" : "welcome to the fast api mongodb Blog API"}