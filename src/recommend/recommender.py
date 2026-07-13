import json
import numpy as np

from src.feature_store.redis_store import RedisFeatureStore

from .config import (
    INDEX_PATH,
    ITEM_IDS_PATH
)
from .faiss_index import (
    build_index,
    save_index,
    load_index
)

def build_item_index():
    store = RedisFeatureStore()
    store.connect()
    item_embeddings = []
    item_ids = []
    for key in store.client.scan_iter("item:*"):
        item_id = int(key.split(":")[1])
        embedding = store.get_item_embedding(item_id)
        if embedding is not None:
            item_ids.append(item_id)
            item_embeddings.append(embedding)
    item_embeddings = np.array(
        item_embeddings,
        dtype=np.float32
    )
    index = build_index(item_embeddings)

    save_index(index, INDEX_PATH)
    with open(ITEM_IDS_PATH, "w") as f:
        json.dump(item_ids, f)
    print("FAISS Index Built Successfully")

def recommend(user_id, k=10):
    store = RedisFeatureStore()
    store.connect()
    user_embedding = store.get_user_embedding(user_id)
    if user_embedding is None:
        raise Exception("User Embedding Not Found")
    user_embedding = np.array(
        [user_embedding],
        dtype=np.float32
    )
    index = load_index(INDEX_PATH)
    with open(ITEM_IDS_PATH, "r") as f:
        item_ids = json.load(f)
    distances, indices = index.search(
        user_embedding,
        k
    )
    recommendations = [
        item_ids[i]
        for i in indices[0]
    ]
    return recommendations