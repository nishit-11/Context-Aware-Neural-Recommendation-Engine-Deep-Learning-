from pyspark.sql import SparkSession
spark = (
    SparkSession.builder
    .appName("HM Recommendation")
    .getOrCreate()
)

print("Spark Session Created")

transactions = spark.read.csv(
    "../data/transactions_train.csv",
    header=True,
    inferSchema=True
)

transactions.printSchema()