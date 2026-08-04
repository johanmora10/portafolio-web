'use client'

import { useLanguage } from '../context/LanguageContext'
import { useMemo } from 'react'

export default function TestimonialsSection() {
  const { lang } = useLanguage()
  const isEs = lang === 'es'

  // Sistema de fondo de estrellas exactamente igual a HireMe
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

  const testimonials = [
    {
      badge: '✓ Verificado en Workana',
      badgeColor: 'bg-indigo-600/80 text-white',
      stars: 5,
      text: 'Johan entregó el módulo de Odoo antes del plazo acordado. La comunicación fue excelente durante todo el proyecto y el resultado superó lo que esperábamos. Definitivamente lo volvería a contratar.',
      avatar: 'A',
      avatarBg: 'bg-indigo-500',
      name: 'Alejandro Ramos',
      role: isEs ? 'Director de Operaciones' : 'Operations Director',
      details: 'España · Proyecto Odoo ERP',
      tags: ['Sistema de gestión de gastos', 'Odoo', 'Python'],
      isFeatured: true,
      sideBox: {
        score: '5/5',
        label: 'Calificación Workana'
      }
    },
    {
      badge: '✓ Cliente verificado',
      badgeColor: 'bg-emerald-900/60 text-emerald-400 border border-emerald-700/50',
      stars: 5,
      text: 'El sistema que Johan construyó para nuestra empresa de frutas y verduras cambió completamente cómo manejamos el inventario. Ya no perdemos pedidos.',
      avatar: 'M',
      avatarBg: 'bg-emerald-600',
      name: 'Mateo Benítez',
      role: isEs ? 'Gerente General · Agrofrescos' : 'General Manager · Agrofrescos',
      details: 'Colombia · Empresa Hortofrutícola',
      tags: ['Inventario', 'Odoo', 'Python'],
      isFeatured: false
    },
    {
      badge: '✓ Cliente verificado',
      badgeColor: 'bg-emerald-900/60 text-emerald-400 border border-emerald-700/50',
      stars: 5,
      text: 'Necesitábamos organizar todas nuestras propiedades y contratos en un solo sistema. Johan lo implementó en Odoo y ahora todo el equipo trabaja desde ahí.',
      avatar: 'V',
      avatarBg: 'bg-purple-600',
      name: 'Valeria Cárdenas',
      role: isEs ? 'Directora Inmobiliaria' : 'Real Estate Director',
      details: 'México · Inmobiliaria Luxe',
      tags: ['ERP Inmobiliario', 'Contratos', 'Odoo'],
      isFeatured: false
    },
    {
      badge: 'Fiverr',
      badgeColor: 'bg-emerald-500 text-black font-bold',
      stars: 5,
      text: 'Entregó el sitio web del gimnasio mucho más rápido de lo esperado. El diseño quedó exactamente como lo imaginaba y la comunicación fue muy clara.',
      avatar: 'D',
      avatarBg: 'bg-red-500',
      name: 'Diego Santamaría',
      role: isEs ? 'Fundador · Vitalis Gym' : 'Founder · Vitalis Gym',
      details: 'Colombia · Gimnasio',
      tags: ['Sitio web', 'Webflow', 'UI/UX'],
      isFeatured: false
    },
    {
      badge: '✓ Cliente verificado',
      badgeColor: 'bg-emerald-900/60 text-emerald-400 border border-emerald-700/50',
      stars: 5,
      text: 'Johan no solo entrega código — explica cada decisión técnica para que uno entienda qué se está construyendo. Eso marca la diferencia con otros desarrolladores.',
      avatar: 'S',
      avatarBg: 'bg-cyan-500',
      name: 'Santiago Villarreal',
      role: isEs ? 'Líder de Producto' : 'Product Lead',
      details: 'México · Proyecto a medida',
      tags: ['Desarrollo Full Stack', 'React', 'Node.js'],
      isFeatured: false
    }
  ]

  return (
    <section id="testimonials" className="relative py-32 overflow-hidden font-sans text-white">
      {/* Fondo Degradado Base */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#03030b] via-[#020112] to-[#01010a]" />

      {/* Efecto Nebulosa de fondo */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,_rgba(6,182,212,0.06),transparent_50%)] animate-nebula-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,_rgba(139,92,246,0.05),transparent_60%)] animate-nebula-pulse" style={{ animationDelay: '-4s' }} />
      </div>

      {/* Estrellas Dinámicas en el Fondo */}
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
        <div className="text-center mb-12">
          <p className="text-cyan-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
            {isEs ? 'LO QUE DICEN LOS CLIENTES' : 'WHAT CLIENTS SAY'}
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-500">
            {isEs ? 'Resultados reales, clientes reales' : 'Real results, real clients'}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            {isEs
              ? 'Cada proyecto entregado con calidad, a tiempo y con comunicación clara.'
              : 'Every project delivered with quality, on time, and with clear communication.'}
          </p>
        </div>

        {/* Barra de Estadísticas */}
        <div className="bg-[#0a0a12]/80 border border-white/10 rounded-2xl p-6 mb-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center backdrop-blur-md shadow-xl">
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">5/5</div>
            <div className="text-amber-400 text-xs my-1">★★★★★</div>
            <div className="text-gray-400 text-xs">{isEs ? 'Calificación Workana' : 'Workana Rating'}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">100%</div>
            <div className="text-emerald-400 text-xs my-1">✓ ✓ ✓</div>
            <div className="text-gray-400 text-xs">{isEs ? 'Opiniones positivas' : 'Positive reviews'}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">3</div>
            <div className="text-xs my-1">🌍 🌍 🌍</div>
            <div className="text-gray-400 text-xs">{isEs ? 'Países atendidos' : 'Countries served'}</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-extrabold text-white">0</div>
            <div className="text-amber-400 text-xs my-1">⚡ ⚡ ⚡</div>
            <div className="text-gray-400 text-xs">{isEs ? 'Incumplimientos' : 'Defaults'}</div>
          </div>
        </div>

        {/* Testimonio Principal / Destacado */}
        {testimonials.filter(t => t.isFeatured).map((item, idx) => (
          <div key={idx} className="bg-[#0a0a12]/80 border border-purple-500/30 rounded-2xl p-6 sm:p-8 mb-8 relative backdrop-blur-md shadow-2xl">
            <div className="flex flex-col md:flex-row justify-between gap-6 items-start">
              <div className="flex-1">
                <span className={`inline-block text-xs font-semibold px-3.5 py-1 rounded-full mb-4 shadow-sm ${item.badgeColor}`}>
                  {item.badge}
                </span>
                <div className="text-amber-400 text-sm mb-3">★★★★★</div>
                <blockquote className="text-gray-200 text-base sm:text-lg italic leading-relaxed mb-6">
                  “ {item.text} ”
                </blockquote>
                
                <div className="flex items-center gap-3.5 mb-5">
                  <div className={`w-12 h-12 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-white text-lg shrink-0 shadow-lg ring-2 ring-purple-500/30`}>
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-base flex items-center gap-1.5">
                      {item.name}
                    </h4>
                    <p className="text-cyan-400 font-medium text-xs">{item.role}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.details}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-white/5 text-gray-300 text-xs px-3 py-1 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Caja Lateral Workana */}
              {item.sideBox && (
                <div className="w-full md:w-auto bg-[#111227] border border-purple-500/30 rounded-2xl p-6 flex flex-col items-center justify-center text-center min-w-[150px] shrink-0">
                  <span className="text-3xl font-extrabold text-white">{item.sideBox.score}</span>
                  <div className="text-amber-400 text-xs my-1.5">★★★★★</div>
                  <span className="text-xs text-gray-400 font-medium max-w-[100px]">{item.sideBox.label}</span>
                </div>
              )}
            </div>
          </div>
        ))}

        {/* Grid de Testimonios Secundarios */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {testimonials.filter(t => !t.isFeatured).map((item, idx) => (
            <div key={idx} className="bg-[#0a0a12]/80 border border-white/10 rounded-2xl p-6 flex flex-col justify-between relative backdrop-blur-md shadow-lg hover:border-cyan-500/40 transition-all duration-300">
              <div>
                <div className="flex justify-between items-start mb-4">
                  <div className="text-amber-400 text-sm">★★★★★</div>
                  <span className={`text-xs font-semibold px-3 py-1 rounded-full ${item.badgeColor}`}>
                    {item.badge}
                  </span>
                </div>

                <blockquote className="text-gray-200 text-sm italic leading-relaxed mb-6">
                  “ {item.text} ”
                </blockquote>
              </div>

              <div>
                <div className="flex items-center gap-3.5 mb-4">
                  <div className={`w-10 h-10 rounded-full ${item.avatarBg} flex items-center justify-center font-bold text-white text-sm shrink-0 shadow-md ring-2 ring-white/10`}>
                    {item.avatar}
                  </div>
                  <div>
                    <h4 className="font-bold text-white text-sm">{item.name}</h4>
                    <p className="text-cyan-400 font-medium text-xs">{item.role}</p>
                    <p className="text-gray-400 text-xs mt-0.5">{item.details}</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2">
                  {item.tags.map((tag, i) => (
                    <span key={i} className="bg-white/5 text-gray-300 text-xs px-2.5 py-1 rounded-full border border-white/10">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Animaciones CSS globales idénticas a HireMe */}
      <style jsx global>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.95; } }
        @keyframes nebula-pulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
        .animate-nebula-pulse { animation: nebula-pulse 15s ease-in-out infinite; }
      `}</style>
    </section>
  )
}