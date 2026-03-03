import { Facebook, Instagram } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-wood-900 text-gray-300 py-16 border-t border-wood-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:gap-12 mb-12">
          <div className="md:col-span-1">
            <h3 className="font-serif text-3xl font-bold text-white tracking-wider mb-6">
              RUZO
            </h3>
            <p className="text-gray-400 mb-6 max-w-sm text-sm">
              Tradición gallega y el mejor pulpo a feira en el corazón de O
              Carballiño. Calidad y sabor auténtico desde el primer bocado.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/pulperiaruzo/?locale=es_ES"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-wood-800 flex items-center justify-center hover:bg-terracotta-600 hover:text-white transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://www.instagram.com/pulperiaruzocarballino/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-wood-800 flex items-center justify-center hover:bg-terracotta-600 hover:text-white transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="#hero"
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Sobre Nosotros
                </a>
              </li>
              <li>
                <a
                  href="#menu"
                  className="hover:text-terracotta-400 transition-colors"
                >
                  La Carta
                </a>
              </li>
              <li>
                <a
                  href="#reviews"
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Reseñas
                </a>
              </li>
              <li>
                <a
                  href="#reservations"
                  className="hover:text-terracotta-400 transition-colors"
                >
                  Reservar Mesa
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">
              Horario
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li className="flex justify-between">
                <span>Lunes - Miércoles:</span>
                <span className="text-terracotta-400">Cerrado</span>
              </li>
              <li className="flex justify-between">
                <span>Jueves - Sábado:</span>
                <span>11:00 – 23:30</span>
              </li>
              <li className="flex justify-between">
                <span>Domingo:</span>
                <span>11:00 – 16:00</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white uppercase tracking-widest mb-6 text-sm">
              Contacto
            </h4>
            <ul className="space-y-3 text-sm">
              <li className="text-gray-400">Av. do Balneario, 1, bajo</li>
              <li className="text-gray-400">32500 O Carballiño, Ourense</li>
              <li className="pt-2">
                <a
                  href="tel:+34666094035"
                  className="text-terracotta-400 hover:text-white transition-colors text-xl font-medium"
                >
                  666 09 40 35
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-wood-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>
            &copy; {new Date().getFullYear()} Pulpería Ruzo. Todos los derechos
            reservados.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">
              Aviso Legal
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Política de Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
