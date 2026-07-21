import { BrainCircuit } from "lucide-react";

function Navbar() {
  return (
    <nav className="w-full bg-slate-900 border-b border-slate-700 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-8 py-4 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center gap-3">
          <BrainCircuit className="text-blue-400" size={34} />
          <h1 className="text-2xl font-bold text-white">
            AI Recommendation Engine
          </h1>
        </div>

        {/* Menu */}
        <div className="hidden md:flex gap-10 text-gray-300 font-medium">

          <a href="#home" className="hover:text-blue-400 duration-300">
            Home
          </a>

          <a href="#features" className="hover:text-blue-400 duration-300">
            Features
          </a>

          <a href="#tech" className="hover:text-blue-400 duration-300">
            Tech Stack
          </a>

          <a href="#architecture" className="hover:text-blue-400 duration-300">
            Architecture
          </a>

        </div>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 px-5 py-2 rounded-lg text-white font-semibold transition">
          Get Started
        </button>

      </div>
    </nav>
  );
}

export default Navbar;