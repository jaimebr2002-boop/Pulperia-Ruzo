import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const reviews = [
  {
    name: "Marta Ruíz Somacarrera",
    text: "Estuvimos comiendo en fin de semana y nos trataron genial. La comida buenísima, el pulpo a la brasa impresionante. Los postres deliciosos. 100% recomendable.",
  },
  {
    name: "Rebeca Amil Fernández",
    text: "Hemos cenado un grupo grande y nos han tratado increíble. El pulpo a feira riquísimo y el churrasco abundante. Se nota la experiencia.",
  },
  {
    name: "Paula Ramos Torrente",
    text: "Local muy recomendado, el pulpo está buenísimo. Muy poco tiempo de espera y atención excelente.",
  },
  {
    name: "Fátima Sánchez Alonso",
    text: "Desde el primer momento nos trataron fenomenal. Especial mención al pulpo y la picaña.",
  },
  {
    name: "Daniel Diego Casas",
    text: "El mejor pulpo que he probado. Las croquetas… un espectáculo.",
  },
  {
    name: "Gabriel Martín",
    text: "Pulpo espectacular, en su punto, blandito pero con cuerpo. Difícil encontrarlo así.",
  },
  {
    name: "Talía García Conde",
    text: "Calidad-precio excelente. El pulpo y la tarta de queso son imprescindibles.",
  },
  {
    name: "Fer U",
    text: "Pulpo súper tierno y cachelos deliciosos. Atención muy amable.",
  },
  {
    name: "Santiago Pérez Domínguez",
    text: "Pulpo excelente, oreja chapó, limpieza exquisita. Lugar de referencia.",
  },
  {
    name: "Ricardo Montes",
    text: "Pulpería espectacular, comida sabrosa y trato excelente.",
  },
  {
    name: "María Rey",
    text: "Muy buen servicio, pulpo muy bueno y a buen precio. Repetiremos.",
  },
  {
    name: "Multiautos Ourense",
    text: "Agradable ambiente, muy buen servicio y comida excelente. Increíbles el pulpo y las croquetas.",
  },
];

export default function Reviews() {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(1);
      } else {
        setItemsPerPage(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(reviews.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentReviews = reviews.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section id="reviews" className="py-24 bg-terracotta-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-wood-900 mb-6">
            Reseñas de nuestros clientes
          </h2>
          
          <div className="flex flex-col items-center justify-center space-y-2">
            <div className="flex space-x-1">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className="w-8 h-8 fill-yellow-400 text-yellow-400"
                />
              ))}
            </div>
            <p className="text-xl font-bold text-wood-900 mt-2">
              4,5 sobre 5 en Google
            </p>
            <p className="text-gray-600 font-medium">
              Basado en más de 85 reseñas
            </p>
          </div>
        </div>

        <div className="relative px-4 md:px-12">
          {/* Navigation Arrows */}
          <button
            onClick={prevPage}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-terracotta-600 hover:bg-terracotta-50 hover:text-terracotta-700 transition-colors focus:outline-none"
            aria-label="Página anterior"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextPage}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-12 md:h-12 bg-white rounded-full shadow-md flex items-center justify-center text-terracotta-600 hover:bg-terracotta-50 hover:text-terracotta-700 transition-colors focus:outline-none"
            aria-label="Página siguiente"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Carousel Content */}
          <div className="overflow-hidden py-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentPage}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8"
              >
                {currentReviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100 flex flex-col h-full"
                  >
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-yellow-400 text-yellow-400"
                        />
                      ))}
                    </div>
                    <p className="text-gray-700 mb-6 italic leading-relaxed flex-grow text-[15px]">
                      "{review.text}"
                    </p>
                    <div>
                      <p className="font-bold text-wood-900">{review.name}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center space-x-2 mt-8">
            {[...Array(totalPages)].map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentPage(idx)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentPage === idx
                    ? "bg-terracotta-600 w-6"
                    : "bg-terracotta-200 hover:bg-terracotta-400"
                }`}
                aria-label={`Ir a la página ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <a
            href="https://www.google.com/maps/place/Pulperia+Ruzo/@42.4342822,-8.0788781,809m/data=!3m1!1e3!4m16!1m7!3m6!1s0xd2feda938b20933:0x233c12a998a21135!2sPulperia+Ruzo!8m2!3d42.43469!4d-8.07817!16s%2Fg%2F11xg78hvh7!3m7!1s0xd2feda938b20933:0x233c12a998a21135!8m2!3d42.43469!4d-8.07817!9m1!1b1!16s%2Fg%2F11xg78hvh7?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-8 py-4 bg-terracotta-600 text-white rounded-lg hover:bg-terracotta-700 transition-all duration-300 font-medium uppercase tracking-widest text-sm shadow-md hover:shadow-lg hover:-translate-y-1"
          >
            Deja tu reseña aquí
          </a>
        </div>
      </div>
    </section>
  );
}
