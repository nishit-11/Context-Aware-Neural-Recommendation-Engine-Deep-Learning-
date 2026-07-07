from .redis_store import RedisFeatureStore

store = RedisFeatureStore()

try:
    if store.connect():
        print("Connected Successfully")
except Exception as e:
    print(e)


