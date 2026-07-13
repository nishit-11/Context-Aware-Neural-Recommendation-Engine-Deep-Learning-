# Context-Aware Neural Recommendation Engine

A deep learning-based recommendation system that generates personalized product recommendations using a **Two Tower Neural Network**, **Redis Feature Store**, **FAISS Approximate Nearest Neighbor (ANN) Search**, and **FastAPI**.

---

## Features

- Two Tower Neural Recommendation Model
- User & Item Embedding Generation
- Redis Feature Store for low-latency retrieval
- FAISS ANN Search for fast candidate retrieval
- FastAPI REST API for recommendations
- Swagger API Documentation

---

## Tech Stack

- Python
- TensorFlow / Keras
- PySpark
- Pandas
- NumPy
- Redis (Memurai)
- FAISS
- FastAPI

---

## Project Structure

```text
Context-Aware-Neural-Recommendation-Engine/
│
├── api/
├── data/
├── notebooks/
├── src/
│   ├── feature_store/
│   ├── recommend/
│   ├── models/
│   └── ...
├── requirements.txt
└── README.md
```

---

## Installation

Clone the repository

```bash
git clone https://github.com/nishit-11/Context-Aware-Neural-Recommendation-Engine-Deep-Learning-.git
```

Install dependencies

```bash
pip install -r requirements.txt
```

---

## Run the Project

Store embeddings in Redis

```bash
python -m src.feature_store.store_embeddings
```

Run the FastAPI server

```bash
python -m uvicorn api.app:app --reload
```

Open Swagger Documentation

```
http://127.0.0.1:8000/docs
```

---

## API Endpoint

### POST `/recommend`

Example Request

```json
{
  "user_id": 79,
  "top_k": 10
}
```

Example Response

```json
{
  "user_id": 79,
  "recommendations": [
    6043,
    2128,
    8771,
    9267,
    11163,
    201,
    6131,
    8715,
    11160,
    10360
  ]
}
```

---

## Project Workflow

Dataset → Feature Engineering → Two Tower Model → User & Item Embeddings → Redis Feature Store → FAISS ANN Search → FastAPI → Top-K Recommendations

---

## Contributors

- Nishit Malkania
- Pavan Chowdary
- Nagamalleswari