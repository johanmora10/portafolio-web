'use client'

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { useLanguage } from '../context/LanguageContext'

export default function Footer() {
  const { lang } = useLanguage()

  return (
    <footer className="relative py-12 mt-12 bg-black/60 backdrop-blur-lg">
      {/* Partículas flotantes sutiles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="absolute w-1 h-1 bg-purple-400/50 rounded-full animate-float"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 5}s`
            }}
          />
        ))}
      </div>

      <div className="relative max-w-6xl mx-auto px-6 text-center flex flex-col items-center gap-4">
        <p className="text-gray-300 font-medium text-lg animate-glow">
          {lang === 'es'
            ? `Hecho con ❤️ por Johan — ${new Date().getFullYear()}`
            : `Made with ❤️ by Johan — ${new Date().getFullYear()}`}
        </p>

        {/* Redes sociales */}
        <div className="flex gap-6 mt-2">
          <a
            href="https://github.com/johanmora10"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl hover:text-purple-400 transition-colors duration-300"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/johan-esteban-mora-camelo-1911622ab/"
            target="_blank"
            rel="noreferrer"
            className="text-white text-xl hover:text-blue-500 transition-colors duration-300"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:johan@example.com"
            className="text-white text-xl hover:text-pink-400 transition-colors duration-300"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
          100% { transform: translateY(0px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

        @keyframes glow {
          0%, 100% {
            text-shadow: 0 0 5px #8b5cf6, 0 0 10px #6366f1, 0 0 15px #a78bfa;
          }
          50% {
            text-shadow: 0 0 10px #a78bfa, 0 0 15px #8b5cf6, 0 0 20px #6366f1;
          }
        }
        .animate-glow {
          animation: glow 2.5s ease-in-out infinite;
        }
      `}</style>
    </footer>
  )
}
