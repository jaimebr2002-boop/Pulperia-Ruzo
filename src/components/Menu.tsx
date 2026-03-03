import { motion } from "motion/react";

const menuData = [
  {
    category: "🥘 Tapas",
    description: "Pequeños platos para compartir y disfrutar del sabor auténtico.",
    items: [
      { name: "Revuelto de gambas", price: "9€" },
      { name: "Zamburiñas a la plancha", price: "14€" },
      { name: "Navajas a la plancha", price: "12€" },
      { name: "Chipirones a la plancha", price: "10€" },
      { name: "Croquetas caseras", price: "8€" },
      { name: "Calamares a la romana", price: "9€" },
      { name: "Oreja", price: "6€" },
      { name: "Bao de pulpo con almendras y salsa", price: "8€" },
    ],
  },
  {
    category: "🍞 Tostas",
    description: "Combinaciones sabrosas con producto seleccionado.",
    items: [
      { name: "Tosta de pulpo con queso San Simón", price: "10€" },
      { name: "Tosta de secreto con pimientos", price: "10€" },
      { name: "Tosta de ventresca", price: "10€" },
    ],
  },
  {
    category: "🥗 Ensaladas",
    description: "Opciones frescas con ingredientes seleccionados.",
    items: [
      { name: "Ensalada Mixta", description: "(lechuga, tomate, cebolla)", price: "7€" },
      { name: "Ensalada Ruzo", description: "(lechuga, tomate, cebolla crujiente, zanahoria, remolacha, olivas y pulpo)", price: "10€" },
    ],
  },
  {
    category: "⭐ Especialidades",
    description: "Nuestros platos más representativos, donde el pulpo es el gran protagonista.",
    items: [
      { name: "Pulpo á feira", price: "11€", highlight: true },
      { name: "Pulpo a la plancha con puré de patata", price: "13€" },
      { name: "Cachelos", price: "2,50€" },
      { name: "Arroz con pulpo", description: "(mínimo 2 personas)", price: "28€" },
      { name: "Anguilas", price: "14€" },
    ],
  },
  {
    category: "🐟 Pescados",
    description: "Producto fresco preparado con sencillez para resaltar su sabor.",
    items: [
      { name: "Bacalao", price: "20€" },
      { name: "Merluza a la plancha", price: "14€" },
      { name: "Lenguado a la plancha", price: "18€" },
    ],
  },
  {
    category: "🥩 Carnes",
    description: "Selección de carnes tradicionales gallegas.",
    items: [
      { name: "Carne o caldeiro", price: "11€" },
      { name: "Picaña", price: "18€" },
      { name: "Entrecot", price: "14€" },
      { name: "Pollo picantón", price: "12€" },
      { name: "Churrasco de cerdo", price: "12€" },
      { name: "Churrasco de ternera", price: "14€" },
      { name: "Carrilleras", price: "12€" },
    ],
  },
  {
    category: "🍰 Postres",
    description: "El broche dulce para una comida tradicional.",
    items: [
      { name: "Arroz con leche", price: "5€" },
      { name: "Membrillo y queso", price: "5€" },
      { name: "Tarta de queso", price: "5€" },
      { name: "Tarta “Muerte por chocolate”", price: "6€" },
      { name: "Tarta Kinder Bueno", price: "6€" },
      { name: "Tarta de manzana", description: "(vegana)", price: "6€" },
      { name: "Bolas de helado", description: "(vegano)", price: "3€ / bola" },
    ],
  },
];

export default function Menu() {
  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-900 mb-4">
            La Carta
          </h2>
          <div className="w-24 h-1 bg-terracotta-500 mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            En Pulpería Ruzo apostamos por la tradición gallega y el producto de calidad. Nuestra carta combina recetas clásicas, especialidades del mar y carnes seleccionadas, con el pulpo como protagonista.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
          {menuData.map((section, idx) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="mb-6 border-b border-terracotta-200 pb-4">
                <h3 className="font-serif text-2xl font-bold text-terracotta-700 mb-2">
                  {section.category}
                </h3>
                <p className="text-gray-500 text-sm italic">
                  {section.description}
                </p>
              </div>
              <div className="space-y-6">
                {section.items.map((item) => (
                  <div
                    key={item.name}
                    className={`relative ${item.highlight ? "bg-terracotta-50 p-4 -mx-4 rounded-lg border border-terracotta-100" : ""}`}
                  >
                    {item.highlight && (
                      <span className="absolute -top-3 right-4 bg-terracotta-600 text-white text-xs font-bold px-2 py-1 rounded uppercase tracking-wider">
                        Plato Estrella
                      </span>
                    )}
                    <div className="flex justify-between items-baseline mb-1">
                      <h4
                        className={`font-serif text-xl font-semibold ${item.highlight ? "text-terracotta-800" : "text-wood-900"}`}
                      >
                        {item.name}
                      </h4>
                      <div className="flex-grow border-b border-dotted border-gray-300 mx-4"></div>
                      <span className="font-medium text-lg text-terracotta-700 whitespace-nowrap">
                        {item.price}
                      </span>
                    </div>
                    {item.description && (
                      <p className="text-gray-500 text-sm">{item.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
