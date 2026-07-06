import numpy as np

from .load_models import(
    query_tower,
    candidate_tower
)

def prepare_user_embedding(dataframe):
    return {
        "customer_id": dataframe["customer_id_enc"].values,
        "club_member_status": dataframe["club_member_status_enc"].values,
        "fashion_news_frequency": dataframe["fashion_news_frequency_enc"].values,
        "age_group": dataframe["age_group_enc"].values,
        "user_numerics": np.column_stack([
            dataframe["purchase_count_norm"].values,
            dataframe["avg_spend_norm"].values,
            dataframe["total_spend_norm"].values,
            dataframe["days_since_last_purchase_norm"].values,
            dataframe["age_norm"].values,
        ])
    }

def prepare_item_embedding(dataframe):
    return{
        "article_id": dataframe["article_id_enc"].values,
        "product_type_name": dataframe["product_type_name_enc"].values,
        "product_group_name": dataframe["product_group_name_enc"].values,
        "garment_group_name": dataframe["garment_group_name_enc"].values,
        "colour_group_name": dataframe["colour_group_name_enc"].values,
        "item_numerics": np.column_stack([
            dataframe["avg_price_norm"].values,
            dataframe["purchase_count_norm"].values
        ])
    }

def generate_user_embeddings(dataframe):
    inputs = prepare_user_embedding(dataframe)

    embeddings = query_tower.predict([
        inputs["customer_id"],
        inputs["club_member_status"],
        inputs["fashion_news_frequency"],
        inputs["age_group"],
        inputs["user_numerics"]
        ])

    return embeddings


def generate_item_embeddings(dataframe):
    inputs = prepare_item_embedding(dataframe)

    embeddings =  candidate_tower.predict([
        inputs["article_id"],
        inputs["product_type_name"],
        inputs["product_group_name"],
        inputs["garment_group_name"],
        inputs["colour_group_name"],
        inputs["item_numerics"]
    ])

    return embeddings