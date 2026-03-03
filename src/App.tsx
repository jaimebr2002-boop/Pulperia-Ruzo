import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Menu from "./components/Menu";
import Reviews from "./components/Reviews";
import VisitUs from "./components/VisitUs";
import Reservations from "./components/Reservations";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-terracotta-50 font-sans selection:bg-terracotta-200 selection:text-wood-900 scroll-smooth">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Menu />
        <Reviews />
        <VisitUs />
        <Reservations />
      </main>
      <Footer />
    </div>
  );
}
