import { ArrowRight, Database, BrainCircuit } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "../../assets/images/hero.svg";

function Hero() {
  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center">
      <div className="max-w-7xl mx-auto px-8 grid lg:grid-cols-2 gap-16 items-center">

        {/* Left */}

        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <span className="text-blue-400 font-semibold tracking-widest uppercase">
            AI Powered Recommendation System
          </span>

          <h1 className="text-6xl font-extrabold mt-5 leading-tight">
            Context-Aware
            <span className="text-blue-500"> Neural </span>
            Recommendation Engine
          </h1>

          <p className="mt-8 text-gray-400 text-lg leading-8 max-w-xl">
            Empowering businesses with AI-driven personalized
    recommendations using TensorFlow Recommenders,
    Redis, FAISS, and FastAPI for scalable,
    high-performance inference.
          </p>

          <div className="flex gap-5 mt-10">

            <button className="bg-blue-600 hover:bg-blue-700 px-7 py-4 rounded-xl flex items-center gap-3 font-semibold">

              Get Started

              <ArrowRight />

            </button>

            <button className="border border-slate-600 hover:border-blue-500 px-7 py-4 rounded-xl">

              View Dashboard

            </button>

          </div>

          <div className="flex flex-wrap gap-4 mt-12">

  <span className="px-4 py-2 rounded-full bg-blue-500/20 text-blue-400">
    TensorFlow
  </span>

  <span className="px-4 py-2 rounded-full bg-green-500/20 text-green-400">
    Redis
  </span>

  <span className="px-4 py-2 rounded-full bg-orange-500/20 text-orange-400">
    FAISS
  </span>

  <span className="px-4 py-2 rounded-full bg-cyan-500/20 text-cyan-400">
    FastAPI
  </span>

  <span className="px-4 py-2 rounded-full bg-sky-500/20 text-sky-400">
    React
  </span>

  <span className="px-4 py-2 rounded-full bg-yellow-500/20 text-yellow-300">
    Vite
  </span>

</div>

        </motion.div>

        {/* Right */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >

          <div className="relative flex justify-center">
    {/* Blue Glow */}
    <div className="absolute w-96 h-96 bg-blue-500 rounded-full blur-[140px] opacity-20"></div>

    <img
        src={heroImage}
        alt="AI Recommendation"
        className="relative w-full max-w-lg"
    />

</div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;