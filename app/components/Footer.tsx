'use client'

import { FaWhatsapp, FaEnvelope, FaLinkedinIn, FaGithub, FaTiktok } from 'react-icons/fa'
import { SiFiverr } from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="relative py-12 text-gray-400 overflow-hidden bg-[#05050a]">
      {/* Fondo espacial: partículas / estrellas sutiles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Glow morado suave de fondo */}
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-900/15 blur-[120px] rounded-full" />

        {/* Generación de estrellas estilo cosmos */}
        {[...Array(25)].map((_, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-white animate-pulse"
            style={{
              top: `${(i * 17) % 100}%`,
              left: `${(i * 23) % 100}%`,
              width: i % 3 === 0 ? '3px' : i % 2 === 0 ? '2px' : '1px',
              height: i % 3 === 0 ? '3px' : i % 2 === 0 ? '2px' : '1px',
              opacity: (i % 5 + 2) / 10,
              boxShadow: i % 3 === 0 ? '0 0 6px 1px rgba(168, 85, 247, 0.4)' : 'none',
              animationDuration: `${2 + (i % 4)}s`,
              animationDelay: `${i * 0.2}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 z-10">
        
        {/* Contenido Principal */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-12">
          
          {/* Columna 1: Perfil y Disponibilidad */}
          <div className="md:col-span-5 space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Johan<span className="text-purple-500">.</span>
            </h2>
            <p className="text-sm font-medium text-gray-400">
              Full Stack Developer · Odoo ERP · Automatización con IA
            </p>
            <p className="text-sm text-gray-400 max-w-sm leading-relaxed">
              {lang === 'es'
                ? 'Construyo sitios web, apps y automatizaciones que hacen crecer negocios en Colombia, España y México.'
                : 'I build websites, apps, and automations that help businesses grow in Colombia, Spain, and Mexico.'}
            </p>
            
            {/* Badge Disponibilidad */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-950/30 border border-emerald-800/40 text-emerald-400 text-xs font-medium mt-2 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              {lang === 'es' ? 'Disponible para nuevos proyectos' : 'Available for new projects'}
            </div>
          </div>

          {/* Columna 2: Navegación */}
          <div className="md:col-span-3 space-y-3">
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              {lang === 'es' ? 'NAVEGAR' : 'NAVIGATE'}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {lang === 'es' ? 'Servicios' : 'Services'}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-white transition-colors">
                  {lang === 'es' ? 'Proyectos' : 'Projects'}
                </a>
              </li>
              <li>
                <a href="#experience" className="hover:text-white transition-colors">
                  {lang === 'es' ? 'Experiencia' : 'Experience'}
                </a>
              </li>
              <li>
                <a href="#skills" className="hover:text-white transition-colors">
                  {lang === 'es' ? 'Habilidades' : 'Skills'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  {lang === 'es' ? 'Sobre mí' : 'About me'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  {lang === 'es' ? 'Contrátame' : 'Hire me'}
                </a>
              </li>
            </ul>
          </div>

          {/* Columna 3: Contacto Directo y Plataformas */}
          <div className="md:col-span-4 space-y-6">
            
            {/* Contacto Directo */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                {lang === 'es' ? 'CONTACTO DIRECTO' : 'DIRECT CONTACT'}
              </h3>
              <div className="space-y-2">
                {/* WhatsApp */}
                <a
                  href="https://wa.me/573189813014"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 transition-all border border-gray-800/50 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-md bg-gray-800/70 text-white">
                    <FaWhatsapp className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-semibold">WhatsApp</p>
                    <p className="text-xs text-gray-400">+57 318 981 3014</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:johanmora.tech@gmail.com"
                  className="flex items-center gap-3 p-2 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 transition-all border border-gray-800/50 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-md bg-gray-800/70 text-white">
                    <FaEnvelope className="text-base" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-semibold">Email</p>
                    <p className="text-xs text-gray-400">johanmora.tech@gmail.com</p>
                  </div>
                </a>

                {/* Fiverr Contact */}
                <a
                  href="https://fiverr.com/johan_mora_tech"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-3 p-2 rounded-lg bg-gray-900/40 hover:bg-gray-800/60 transition-all border border-gray-800/50 backdrop-blur-sm"
                >
                  <div className="p-2 rounded-md bg-gray-800/70 text-white">
                    <SiFiverr className="text-lg" />
                  </div>
                  <div>
                    <p className="text-xs text-white font-semibold">Fiverr</p>
                    <p className="text-xs text-gray-400">@johan_mora_tech</p>
                  </div>
                </a>
              </div>
            </div>

            {/* Plataformas Tags */}
            <div>
              <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                {lang === 'es' ? 'PLATAFORMAS' : 'PLATFORMS'}
              </h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-3 py-1 rounded-full bg-gray-900/60 border border-gray-800/60 text-xs text-gray-300">Fiverr</span>
                <span className="px-3 py-1 rounded-full bg-gray-900/60 border border-gray-800/60 text-xs text-gray-300">Workana</span>
                <span className="px-3 py-1 rounded-full bg-gray-900/60 border border-gray-800/60 text-xs text-gray-300">Contra</span>
              </div>
            </div>

          </div>
        </div>

        {/* Separador */}
        <div className="border-t border-gray-800/50 my-6" />

        {/* Barra Inferior (Copyright y Social Icons) */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
          <p>© {new Date().getFullYear()} Johan Mora · Todos los derechos reservados · Bogotá, Colombia</p>
          
          <div className="flex gap-2">
            <a href="https://github.com/johanmora10" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-900/60 border border-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-800/80 transition-colors">
              <FaGithub className="text-sm" />
            </a>
            <a href="https://www.linkedin.com/in/johan-esteban-mora-camelo-1911622ab/" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-900/60 border border-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-800/80 transition-colors">
              <FaLinkedinIn className="text-sm" />
            </a>
            <a href="https://www.tiktok.com/@johanmora.tech" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-900/60 border border-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-800/80 transition-colors">
              <FaTiktok className="text-sm" />
            </a>
            <a href="https://wa.me/573189813014" target="_blank" rel="noreferrer" className="p-2 rounded-lg bg-gray-900/60 border border-gray-800/60 text-gray-300 hover:text-white hover:bg-gray-800/80 transition-colors">
              <FaWhatsapp className="text-sm" />
            </a>
          </div>
        </div>

        {/* Crédito al pie */}
        <div className="text-center mt-6 text-xs text-gray-600">
          Hecho con <span className="text-purple-500">♥</span> por Johan — {new Date().getFullYear()}
        </div>

      </div>
    </footer>
  )
}