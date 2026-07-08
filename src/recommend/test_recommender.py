from src.feature_store.redis_store import RedisFeatureStore
from .recommender import build_item_index, recommend

store = RedisFeatureStore()
store.connect()

first_user = next(store.client.scan_iter("user:*"))
user_id = int(first_user.split(":")[1])

build_item_index()

print(recommend(user_id, k=10))