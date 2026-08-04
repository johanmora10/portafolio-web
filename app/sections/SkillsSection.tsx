'use client'

import { useMemo } from 'react'
import { useLanguage } from '../context/LanguageContext'
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaGitAlt, FaLinux, FaTasks
} from 'react-icons/fa'
import { 
  SiNextdotjs, SiTailwindcss, SiLaravel, SiPostgresql, SiMysql, SiMongodb, SiFigma, SiOdoo
} from 'react-icons/si'
import { BsStars } from 'react-icons/bs'

export default function SkillsSection() {
  const { lang } = useLanguage()
  const isEs = lang === 'es'

  // Sistema de fondo de estrellas animadas
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

  // Renderizado de los puntos de nivel (dots)
  const renderDots = (dotsCount: number, highlightedColor: string = 'bg-emerald-400') => {
    return (
      <div className="flex gap-1.5 mt-2">
        {Array.from({ length: 5 }).map((_, idx) => (
          <span
            key={idx}
            className={`w-2 h-2 rounded-full ${
              idx < dotsCount ? highlightedColor : 'bg-gray-700/60'
            }`}
          />
        ))}
      </div>
    )
  }

  // Secciones de habilidades
  const categories = [
    {
      title: 'FRONTEND',
      skills: [
        {
          name: 'React',
          level: isEs ? 'Avanzado' : 'Advanced',
          dots: 4,
          isHighlight: true,
          iconContainerClass: 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/40',
          icon: <FaReact className="text-xl" />
        },
        {
          name: 'Next.js',
          level: isEs ? 'Avanzado' : 'Advanced',
          dots: 4,
          isHighlight: true,
          iconContainerClass: 'bg-gray-900 border border-emerald-500/40 text-white',
          icon: <SiNextdotjs className="text-xl" />
        },
        {
          name: 'Tailwind',
          level: isEs ? 'Avanzado' : 'Advanced',
          dots: 4,
          isHighlight: false,
          iconContainerClass: 'bg-sky-950/60 text-sky-400 border border-sky-800/40',
          icon: <SiTailwindcss className="text-xl" />
        },
        {
          name: 'JavaScript',
          level: isEs ? 'Avanzado' : 'Advanced',
          dots: 4,
          isHighlight: false,
          iconContainerClass: 'bg-amber-950/60 text-amber-400 border border-amber-800/40',
          icon: <FaJsSquare className="text-xl" />
        },
        {
          name: 'HTML5',
          level: isEs ? 'Experto' : 'Expert',
          dots: 5,
          isHighlight: false,
          iconContainerClass: 'bg-orange-950/60 text-orange-400 border border-orange-800/40',
          icon: <FaHtml5 className="text-xl" />
        },
        {
          name: 'CSS3',
          level: isEs ? 'Experto' : 'Expert',
          dots: 5,
          isHighlight: false,
          iconContainerClass: 'bg-blue-950/60 text-blue-400 border border-blue-800/40',
          icon: <FaCss3Alt className="text-xl" />
        }
      ]
    },
    {
      title: 'BACKEND',
      skills: [
        {
          name: 'Python',
          level: isEs ? 'Avanzado' : 'Advanced',
          dots: 4,
          isHighlight: true,
          iconContainerClass: 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40',
          icon: <FaPython className="text-xl" />
        },
        {
          name: 'Laravel',
          level: isEs ? 'Intermedio' : 'Intermediate',
          dots: 3,
          isHighlight: false,
          iconContainerClass: 'bg-red-950/60 text-red-400 border border-red-800/40',
          icon: <SiLaravel className="text-xl" />
        },
        {
          name: 'Node.js',
          level: isEs ? 'Intermedio' : 'Intermediate',
          dots: 3,
          isHighlight: false,
          iconContainerClass: 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40',
          icon: <FaNodeJs className="text-xl" />
        },
        {
          name: 'Odoo',
          level: isEs ? 'Especialidad' : 'Specialty',
          dots: 4,
          badge: 'ERP',
          isSpecialBorder: true,
          iconContainerClass: 'bg-purple-950/60 text-purple-300 border border-purple-800/40',
          icon: <SiOdoo className="text-xl" />
        },
        {
          name: 'XML',
          level: 'Odoo views',
          dots: 3,
          isHighlight: false,
          iconContainerClass: 'bg-amber-950/60 text-amber-400 border border-amber-800/40',
          icon: <span className="font-bold text-base">X</span>
        }
      ]
    },
    {
      title: isEs ? 'BASES DE DATOS' : 'DATABASES',
      skills: [
        {
          name: 'PostgreSQL',
          level: isEs ? 'Avanzado' : 'Advanced',
          dots: 4,
          isHighlight: false,
          iconContainerClass: 'bg-blue-950/60 text-blue-400 border border-blue-800/40',
          icon: <SiPostgresql className="text-xl" />
        },
        {
          name: 'MySQL',
          level: isEs ? 'Intermedio' : 'Intermediate',
          dots: 3,
          isHighlight: false,
          iconContainerClass: 'bg-cyan-950/60 text-cyan-400 border border-cyan-800/40',
          icon: <SiMysql className="text-xl" />
        },
        {
          name: 'MongoDB',
          level: isEs ? 'Intermedio' : 'Intermediate',
          dots: 3,
          isHighlight: false,
          iconContainerClass: 'bg-emerald-950/60 text-emerald-400 border border-emerald-800/40',
          icon: <SiMongodb className="text-xl" />
        }
      ]
    },
    {
      title: isEs ? 'HERRAMIENTAS Y OTROS' : 'TOOLS & OTHERS',
      skills: [
        {
          name: 'Git',
          level: isEs ? 'Control de versiones' : 'Version control',
          dots: 4,
          isHighlight: false,
          iconContainerClass: 'bg-red-950/60 text-red-400 border border-red-800/40',
          icon: <FaGitAlt className="text-xl" />
        },
        {
          name: 'Linux',
          level: isEs ? 'Servidores' : 'Servers',
          dots: 3,
          isHighlight: false,
          iconContainerClass: 'bg-amber-950/60 text-amber-400 border border-amber-800/40',
          icon: <FaLinux className="text-xl" />
        },
        {
          name: 'Figma',
          level: 'UI/UX',
          dots: 3,
          isHighlight: false,
          iconContainerClass: 'bg-purple-950/60 text-purple-400 border border-purple-800/40',
          icon: <SiFigma className="text-xl" />
        },
        {
          name: 'IA / LLMs',
          level: isEs ? 'Automatización' : 'Automation',
          dots: 4,
          isHighlight: true,
          iconContainerClass: 'bg-purple-950/60 text-purple-300 border border-purple-800/40',
          icon: <span className="font-bold text-xs">AI</span>
        },
        {
          name: 'Scrum',
          level: isEs ? 'Metodología ágil' : 'Agile methodology',
          dots: 3,
          isHighlight: false,
          iconContainerClass: 'bg-orange-950/60 text-orange-400 border border-orange-800/40',
          icon: <FaTasks className="text-xl" />
        }
      ]
    }
  ]

  return (
    <section id="skills" className="relative py-28 overflow-hidden font-sans text-white">
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
        <div className="text-center mb-12">
          <p className="text-purple-400 text-xs sm:text-sm font-bold uppercase tracking-widest mb-2">
            {isEs ? 'LO QUE USO PARA CONSTRUIR' : 'WHAT I USE TO BUILD'}
          </p>
          <h2 className="text-3xl sm:text-5xl font-black tracking-tight mb-3">
            {isEs ? (
              <>Mi <span className="text-purple-400">stack tecnológico</span></>
            ) : (
              <>My <span className="text-purple-400">tech stack</span></>
            )}
          </h2>
          <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto">
            {isEs 
              ? 'Herramientas reales usadas en proyectos reales — no solo cursos.'
              : 'Real tools used in real projects — not just courses.'}
          </p>
        </div>

        {/* Banner Destacado Superior: Odoo ERP */}
        <div className="bg-[#0b0c1b]/90 border border-purple-500/30 rounded-3xl p-6 sm:p-8 mb-12 backdrop-blur-md shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            
            <div className="flex gap-5 items-start">
              <div className="w-16 h-16 rounded-2xl bg-purple-900/30 border border-purple-500/40 flex items-center justify-center text-purple-300 shrink-0 shadow-lg">
                <SiOdoo className="text-3xl" />
              </div>
              <div>
                <div className="flex flex-wrap items-center gap-3 mb-2">
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {isEs ? 'Odoo ERP — Mi diferenciador principal' : 'Odoo ERP — My main differentiator'}
                  </h3>
                  <span className="inline-flex items-center gap-1.5 bg-purple-500/20 text-purple-300 border border-purple-400/30 px-3 py-1 rounded-full text-xs font-semibold">
                    <BsStars className="text-amber-300" />
                    {isEs ? 'Especialidad' : 'Specialty'}
                  </span>
                </div>

                <p className="text-gray-300 text-sm leading-relaxed mb-4 max-w-3xl">
                  {isEs 
                    ? 'Pocos desarrolladores freelance en Latinoamérica dominan Odoo. Tengo experiencia real implementando y personalizando módulos en Python para empresas en Colombia, España y México.'
                    : 'Few freelance developers in Latin America master Odoo. I have real experience implementing and customizing modules in Python for companies in Colombia, Spain, and Mexico.'}
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full">
                    {isEs ? 'Módulos personalizados' : 'Custom modules'}
                  </span>
                  <span className="bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full">
                    Python · XML
                  </span>
                  <span className="bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full">
                    PostgreSQL
                  </span>
                  <span className="bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full">
                    {isEs ? 'Multiempresa' : 'Multi-company'}
                  </span>
                  <span className="bg-purple-950/60 border border-purple-800/40 text-purple-300 text-xs px-3 py-1 rounded-full">
                    {isEs ? '3 clientes reales' : '3 real clients'}
                  </span>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Categorías y Tarjetas */}
        <div className="flex flex-col gap-10">
          {categories.map((cat, idx) => (
            <div key={idx}>
              
              {/* Título de la Categoría */}
              <div className="flex items-center gap-4 mb-5">
                <span className="text-xs font-bold text-gray-400 tracking-widest uppercase">
                  {cat.title}
                </span>
                <div className="h-[1px] flex-1 bg-white/10" />
              </div>

              {/* Grid de Habilidades */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.skills.map((item, i) => (
                  <div
                    key={i}
                    className={`relative bg-[#0a0b16]/80 backdrop-blur-md rounded-2xl p-4 flex items-center gap-3.5 border transition-all duration-300 ${
                      item.isHighlight 
                        ? 'border-emerald-500/50 shadow-lg shadow-emerald-950/20' 
                        : item.isSpecialBorder
                        ? 'border-purple-500/50 shadow-lg shadow-purple-950/20'
                        : 'border-white/10 hover:border-white/20'
                    }`}
                  >
                    {/* Badge superior opcional (Ej: ERP) */}
                    {item.badge && (
                      <span className="absolute -top-2.5 right-4 bg-purple-600 text-white font-bold text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider shadow">
                        {item.badge}
                      </span>
                    )}

                    {/* Icono de la tecnología */}
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 shadow-md ${item.iconContainerClass}`}>
                      {item.icon}
                    </div>

                    {/* Info de la tecnología */}
                    <div className="flex flex-col">
                      <h4 className="font-bold text-white text-sm leading-tight">
                        {item.name}
                      </h4>
                      <span className="text-gray-400 text-xs mt-0.5 font-medium">
                        {item.level}
                      </span>
                      {renderDots(
                        item.dots, 
                        item.isHighlight ? 'bg-emerald-400' : item.isSpecialBorder ? 'bg-purple-400' : 'bg-purple-400'
                      )}
                    </div>
                  </div>
                ))}
              </div>

            </div>
          ))}
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