from pydantic import BaseModel

class RecommendationRequest(BaseModel):
    user_id: int
    top_k: int = 5