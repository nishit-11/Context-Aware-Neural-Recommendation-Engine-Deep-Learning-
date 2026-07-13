import tensorflow as tf
from pathlib import Path
from .config import MODEL_PATH

query_tower = tf.keras.models.load_model(
    MODEL_PATH / "query_tower.keras"
)

candidate_tower = tf.keras.models.load_model(
    MODEL_PATH / "candidate_tower.keras"
)

print(MODEL_PATH)