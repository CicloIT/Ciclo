function Footer() {
  return (
    <footer className="bg-slate-900 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="flex space-x-6 mb-4 md:mb-0">
            <a href="#" className="text-slate-400 hover:text-white transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 1200 1227">
                <path d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="text-center text-slate-400 text-sm">
          <p className="mb-2">&copy; {new Date().getFullYear()} CicloIT. Todos los derechos reservados.</p>
          <p>Diseñado y desarrollado por CicloIT.</p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
