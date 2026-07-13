from fastapi import FastAPI
from api.routes import router
from api.config import settings

app = FastAPI(
    title=settings.APP_NAME,
    version=settings.VERSION
)

app.include_router(router)

@app.get("/")
def home():
    return {"message": "Recommendation API is Running"}

@app.get("/health")
def health():
    return {"status": "healthy"}