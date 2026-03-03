import { motion } from "motion/react";
import { PhoneCall } from "lucide-react";

export default function Reservations() {
  return (
    <section
      id="reservations"
      className="py-24 bg-white relative overflow-hidden"
    >
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta-50 rounded-full mix-blend-multiply filter blur-3xl opacity-70 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-terracotta-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 translate-x-1/3 translate-y-1/3"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-900 mb-4">
            Reserva tu Mesa
          </h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
          <p className="text-gray-600 text-lg">
            Asegura tu sitio para disfrutar de la auténtica gastronomía gallega.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 md:p-12 text-center"
        >
          <div className="w-20 h-20 bg-terracotta-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <PhoneCall className="w-10 h-10 text-terracotta-600" />
          </div>
          <h3 className="font-serif text-3xl font-bold text-wood-900 mb-4">
            Llámanos para reservar
          </h3>
          <p className="text-gray-600 text-lg mb-8 max-w-lg mx-auto">
            Para ofrecerte la mejor atención y confirmar disponibilidad al instante, gestionamos todas nuestras reservas por teléfono.
          </p>
          <a
            href="tel:+34666094035"
            className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-colors font-medium uppercase tracking-widest text-sm shadow-md hover:shadow-lg w-full sm:w-auto"
          >
            Llamar al 666 09 40 35
          </a>
        </motion.div>
      </div>
    </section>
  );
}
