'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useMemo } from 'react';
import Image from 'next/image';

export default function ProjectsSection() {
  const { lang } = useLanguage();

  const backgroundStars = useMemo(() => Array.from({ length: 400 }).map(() => {
    const rand = Math.random();
    let type = 'classic', size = '2px', glowColor = 'transparent';
    if (rand > 0.88) { type = 'cross'; size = '12px'; }
    else if (rand > 0.65) {
      type = 'glow'; size = '4px';
      const cols = ['rgba(6,182,212,0.6)', 'rgba(217,70,239,0.6)', 'rgba(139,92,246,0.6)'];
      glowColor = cols[Math.floor(Math.random() * cols.length)];
    }
    return {
      left: Math.random() * 100, top: Math.random() * 100,
      size, type, glowColor,
      opacity: Math.random() * 0.6 + 0.3,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * -10,
    };
  }), []);

  const projects = [
    { 
      title: 'Vitalis Corporis GIM', category: 'UI/UX', icon: '🌐', price: '$150 USD', 
      features: [{ icon: '⚡', label: 'Carga rápida' }, { icon: '🎨', label: 'Diseño visual' }, { icon: '🚀', label: 'SEO Opt.' }, { icon: '📱', label: 'Responsive' }], 
      img: '/gym.png', 
      url: 'https://vitalis-gyms.vercel.app/index.html' 
    },
    { 
      title: 'Portafolio Personal', category: 'Full Stack', icon: '✨', price: '$150 USD', 
      features: [{ icon: '⚙️', label: 'Configuración' }, { icon: '💳', label: 'Pagos' }, { icon: '📦', label: 'Productos' }, { icon: '📊', label: 'Control' }], 
      img: '/porta.png', 
      url: 'https://portafolio-web-c141.vercel.app/' 
    },
    { 
      title: 'Gestión de Gastos', category: 'ERP', icon: '💼', price: '$300 USD', 
      features: [{ icon: '🏢', label: 'Multiempresa' }, { icon: '🐍', label: 'Python' }, { icon: '🐘', label: 'PostgreSQL' }, { icon: '📄', label: 'XML' }], 
      img: '/odoo.png', 
      url: 'https://maia.anditel.com/slides' 
    },
    { 
      title: 'Sistema Fruvers', category: 'ERP', icon: '🍎', price: '$300 USD', 
      features: [{ icon: '📦', label: 'Inventario' }, { icon: '📝', label: 'Pedidos' }, { icon: '🧾', label: 'Facturación' }, { icon: '🤖', label: 'Auto' }], 
      img: '/fruvers.png', 
      url: '#' 
    },
    { 
      title: 'ERP Inmobiliaria', category: 'ERP', icon: '🏠', price: '$300 USD', 
      features: [{ icon: '🔑', label: 'Propiedades' }, { icon: '✍️', label: 'Contratos' }, { icon: '💰', label: 'Pagos' }, { icon: '⚙️', label: 'Admin' }], 
      img: '/inmobiliaria.png', 
      url: 'https://realestatedigipiso2.odoo.com/' 
    },
  ];

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#03030b] via-[#020112] to-[#01010a]" />
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,_rgba(6,182,212,0.06),transparent_50%)] animate-nebula-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,_rgba(139,92,246,0.05),transparent_60%)] animate-nebula-pulse" style={{ animationDelay: '-4s' }} />
      </div>

      <div className="absolute inset-0 z-0">
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

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-white">
        <h2 className="text-4xl md:text-6xl font-black text-center mb-16 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-500">
          {lang === 'es' ? 'Portafolio de Proyectos' : 'Project Portfolio'}
        </h2>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative">
              <div className="absolute -inset-[1px] rounded-[32px] opacity-20 group-hover:opacity-100 transition duration-700 blur-sm bg-gradient-to-br from-cyan-500 to-purple-600" />
              <div className="relative bg-[#0a0a12]/80 border border-white/10 p-6 rounded-[32px] backdrop-blur-md h-full flex flex-col">
                <div className="relative w-full h-48 mb-6 overflow-hidden rounded-2xl border border-white/5">
                  <Image src={p.img} alt={p.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" />
                </div>
                
                <h3 className="text-xl font-bold font-['Orbitron'] mb-2 flex items-center gap-3">
                  <span className="text-2xl">{p.icon}</span>
                  {p.title}
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-6">{p.category}</span>
                
                <div className="grid grid-cols-2 gap-2 mb-6">
                  {p.features.map((f, i) => (
                    <div key={i} className="bg-white/5 px-2 py-2 rounded-lg border border-white/5 flex items-center gap-2">
                      <span className="text-sm">{f.icon}</span>
                      <span className="text-[10px] font-medium text-gray-300">{f.label}</span>
                    </div>
                  ))}
                </div>

                <div className="mt-auto border-t border-white/10 pt-4 flex justify-between items-center">
                  <span className="text-lg font-black text-cyan-400">{p.price}</span>
                  <a href={p.url} target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:text-cyan-400 transition-colors">
                    {lang === 'es' ? 'Solicitar →' : 'View →'}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style jsx global>{`
        @keyframes twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.95; } }
        @keyframes nebula-pulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
        .animate-nebula-pulse { animation: nebula-pulse 15s ease-in-out infinite; }
      `}</style>
    </section>
  );
}