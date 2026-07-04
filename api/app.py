from fastapi import FastAPI
from api.routes import router

app = FastAPI(
    title="Context-Aware Recommendation API",
    version="1.0.0"
)

app.include_router(router)

@app.get("/")
def home():
    return {
        "message": "Recommendation API is Running"
    }

@app.get("/health")
def health():
    return {
        "status": "healthy"
    }