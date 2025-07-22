import {
  Clock,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
} from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Logo e info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="bg-green-600 p-2 rounded-xl">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold tracking-tight">LCGestion</span>
            </div>
            <p className="text-gray-400 leading-relaxed mb-6">
              La plataforma líder en control de asistencia empresarial. 
              Transformamos la gestión de RRHH con tecnología innovadora.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Facebook className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a href="#" className="bg-gray-800 p-2 rounded-lg hover:bg-gray-700 transition-colors">
                <Linkedin className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Productos */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Productos</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Control de Asistencia</a></li>
              <li><a href="#" className="hover:text-white transition">Gestión de Horarios</a></li>
              <li><a href="#" className="hover:text-white transition">Reportes Avanzados</a></li>
              <li><a href="#" className="hover:text-white transition">App Móvil</a></li>
              <li><a href="#" className="hover:text-white transition">Integración Nómina</a></li>
            </ul>
          </div>

          {/* Soporte */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Soporte</h3>
            <ul className="space-y-3 text-gray-400">
              <li><a href="#" className="hover:text-white transition">Centro de Ayuda</a></li>
              <li><a href="#" className="hover:text-white transition">Documentación</a></li>
              <li><a href="#" className="hover:text-white transition">Tutoriales</a></li>
              <li><a href="#" className="hover:text-white transition">Estado del Sistema</a></li>
              <li><a href="#" className="hover:text-white transition">Contactar Soporte</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contacto</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-green-500" />
                <span>Completar</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-green-500" />
                <span>Completar</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-5 w-5 text-green-500" />
                <span>Completar</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 LCGestion. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Términos de Servicio
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Política de Privacidad
              </a>
              <a href="#" className="text-gray-400 hover:text-white text-sm transition">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
