import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import Features from "./components/home/Features";
import Architecture from "./components/home/Architecture";
import RecommendationDashboard from "./components/dashboard/RecommendationDashboard";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="bg-slate-950">
      <Navbar />
      <Hero />
      <Features />
      <Architecture />
      <RecommendationDashboard />
      <Footer />
    </div>
  );
}

export default App;