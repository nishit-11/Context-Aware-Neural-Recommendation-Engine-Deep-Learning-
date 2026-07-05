import tensorflow as tf
from pathlib import Path

MODEL_PATH = Path(__file__).resolve().parents[1] / "models"

query_tower = tf.keras.models.load_model(
    MODEL_PATH / "query_tower.keras"
)

candidate_tower = tf.keras.models.load_model(
    MODEL_PATH / "candidate_tower.keras"
)

