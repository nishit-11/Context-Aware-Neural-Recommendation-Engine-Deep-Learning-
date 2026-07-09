from src.recommend.recommender import recommend

def get_recommendations(user_id: int, top_k: int):
    """
    Call the recommendation engine.
    """

    recommendations = recommend(user_id, top_k)

    return recommendations