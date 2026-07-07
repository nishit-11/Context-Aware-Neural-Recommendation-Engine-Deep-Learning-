import redis
import json
from .config import (
    REDIS_HOST,
    REDIS_PORT,
    REDIS_DB,
    REDIS_PASSWORD
)

class RedisFeatureStore:

    def __init__(self):
        self.client = redis.Redis(
            host=REDIS_HOST,
            port=REDIS_PORT,
            db=REDIS_DB,
            password=REDIS_PASSWORD,
            decode_responses=True
        )


    def connect(self):
        return self.client.ping()

    def save_user_embedding(self, user_id, embedding):
        self.client.set(
            f"user:{user_id}",
            json.dumps(embedding)
        )


    def save_item_embedding(self, item_id, embedding):
        self.client.set(
            f"item:{item_id}",
            json.dumps(embedding)
        )

    def get_user_embedding(self, user_id):
        data = self.client.get(f"user:{user_id}")
        return json.loads(data) if data else None

    def get_item_embedding(self, item_id):
        data = self.client.get(f"item:{item_id}")
        return json.loads(data) if data else None

    def delete_user_embedding(self, user_id):
        self.client.delete(f"user:{user_id}")

    def delete_item_embedding(self, item_id):
        self.client.delete(f"item:{item_id}")

    def clear_database(self):
        self.client.flushdb()


