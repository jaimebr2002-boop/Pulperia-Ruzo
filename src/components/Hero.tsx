import { motion } from "motion/react";
import { Star } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?auto=format&fit=crop&q=80&w=1920")',
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 tracking-tight">
            Pulpería Ruzo
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 mb-10 font-light tracking-wide max-w-2xl mx-auto">
            Tradición gallega en el corazón de O Carballiño
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#menu"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white text-white hover:bg-white hover:text-black transition-all duration-300 font-medium uppercase tracking-widest text-sm"
            >
              Ver Carta
            </a>
            <a
              href="#reservations"
              className="w-full sm:w-auto px-8 py-4 bg-terracotta-600 border border-terracotta-600 text-white hover:bg-terracotta-700 hover:border-terracotta-700 transition-all duration-300 font-medium uppercase tracking-widest text-sm"
            >
              Reservar Mesa
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
