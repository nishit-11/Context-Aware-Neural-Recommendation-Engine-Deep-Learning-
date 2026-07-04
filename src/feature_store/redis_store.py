import redis
from .config import REDIS_HOST, REDIS_PORT, REDIS_DB

class RedisFeatureStore:

    def __init__(self):
        self.client = redis.Redis(
            host=REDIS_HOST,
            port=REDIS_PORT,
            db=REDIS_DB,
            decode_responses=True
        )


    def connect(self):
        return self.client.ping()

    def set_value(self, key, value):
        self.client.set(key, value)

    def get_value(self, key):
        return self.client.get(key)