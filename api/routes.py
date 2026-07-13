from fastapi import APIRouter
from api.schemas import RecommendationRequest
from api.services import get_recommendations

router = APIRouter()

@router.post("/recommend")
def recommend(data: RecommendationRequest):
    results = get_recommendations(data.user_id, data.top_k)

    return {
        "user_id": data.user_id,
        "recommendations": results
    }