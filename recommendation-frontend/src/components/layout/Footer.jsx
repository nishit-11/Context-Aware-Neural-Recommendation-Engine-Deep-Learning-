function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 py-10">
      <div className="max-w-7xl mx-auto text-center">

        <h2 className="text-2xl font-bold text-white">
          Context-Aware Recommendation Engine
        </h2>

        <p className="text-slate-400 mt-3">
          Built using React • FastAPI • TensorFlow • Redis • FAISS
        </p>

        <p className="text-slate-500 mt-6">
          © 2026 Team Project
        </p>

      </div>
    </footer>
  );
}

export default Footer;