def get_recommendations(user_id: int, top_k: int):
    recommendations = []

    for i in range(top_k):
        recommendations.append({
            "product_id": 1000 + i,
            "score": round(0.95 - (i * 0.05), 2)
        })

    return recommendations