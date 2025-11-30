'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '../context/LanguageContext'

export default function Navbar() {
  const { lang } = useLanguage() // <-- obtenemos idioma
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Links traducidos
  const links = [
    { name: lang === 'es' ? 'Servicios' : 'Services', href: '#services' },
    { name: lang === 'es' ? 'Proyectos' : 'Projects', href: '#projects' },
    { name: lang === 'es' ? 'Experiencia' : 'Experience', href: '#experience' },
    { name: lang === 'es' ? 'Habilidades' : 'Skills', href: '#skills' },
    { name: lang === 'es' ? 'Contáctame' : 'Contact', href: '#contact' }
  ]

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'backdrop-blur-lg bg-black/40 shadow-xl' : 'bg-transparent'
      }`}
    >
      {/* Partículas futuristas */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-purple-400/60 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo futurista con glow pulsante */}
        <h1 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-600 animate-text-glow cursor-pointer">
          Johan
        </h1>

        {/* Links desktop */}
        <div className="hidden md:flex gap-6 text-white font-medium">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="relative group hover:text-purple-400 transition-colors duration-300"
            >
              {link.name}
              <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple-400 transition-all group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* Hamburger mobile */}
        <div className="md:hidden">
          <button
            onClick={() => setOpen(!open)}
            className="text-white text-2xl focus:outline-none"
          >
            {open ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Menu mobile */}
      {open && (
        <div className="md:hidden bg-black/80 backdrop-blur-lg absolute w-full top-full left-0 shadow-lg animate-slide-down">
          <div className="flex flex-col gap-4 px-6 py-4 text-white font-semibold">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 px-2 hover:text-purple-400 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Animaciones y keyframes */}
      <style jsx>{`
        @keyframes textGlow {
          0%, 100% {
            text-shadow: 0 0 10px #8b5cf6, 0 0 20px #6366f1, 0 0 30px #a78bfa;
          }
          50% {
            text-shadow: 0 0 20px #a78bfa, 0 0 30px #8b5cf6, 0 0 40px #6366f1;
          }
        }
        .animate-text-glow {
          animation: textGlow 2.5s ease-in-out infinite;
        }

        @keyframes slideDown {
          0% {
            opacity: 0;
            transform: translateY(-20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-down {
          animation: slideDown 0.3s ease-out forwards;
        }

        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 5s ease-in-out infinite;
        }
      `}</style>
    </nav>
  )
}
