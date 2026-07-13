import pandas as pd
from .config import DATA_PATH
from .redis_store import RedisFeatureStore
from .generate_embeddings import (
    generate_item_embeddings,
    generate_user_embeddings
)

import pandas as pd

from .config import DATA_PATH
from .redis_store import RedisFeatureStore
from .generate_embeddings import (
    generate_user_embeddings,
    generate_item_embeddings
)

print("Loading datasets...")

customer_df = pd.read_csv(DATA_PATH / "user_features_encoded.csv")
item_df = pd.read_csv(DATA_PATH / "item_features_encoded.csv")

print(customer_df.shape)
print(item_df.shape)

print("Generating user embeddings...")
user_embeddings = generate_user_embeddings(customer_df.head(100))

print("Generating item embeddings...")
item_embeddings = generate_item_embeddings(item_df.head(100))

print(user_embeddings.shape)
print(item_embeddings.shape)

store = RedisFeatureStore()

store.connect()

print("Redis Connected")

print("Storing User Embeddings...")

for user_id, embedding in zip(
    customer_df.head(100)["customer_id_enc"],
    user_embeddings
):
    store.save_user_embedding(
        int(user_id),
        embedding.tolist()
    )

print("User Embeddings Stored")


print("Storing Item Embeddings...")

for item_id, embedding in zip(
    item_df.head(100)["article_id_enc"],
    item_embeddings
):
    store.save_item_embedding(
        int(item_id),
        embedding.tolist()
    )

print("Item Embeddings Stored")

print("\nTesting Retrieval...")

user_id = int(customer_df.iloc[0]["customer_id_enc"])
item_id = int(item_df.iloc[0]["article_id_enc"])

print("User:", store.get_user_embedding(user_id)[:5])
print("Item:", store.get_item_embedding(item_id)[:5])