import { motion } from "motion/react";
import { MapPin, Clock, Phone, Utensils, ShoppingBag } from "lucide-react";

export default function VisitUs() {
  return (
    <section id="visit" className="py-24 bg-terracotta-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-900 mb-6">
              Visítanos
            </h2>
            <div className="w-20 h-1 bg-terracotta-500 mb-10"></div>

            <div className="space-y-8">
              <div className="flex items-start space-x-4">
                <div className="bg-terracotta-100 p-3 rounded-full text-terracotta-700 mt-1">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood-900 text-lg mb-1">
                    Dirección
                  </h4>
                  <p className="text-gray-600">
                    Av. do Balneario, 1, bajo
                    <br />
                    32500 O Carballiño, Ourense
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-terracotta-100 p-3 rounded-full text-terracotta-700 mt-1">
                  <Clock className="w-6 h-6" />
                </div>
                <div className="w-full">
                  <h4 className="font-bold text-wood-900 text-lg mb-2">
                    Horario
                  </h4>
                  <ul className="text-gray-600 space-y-1 text-sm max-w-xs">
                    <li className="flex justify-between"><span>Lunes a Miércoles:</span> <span className="font-medium text-terracotta-700">Cerrado</span></li>
                    <li className="flex justify-between"><span>Jueves a Sábado:</span> <span>11:00 – 23:30</span></li>
                    <li className="flex justify-between"><span>Domingo:</span> <span>11:00 – 16:00</span></li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-terracotta-100 p-3 rounded-full text-terracotta-700 mt-1">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="font-bold text-wood-900 text-lg mb-1">
                    Teléfono
                  </h4>
                  <a
                    href="tel:+34666094035"
                    className="text-terracotta-600 hover:text-terracotta-800 font-medium text-lg transition-colors"
                  >
                    666 09 40 35
                  </a>
                </div>
              </div>

              <div className="pt-6 border-t border-terracotta-200">
                <h4 className="font-bold text-wood-900 text-lg mb-4">
                  Servicios
                </h4>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-terracotta-100 shadow-sm">
                    <Utensils className="w-4 h-4 text-terracotta-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Comer allí
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-white px-4 py-2 rounded-full border border-terracotta-100 shadow-sm">
                    <ShoppingBag className="w-4 h-4 text-terracotta-600" />
                    <span className="text-sm font-medium text-gray-700">
                      Recogida sin entrar
                    </span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3 italic">
                  * No disponemos de servicio a domicilio
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="h-[400px] lg:h-auto min-h-[400px] rounded-2xl overflow-hidden shadow-lg border-4 border-white"
          >
            {/* Placeholder for Google Maps iframe */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2938.834032483838!2d-8.0807469!3d42.43469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2feda938b20933%3A0x233c12a998a21135!2sPulperia%20Ruzo!5e0!3m2!1ses!2ses!4v1709424000000!5m2!1ses!2ses"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de ubicación de Pulpería Ruzo"
            ></iframe>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
