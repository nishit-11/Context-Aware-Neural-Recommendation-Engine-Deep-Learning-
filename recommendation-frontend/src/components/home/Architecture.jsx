import {
  User,
  Cpu,
  BrainCircuit,
  Database,
  Search,
  Server,
  ArrowDown,
} from "lucide-react";

const steps = [
  {
    icon: <User size={42} className="text-blue-500" />,
    title: "Customer",
    desc: "User interacts with the recommendation system.",
  },
  {
    icon: <Cpu size={42} className="text-purple-500" />,
    title: "Feature Engineering",
    desc: "Customer and product features are processed.",
  },
  {
    icon: <BrainCircuit size={42} className="text-pink-500" />,
    title: "Two-Tower Model",
    desc: "TensorFlow generates user and item embeddings.",
  },
  {
    icon: <Database size={42} className="text-green-500" />,
    title: "Redis",
    desc: "Embeddings are stored for fast retrieval.",
  },
  {
    icon: <Search size={42} className="text-orange-500" />,
    title: "FAISS",
    desc: "Finds nearest neighbors using ANN search.",
  },
  {
    icon: <Server size={42} className="text-cyan-500" />,
    title: "FastAPI",
    desc: "Returns recommendations through REST APIs.",
  },
];

function Architecture() {
  return (
    <section
      id="architecture"
      className="bg-slate-950 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-5">
          How It Works
        </h2>

        <p className="text-center text-gray-400 mb-16 text-lg">
          Complete recommendation pipeline from customer interaction
          to personalized recommendations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

          {steps.map((step, index) => (

            <div
              key={index}
              className="bg-slate-900 border border-slate-700
              rounded-2xl p-8 hover:border-blue-500
              hover:-translate-y-2 transition-all duration-300"
            >

              {step.icon}

              <h3 className="text-2xl font-bold mt-5">
                {step.title}
              </h3>

              <p className="text-gray-400 mt-4">
                {step.desc}
              </p>

            </div>

          ))}

        </div>

        <div className="flex justify-center mt-14">

          <ArrowDown size={40} className="text-blue-500 animate-bounce" />

        </div>

        <div className="mt-12 bg-slate-900 rounded-2xl p-10 border border-slate-700">

          <h3 className="text-3xl font-bold text-center mb-8">
            Recommendation Flow
          </h3>

          <div className="flex flex-wrap justify-center items-center gap-4 text-center">

            <span className="bg-blue-600 px-4 py-2 rounded-lg">
              Customer
            </span>

            ➜

            <span className="bg-purple-600 px-4 py-2 rounded-lg">
              Features
            </span>

            ➜

            <span className="bg-pink-600 px-4 py-2 rounded-lg">
              Two-Tower Model
            </span>

            ➜

            <span className="bg-green-600 px-4 py-2 rounded-lg">
              Redis
            </span>

            ➜

            <span className="bg-orange-600 px-4 py-2 rounded-lg">
              FAISS
            </span>

            ➜

            <span className="bg-cyan-600 px-4 py-2 rounded-lg">
              FastAPI
            </span>

            ➜

            <span className="bg-blue-700 px-4 py-2 rounded-lg">
              Recommendations
            </span>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Architecture;