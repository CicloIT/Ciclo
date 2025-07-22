import React from "react";

function ServicesExplanation() {
  return (
    <div className="max-w-3xl mx-auto py-10 px-4">
      {/* Desarrollo de Software */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-cyan-700">Desarrollo de Software</h2>
        <div className="mb-4 h-40 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
          <img
            src="/pag.webp"
            alt="Desarrollo de Software"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-lg mb-2">
          Ofrecemos soluciones integrales en desarrollo de software, adaptadas a las necesidades de tu negocio:
        </p>
        <ul className="list-disc list-inside mb-2">
          <li><b>Páginas Web:</b> Diseño y desarrollo de sitios web modernos, responsivos y optimizados para buscadores.</li>
          <li><b>Aplicaciones Web/Escritorio:</b> Sistemas personalizados que funcionan en la nube o en tu computadora, ideales para gestión interna o servicios a clientes.</li>
          <li><b>Aplicaciones Móviles:</b> Apps para Android y iOS, pensadas para mejorar la experiencia de tus usuarios y expandir tu alcance.</li>
        </ul>
        <p className="text-base text-gray-700">
          Te acompañamos desde la idea inicial hasta la puesta en marcha y el soporte continuo.
        </p>
      </section>

      {/* Ciberseguridad */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-rose-700">Ciberseguridad</h2>
        <div className="mb-4 h-40 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
          <img
            src="/seguridad.webp"
            alt="Ciberseguridad"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-lg">
          Protegemos tus sistemas y redes frente a amenazas digitales. Implementamos medidas de seguridad, monitoreo y respuesta ante incidentes para garantizar la continuidad y confidencialidad de tu información.
        </p>
      </section>

      {/* Planes de Soporte */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-cyan-600">Planes de Soporte</h2>
        <div className="mb-4 h-40 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
          <img
            src="/soporte.webp"
            alt="Planes de Soporte"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-lg mb-2">
          Contamos con 4 niveles de planes de soporte, adaptados a diferentes necesidades y presupuestos. Cada plan incluye distintos servicios y tiempos de respuesta para que elijas el que mejor se ajuste a tu empresa.
        </p>
      </section>

      {/* LcGestion */}
      <section className="mb-10">
        <h2 className="text-3xl font-bold mb-4 text-teal-700">LcGestion</h2>
        <div className="mb-4 h-40 bg-gray-100 flex items-center justify-center rounded overflow-hidden">
          <img
            src="/LcGestions.webp"
            alt="LcGestion Recursos Humanos"
            className="object-cover w-full h-full"
          />
        </div>
        <p className="text-lg">
          LcGestion es nuestro sistema de gestión de recursos humanos, diseñado para optimizar procesos como el control de asistencia, gestión de turnos, licencias y más. Facilita la administración y mejora la eficiencia de tu equipo.
        </p>
      </section>
    </div>
  );
}

export default ServicesExplanation; 