import { motion } from "motion/react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-terracotta-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl">
              <img
                src="https://res.cloudinary.com/dfbsqy5ul/image/upload/v1772529848/625354862_18073278191413506_1810772956386757125_n._two6ps.jpg"
                alt="Interior de Pulpería Ruzo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-terracotta-600 rounded-full flex items-center justify-center p-6 hidden md:flex">
              <p className="text-white text-center font-serif italic text-xl leading-tight">
                Especialistas en pulpo tradicional
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-1 lg:order-2"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-900 mb-6">
              Nuestra Esencia
            </h2>
            <div className="w-20 h-1 bg-terracotta-500 mb-8"></div>

            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                Ubicados estratégicamente en O Carballiño, la cuna del mejor
                pulpo del mundo, en Pulpería Ruzo nos enorgullecemos de mantener
                viva la auténtica tradición culinaria gallega.
              </p>
              <p>
                Nuestro ambiente acogedor y trato cercano te harán sentir como
                en casa desde el primer momento. Seleccionamos cuidadosamente
                cada producto, garantizando la máxima calidad en cada plato que
                sale de nuestra cocina, con especial atención a nuestro plato
                estrella: el pulpo a feira.
              </p>
              <p>
                Ven a disfrutar de una experiencia gastronómica inolvidable
                donde las raíces locales y el sabor auténtico son los verdaderos
                protagonistas.
              </p>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-6 border-t border-terracotta-200 pt-8">
              <div>
                <h4 className="font-serif text-2xl font-bold text-terracotta-700 mb-2">
                  100%
                </h4>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  Producto Gallego
                </p>
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-terracotta-700 mb-2">
                  Tradición
                </h4>
                <p className="text-sm text-gray-600 uppercase tracking-wider">
                  Receta Original
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
