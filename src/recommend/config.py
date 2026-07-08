from pathlib import Path

BASE_DIR = Path(__file__).resolve().parents[1]

INDEX_PATH = BASE_DIR / "recommend" / "item_index.faiss"
ITEM_IDS_PATH = BASE_DIR / "recommend" / "item_ids.json"