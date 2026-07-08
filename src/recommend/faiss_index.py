import faiss
import numpy as np


def build_index(item_embeddings):

    dimension = item_embeddings.shape[1]

    index = faiss.IndexHNSWFlat(dimension, 32)

    index.add(item_embeddings.astype(np.float32))

    return index


def save_index(index, path):

    faiss.write_index(index, str(path))


def load_index(path):

    return faiss.read_index(str(path))