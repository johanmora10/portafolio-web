'use client'

import { useLanguage } from '../context/LanguageContext'
import { useMemo, useState } from 'react'

export default function PersonalSection() {
  const { lang } = useLanguage()
  const isEs = lang === 'es'

  const [copiedIndex, setCopiedIndex] = useState<number | null>(null)

  // Sistema de estrellas animadas en el fondo (idéntico a los otros componentes)
  const backgroundStars = useMemo(() => Array.from({ length: 400 }).map(() => {
    const rand = Math.random()
    let type = 'classic', size = '2px', glowColor = 'transparent'
    if (rand > 0.88) { type = 'cross'; size = '12px'; }
    else if (rand > 0.65) {
      type = 'glow'; size = '4px';
      const cols = ['rgba(6,182,212,0.6)', 'rgba(217,70,239,0.6)', 'rgba(139,92,246,0.6)']
      glowColor = cols[Math.floor(Math.random() * cols.length)]
    }
    return {
      left: Math.random() * 100, top: Math.random() * 100,
      size, type, glowColor,
      opacity: Math.random() * 0.6 + 0.3,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * -10,
    }
  }), [])

  // Textos exactos
  const paragraphs = [
    {
      title: isEs ? 'PÁRRAFO 01 — QUIÉN SOY Y QUÉ RESUELVO' : 'PARAGRAPH 01 — WHO I AM & WHAT I SOLVE',
      text: isEs ? (
        <>
          No soy solo un desarrollador que escribe código — soy el aliado técnico que tu negocio necesita para <strong className="text-white font-bold">crecer digitalmente</strong>. Llevo más de <span className="text-purple-400 font-bold">3 años</span> ayudando a empresas en <span className="text-purple-400 font-bold">Colombia, España y México</span> a construir presencia online, automatizar procesos y digitalizar operaciones completas con tecnología real.
        </>
      ) : (
        <>
          I am not just a developer who writes code — I am the technical ally your business needs to <strong className="text-white font-bold">grow digitally</strong>. I have spent over <span className="text-purple-400 font-bold">3 years</span> helping companies in <span className="text-purple-400 font-bold">Colombia, Spain, and Mexico</span> build online presence, automate processes, and digitalize operations with real technology.
        </>
      ),
      rawText: 'No soy solo un desarrollador que escribe código — soy el aliado técnico que tu negocio necesita para crecer digitalmente. Llevo más de 3 años ayudando a empresas en Colombia, España y México a construir presencia online, automatizar procesos y digitalizar operaciones completas con tecnología real.'
    },
    {
      title: isEs ? 'PÁRRAFO 02 — EN QUÉ SOY DIFERENTE' : 'PARAGRAPH 02 — HOW I AM DIFFERENT',
      text: isEs ? (
        <>
          Lo que me diferencia no es solo el stack técnico — es que <strong className="text-white font-bold">entiendo el negocio antes de escribir una línea de código</strong>. He implementado Odoo ERP para empresas reales, construido tiendas que venden desde el primer día e integrado <span className="text-purple-400 font-bold">inteligencia artificial</span> en procesos que antes tomaban horas. Mis clientes no reciben un sitio web bonito — reciben <strong className="text-white font-bold">una herramienta que trabaja por ellos</strong>.
        </>
      ) : (
        <>
          What sets me apart isn't just the tech stack — it's that <strong className="text-white font-bold">I understand the business before writing a single line of code</strong>. I've implemented Odoo ERP for real companies, built stores that sell from day one, and integrated <span className="text-purple-400 font-bold">artificial intelligence</span> into processes that used to take hours. My clients don't just get a pretty website — they get <strong className="text-white font-bold">a tool that works for them</strong>.
        </>
      ),
      rawText: 'Lo que me diferencia no es solo el stack técnico — es que entiendo el negocio antes de escribir una línea de código. He implementado Odoo ERP para empresas reales, construido tiendas que venden desde el primer día e integrado inteligencia artificial en procesos que antes tomaban horas. Mis clientes no reciben un sitio web bonito — reciben una herramienta que trabaja por ellos.'
    },
    {
      title: isEs ? 'PÁRRAFO 03 — CÓMO TRABAJO' : 'PARAGRAPH 03 — HOW I WORK',
      text: isEs ? (
        <>
          Trabajo con <strong className="text-white font-bold">comunicación clara, entregas a tiempo y cero sorpresas</strong>. Cada proyecto tiene etapas definidas, avances visibles y un canal directo conmigo — sin intermediarios, sin demoras. Si tienes una idea, un problema o un proceso que quieres mejorar, <span className="text-purple-400 font-bold">hablemos</span>. Probablemente ya sé cómo resolverlo.
        </>
      ) : (
        <>
          I work with <strong className="text-white font-bold">clear communication, on-time deliveries, and zero surprises</strong>. Every project has defined stages, visible progress, and a direct line to me — no middlemen, no delays. If you have an idea, a problem, or a process you want to improve, <span className="text-purple-400 font-bold">let's talk</span>. I probably already know how to solve it.
        </>
      ),
      rawText: 'Trabajo con comunicación clara, entregas a tiempo y cero sorpresas. Cada proyecto tiene etapas definidas, avances visibles y un canal directo conmigo — sin intermediarios, sin demoras. Si tienes una idea, un problema o un proceso que quieres mejorar, hablemos. Probablemente ya sé cómo resolverlo.'
    }
  ]

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text)
    setCopiedIndex(index)
    setTimeout(() => setCopiedIndex(null), 2000)
  }

  return (
    <section id="about" className="relative py-28 overflow-hidden font-sans text-white">
      {/* Fondo Degradado Base */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#03030b] via-[#020112] to-[#01010a]" />

      {/* Efectos de Nebulosa */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,_rgba(6,182,212,0.06),transparent_50%)] animate-nebula-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,_rgba(139,92,246,0.05),transparent_60%)] animate-nebula-pulse" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Estrellas Animadas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {backgroundStars.map((s, i) => (
          <div key={i} className={`absolute animate-twinkle ${s.type === 'cross' ? 'flex items-center justify-center' : 'rounded-full'}`} 
            style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, backgroundColor: s.type !== 'cross' ? '#ffffff' : 'transparent', boxShadow: s.type === 'glow' ? `0 0 10px 3px ${s.glowColor}` : 'none', opacity: s.opacity, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s` }}>
            {s.type === 'cross' && (
              <>
                <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent" />
              </>
            )}
          </div>
        ))}
      </div>

      {/* Contenido Principal */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-14">
          <p className="text-purple-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
            {isEs ? 'EL DESARROLLADOR DETRÁS DEL CÓDIGO' : 'THE DEVELOPER BEHIND THE CODE'}
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
            {isEs ? (
              <>Sobre mí — <span className="text-purple-400">por qué elegirme</span></>
            ) : (
              <>About me — <span className="text-purple-400">why choose me</span></>
            )}
          </h2>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Columna Izquierda: Tarjeta de Perfil & Estadísticas */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            
            {/* Tarjeta de Perfil */}
            <div className="bg-[#0b0c1b]/80 border border-purple-500/20 rounded-3xl p-8 text-center backdrop-blur-md shadow-xl flex flex-col items-center">
              <div className="w-28 h-28 rounded-full bg-purple-500/20 border border-purple-400/30 flex items-center justify-center mb-5 relative shadow-inner">
                <span className="text-5xl">👨‍💻</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-1">Johan Mora</h3>
              <p className="text-gray-400 text-sm mb-6">Full Stack · Odoo · IA</p>
              
              <div className="inline-flex items-center gap-2 bg-emerald-950/60 border border-emerald-800/50 px-4 py-1.5 rounded-full text-emerald-400 text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {isEs ? 'Disponible ahora' : 'Available now'}
              </div>
            </div>

            {/* Tabla de Estadísticas */}
            <div className="bg-[#0b0c1b]/80 border border-purple-500/20 rounded-3xl p-6 backdrop-blur-md shadow-xl flex flex-col gap-4 text-sm">
              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-gray-400">{isEs ? 'Experiencia' : 'Experience'}</span>
                <span className="text-purple-400 font-bold">3+ años</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-gray-400">{isEs ? 'Proyectos reales' : 'Real projects'}</span>
                <span className="text-purple-300 font-bold">{isEs ? '5 entregados' : '5 delivered'}</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-gray-400">{isEs ? 'Calificación' : 'Rating'}</span>
                <span className="text-emerald-400 font-bold">5/5 ★ Workana</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-gray-400">{isEs ? 'Países' : 'Countries'}</span>
                <span className="text-gray-200 font-bold tracking-wider">CO ES MX</span>
              </div>

              <div className="flex justify-between items-center pb-3 border-b border-white/5">
                <span className="text-gray-400">{isEs ? 'Incumplimientos' : 'Defaults'}</span>
                <span className="text-emerald-400 font-bold">{isEs ? '0 — ninguno' : '0 — none'}</span>
              </div>

              <div className="flex justify-between items-center">
                <span className="text-gray-400">{isEs ? 'Respuesta' : 'Response time'}</span>
                <span className="text-emerald-400 font-bold">{isEs ? 'menos de 24h' : 'less than 24h'}</span>
              </div>
            </div>

          </div>

          {/* Columna Derecha: Párrafos Explicativos */}
          <div className="lg:col-span-8 flex flex-col gap-6">
            {paragraphs.map((item, idx) => (
              <div key={idx} className="bg-[#0b0c1b]/80 border border-purple-500/20 rounded-3xl p-6 sm:p-8 backdrop-blur-md shadow-xl relative group transition-all duration-300 hover:border-purple-500/40">
                <div className="flex justify-between items-center mb-4 gap-4">
                  <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">
                    {item.title}
                  </span>
                  <button
                    onClick={() => handleCopy(item.rawText, idx)}
                    className="bg-white/5 hover:bg-white/10 border border-white/10 text-white text-xs font-semibold px-4 py-1.5 rounded-lg transition-all duration-200 shrink-0 active:scale-95"
                  >
                    {copiedIndex === idx ? (isEs ? '¡Copiado!' : 'Copied!') : (isEs ? 'Copiar' : 'Copy')}
                  </button>
                </div>
                <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-normal">
                  {item.text}
                </p>
              </div>
            ))}

            {/* Etiquetas / Badges Tecnológicos al Final */}
            <div className="flex flex-wrap gap-3 mt-2">
              <span className="bg-[#0b0c1b]/90 border border-purple-500/30 text-purple-300 text-xs px-4 py-2 rounded-full font-medium">
                Odoo ERP
              </span>
              <span className="bg-[#0b0c1b]/90 border border-purple-500/30 text-purple-300 text-xs px-4 py-2 rounded-full font-medium">
                React · Next.js
              </span>
              <span className="bg-[#0b0c1b]/90 border border-purple-500/30 text-purple-300 text-xs px-4 py-2 rounded-full font-medium">
                Laravel
              </span>
              <span className="bg-[#0b0c1b]/90 border border-purple-500/30 text-purple-300 text-xs px-4 py-2 rounded-full font-medium">
                Automatización IA
              </span>
              <span className="bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs px-4 py-2 rounded-full font-semibold">
                Disponible ahora
              </span>
              <span className="bg-emerald-950/60 border border-emerald-800/50 text-emerald-400 text-xs px-4 py-2 rounded-full font-semibold">
                Entrega rápida
              </span>
              <span className="bg-[#0b0c1b]/90 border border-purple-500/30 text-gray-300 text-xs px-4 py-2 rounded-full font-medium">
                Colombia · España · México
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Animaciones CSS */}
      <style jsx global>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.95; } }
        @keyframes nebula-pulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
        .animate-nebula-pulse { animation: nebula-pulse 15s ease-in-out infinite; }
      `}</style>
    </section>
  )
}