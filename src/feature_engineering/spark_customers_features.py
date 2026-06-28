from pyspark.sql import SparkSession
spark = (
    SparkSession.builder
    .appName("HM Recommendation")
    .getOrCreate()
)

print("Spark Session Created")

customers = spark.read.csv(
    "data/customers.csv",
    header=True,
    inferSchema=True
)

articles = spark.read.csv(
    "data/articles.csv",
    header=True,
    inferSchema=True
)

transactions = spark.read.csv(
    "data/transactions_train.csv",
    header=True,
    inferSchema=True
)

customers.printSchema()
customers.show(5)

articles.printSchema()
articles.show(5)

transactions.printSchema()
transactions.show(5)

from pyspark.sql.functions import col,sum, when
customers.select(
    [
        sum(
            when(col(c).isNull(),1)
            .otherwise(0)
        ).alias(c)

        for c in customers.columns
    ]
).show()


customers = customers.drop(
    "FN",
    "Active"
)

customers = customers.fillna(
    {"age":30}
)

customers = customers.fillna(
    {"club_member_status":"UNKNOWN"}
)

from pyspark.sql.functions import count

purchase_count = (
    transactions
    .groupBy("customer_id")
    .agg(
        count("*")
        .alias("purchase_count")
    )
)

from pyspark.sql.functions import avg

avg_spend =(
    transactions
    .groupBy("customer_id")
    .agg(
        avg("price")
        .alias("avg_spend")
    )
)

from pyspark.sql.functions import sum

total_spend = (
    transactions
    .groupBy("customer_id")
    .agg(
        sum("price")
        .alias("total_spend")
    )
)

customer_features = (
    purchase_count
    .join(
        avg_spend,
        "customer_id"
    )
    .join(
        total_spend,
        "customer_id"
    )
)

customer_features = (
    customer_features
    .join(
        customers.select(
            "customer_id",
            "age",
            "club_member_status",
            "fashion_news_frequency"
        ),
        "customer_id",
        "left"
    )
)

item_popularity= (
    transactions
    .groupBy("article_id")
    .agg(
        count("*")
        .alias("item_popularity")
    )
)

item_avg = (
    transactions
    .groupBy("article_id")
    .agg(
        avg("price")
        .alias("item_avg")
    )
)

item_features =(
    item_popularity
    .join(
        item_avg,
        "article_id"
    )
)

item_features =(
    item_features
    .join(
        articles.select(
            "article_id",
            "product_type_name",
            "product_group_name",
            "colour_group_name",
            "garment_group_name"
        ),
        "article_id",
        "left"
    )
)

customer_features.write.mode("overwrite") \
    .option("header", True) \
    .csv("data/customer_features_spark")

item_features.write.mode("overwrite") \
    .option("header", True) \
    .csv("data/item_features_spark")


customer_features.toPandas().to_csv(
    "data/customer_features.csv",
    index=False
)

item_features.toPandas().to_csv(
    "data/item_features.csv",
    index=False
)