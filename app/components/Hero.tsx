'use client'

import Image from 'next/image'
import { useLanguage } from '../context/LanguageContext'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Hero() {
  const { lang } = useLanguage()

  const title = lang === 'es' ? 'Hola, soy Johan' : "Hi, I'm Johan"
  const subtitle = lang === 'es' ? 'Desarrollador Frontend' : 'Frontend Developer'
  const descr =
    lang === 'es'
      ? 'Construyo interfaces rápidas, accesibles y con diseño atractivo. Domino Next.js, React y Odoo.'
      : 'I build fast, accessible and visually strong interfaces. I work with Next.js, React and Odoo.'

  const electrons = [
    { label: 'JavaScript', radius: 120, duration: 8, color: '#f7df1e' },
    { label: 'Python', radius: 160, duration: 10, color: '#3776AB' },
    { label: 'React', radius: 200, duration: 12, color: '#61dafb' },
    { label: 'Odoo', radius: 240, duration: 14, color: '#7f5af0' },
    { label: 'Next.js', radius: 280, duration: 16, color: '#ed0909ff' }
  ]

  const stats = [
    { number: '2', label: lang === 'es' ? 'Años de Experiencia' : 'Years of Experience' },
    { number: '10', label: lang === 'es' ? 'Tecnologías Aprendidas' : 'Technologies Learned' },
    { number: '2', label: lang === 'es' ? 'Proyectos Personales' : 'Personal Projects' },
    { number: '3', label: lang === 'es' ? 'Proyectos (Code)' : 'Code Projects' }
  ]

  return (
    <section className="relative pt-28 pb-28 overflow-hidden flex justify-center items-center">
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>

      <div className="relative max-w-6xl mx-auto px-6 grid md:grid-cols-2 items-center gap-12 z-10">
        
        {/* ================= LEFT ================= */}
        <div className="text-center md:text-left">
          <motion.p
            className="text-accent font-semibold text-xl tracking-wide mb-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {title}
          </motion.p>

          <motion.h1
            className="text-5xl sm:text-7xl font-extrabold leading-tight text-neon"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2 }}
          >
            {subtitle.split(' ').map((word, idx) => (
              <motion.span
                key={idx}
                className="inline-block mr-3"
                animate={{ y: [0, -8, 0], rotate: [0, 2, -2, 0] }}
                transition={{ repeat: Infinity, duration: 3 + Math.random(), delay: idx * 0.15 }}
              >
                {word}
              </motion.span>
            ))}
          </motion.h1>

          <motion.p
            className="mt-6 text-secondary max-w-xl text-lg leading-relaxed text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.4 }}
          >
            {descr}
          </motion.p>

          <motion.div
            className="mt-8 flex justify-center md:justify-start gap-5 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.6 }}
          >
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              {lang === 'es' ? 'Descargar CV' : 'Download CV'}
            </a>

            <a href="https://github.com/johanmora10" target="_blank" className="btn-icon github">
              <FaGithub className="icon" />
            </a>

            <a
              href="https://www.linkedin.com/in/johan-esteban-mora-camelo-1911622ab/"
              target="_blank"
              className="btn-icon linkedin"
            >
              <FaLinkedin className="icon" />
            </a>
          </motion.div>

          {/* ===== STATS ===== */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8 text-center md:text-left">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center md:items-start"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.12 }}
              >
                <span className="text-4xl md:text-5xl font-extrabold text-[#b02aa6]">{s.number}</span>
                <span className="mt-2 text-gray-300 text-sm md:text-base leading-tight">{s.label}</span>
                <div className="w-10 h-[3px] bg-[#b02aa6] mt-3 rounded-full opacity-60"></div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT (ATOM) ================= */}
        <div className="relative flex justify-center items-center mt-10 md:mt-0">
          <div className="relative w-[600px] h-[600px]">

            {/* ORBITAS */}
            {electrons.map((e, idx) => (
              <div
                key={`orbit-line-${idx}`}
                className="absolute rounded-full border border-purple-400/20"
                style={{
                  width: e.radius * 2,
                  height: e.radius * 2,
                  top: `calc(50% - ${e.radius}px)`,
                  left: `calc(50% - ${e.radius}px)`,
                  zIndex: 5,
                }}
              />
            ))}

            {/* ELECTRONES */}
            {electrons.map((e, idx) => (
              <motion.div
                key={`orbit-${idx}`}
                className="absolute rounded-full"
                style={{
                  width: e.radius * 2,
                  height: e.radius * 2,
                  top: `calc(50% - ${e.radius}px)`,
                  left: `calc(50% - ${e.radius}px)`,
                  zIndex: 30,
                  pointerEvents: 'none'
                }}
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: e.duration, ease: 'linear' }}
              >
                <div
                  className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2"
                  style={{ top: 0 }}
                >
                  <div
                    className="px-3 py-1 rounded-full text-xs font-semibold shadow-md"
                    style={{
                      background: 'rgba(2,6,23,0.8)',
                      color: e.color,
                      border: '1px solid rgba(255,255,255,0.06)'
                    }}
                  >
                    {e.label}
                  </div>
                </div>
              </motion.div>
            ))}

            {/* NÚCLEO — SOLO CAMBIO: SUBIR IMAGEN */}
            <motion.div
              className="absolute top-1/2 left-1/2 w-44 h-44 rounded-full border-4 border-purple-400 shadow-2xl overflow-hidden -translate-y-22 -translate-x-22"
              style={{ transform: 'translate(-50%, -50%)' }}
              animate={{ scale: [1, 1.04, 1], rotate: [0, 4, -4, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
            >
              <Image
                src="/profile.jpg"
                alt="Johan"
                width={400}
                height={400}
                className="rounded-full object-cover w-full h-full"
              />
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
