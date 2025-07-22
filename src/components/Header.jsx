import { useState } from "react"
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom"
import { useNavigate } from "react-router-dom";
// Componente Header separado
function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate();

  const isActive = (path) => {
    return location.pathname === path ? "text-blue-400" : "hover:text-blue-400"
  }

  const handleContactoClick = () => {
    if (location.pathname === "/") {
      document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate("/#contact");
    }
    setIsMenuOpen(false);
  };

  return (

    <header className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-sm z-50 border-b border-slate-800">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold hover:text-blue-400 transition-colors">
            <img src="/icono.webp" alt="Logo" className="h-15 inline-block mr-2" />         
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className={`${isActive('/')} transition-colors`}>
            Inicio
          </Link>
          <Link to="/servicios" className={`${isActive('/servicios')} transition-colors`}>
            Servicios
          </Link>
          <Link to="/planes" className={`${isActive('/planes')} transition-colors`}>
            Planes
          </Link>
          <Link to="/nosotros" className={`${isActive('/nosotros')} transition-colors`}>
            Sobre Nosotros
          </Link>
           <Link to="/cursos" className={`${isActive('/cursos')} transition-colors`}>
            Cursos
          </Link>
          <button
            onClick={handleContactoClick}
            className={`transition-colors ${isActive('/contacto')}`}
          >
            Contacto
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 hover:bg-slate-800 rounded" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-slate-800 border-t border-slate-700">
          <div className="px-4 py-2 space-y-2">
            <Link to="/" className={`block py-2 ${isActive('/')} transition-colors`} onClick={() => setIsMenuOpen(false)}>
              Inicio
            </Link>
            <Link to="/servicios" className={`block py-2 ${isActive('/servicios')} transition-colors`} onClick={() => setIsMenuOpen(false)}>
              Servicios
            </Link>
            <Link to="/planes" className={`block py-2 ${isActive('/planes')} transition-colors`} onClick={() => setIsMenuOpen(false)}>
              Planes
            </Link>
            <Link to="/nosotros" className={`block py-2 ${isActive('/nosotros')} transition-colors`} onClick={() => setIsMenuOpen(false)}>
              Sobre Nosotros
            </Link>
             <Link to="/cursos" className={`block py-2 ${isActive('/cursos')} transition-colors`} onClick={() => setIsMenuOpen(false)}>
              Cursos
            </Link>
            <a
              onClick={handleContactoClick}
              className="block py-2 hover:text-blue-400 transition-colors cursor-pointer"
            >
              Contacto
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Header;