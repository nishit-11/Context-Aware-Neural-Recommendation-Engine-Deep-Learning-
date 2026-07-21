import {
  BrainCircuit,
  Database,
  Search,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: <Sparkles size={42} className="text-blue-500" />,
    title: "Personalized Recommendations",
    description:
      "Generates intelligent product recommendations based on customer behavior and preferences.",
  },
  {
    icon: <BrainCircuit size={42} className="text-purple-500" />,
    title: "Deep Learning Model",
    description:
      "Powered by TensorFlow Recommenders using a Two-Tower Neural Network architecture.",
  },
  {
    icon: <Database size={42} className="text-green-500" />,
    title: "Redis Feature Store",
    description:
      "Stores user and item embeddings for ultra-fast retrieval during recommendation.",
  },
  {
    icon: <Search size={42} className="text-orange-500" />,
    title: "FAISS Similarity Search",
    description:
      "Uses Approximate Nearest Neighbor search for lightning-fast recommendation generation.",
  },
];

function Features() {
  return (
    <section
      id="features"
      className="bg-slate-900 text-white py-24"
    >
      <div className="max-w-7xl mx-auto px-8">

        <h2 className="text-5xl font-bold text-center mb-4">
          Powerful Features
        </h2>

        <p className="text-center text-gray-400 mb-16 text-lg">
          Built with modern AI technologies to deliver
          accurate and scalable recommendations.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {features.map((feature, index) => (

            <div
              key={index}
              className="bg-slate-800 rounded-2xl p-8 border border-slate-700
              hover:border-blue-500 hover:-translate-y-2
              transition-all duration-300"
            >

              {feature.icon}

              <h3 className="text-2xl font-semibold mt-6">
                {feature.title}
              </h3>

              <p className="text-gray-400 mt-4 leading-7">
                {feature.description}
              </p>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Features;