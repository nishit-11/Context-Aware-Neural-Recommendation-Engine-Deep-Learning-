import { useState } from "react";

function RecommendationDashboard() {
  const [userId, setUserId] = useState("");
  const [topK, setTopK] = useState(5);
  const [recommendations, setRecommendations] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleGenerate = async () => {
    if (!userId) {
      alert("Please enter a User ID");
      return;
    }

    setLoading(true);
    setError("");
    setRecommendations([]);

    try {
      const response = await fetch("http://127.0.0.1:8000/recommend", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: Number(userId),
          top_k: Number(topK),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setRecommendations(data.recommendations);
      } else {
        setError(data.detail || "Recommendation failed");
      }
    } catch (error) {
      console.error(error);
      setError("Cannot connect to FastAPI");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-slate-950 py-24 text-white">
      <div className="max-w-6xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-4">
          Generate Personalized Recommendations
        </h2>

        <p className="text-center text-gray-400 mb-12">
          Enter a User ID to generate AI-powered personalized product recommendations.
        </p>

        <div className="bg-slate-900 rounded-3xl p-10 shadow-xl">

          {/* Input Section */}
          <div className="grid md:grid-cols-3 gap-6">

            <input
              type="number"
              className="bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value)}
            />

            <input
              type="number"
              className="bg-slate-800 rounded-xl p-4 outline-none border border-slate-700 focus:border-blue-500"
              placeholder="Top K"
              value={topK}
              onChange={(e) => setTopK(Number(e.target.value))}
            />

            <button
              onClick={handleGenerate}
              disabled={loading}
              className="bg-blue-600 rounded-xl hover:bg-blue-700 transition-all duration-300 disabled:bg-gray-600 disabled:cursor-not-allowed"
            >
              {loading ? "Generating..." : "Generate"}
            </button>

          </div>

          {/* Error Message */}
          {error && (
            <div className="mt-6 text-center">
              <p className="text-red-400 font-medium">
                {error}
              </p>
            </div>
          )}

          {/* Recommendations */}
          {recommendations.length > 0 && (
            <div className="mt-12">

              <div className="flex items-center justify-between mb-6">
                <h3 className="text-3xl font-bold">
                  Recommendations
                </h3>

                <span className="text-green-400 font-medium">
                  ✓ {recommendations.length} Recommendations Generated
                </span>
              </div>

              <div className="grid md:grid-cols-3 gap-6">

                {recommendations.map((item, index) => (
                  <div
                    key={index}
                    className="
                      bg-slate-800
                      rounded-2xl
                      p-6
                      border
                      border-slate-700
                      hover:border-blue-500
                      hover:shadow-lg
                      hover:shadow-blue-500/20
                      hover:scale-105
                      transition-all
                      duration-300
                      text-center
                    "
                  >
                    <div className="text-4xl mb-3">
                      ⭐
                    </div>

                    <p className="text-gray-400 text-sm">
                      Recommendation {index + 1}
                    </p>

                    <h3 className="text-xl font-bold mt-3">
                      Product #{item}
                    </h3>
                  </div>
                ))}

              </div>

            </div>
          )}

        </div>
      </div>
    </section>
  );
}

export default RecommendationDashboard;