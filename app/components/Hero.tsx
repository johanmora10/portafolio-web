'use client';

import { useMemo } from 'react';
import Image from 'next/image';
import { useLanguage } from '../context/LanguageContext';
import { motion } from 'framer-motion';

export default function Hero() {
  const { lang } = useLanguage();

  const palettes = [
    ["#06B6D4", "#22D3EE", "#FFFFFF"], 
    ["#D946EF", "#F472B6", "#FFFFFF"], 
    ["#8B5CF6", "#A78BFA", "#F5F3FF"], 
    ["#3B82F6", "#60A5FA", "#E0F2FE"], 
    ["#F59E0B", "#FBBF24", "#FEF3C7"], 
  ];

  const blackHoleColors = ["#FF5500", "#FFB700", "#FFFFFF"];

  const stableClusters = [
    { x: -10, y: -40, size: 340, count: 580, speed: 95, palette: palettes[2] },  
    { x: -620, y: -320, size: 120, count: 180, speed: 60, palette: palettes[0] }, 
    { x: -780, y: 220, size: 110, count: 140, speed: 65, palette: palettes[4] },  
  ];

  const absorbedRightClusters = [
    { radiusMin: 55, radiusMax: 150, count: 180, speed: 8, opacity: 0.95 },  
    { radiusMin: 150, radiusMax: 280, count: 140, speed: 16, opacity: 0.7 }, 
  ];

  const backgroundStars = useMemo(() => Array.from({ length: 400 }).map(() => {
    const rand = Math.random();
    let type = 'classic';
    let size = '2px';
    let glowColor = 'transparent';

    if (rand > 0.88) {
      type = 'cross';
      size = '12px';
    } else if (rand > 0.65) {
      type = 'glow';
      size = '4px';
      const colors = ['rgba(6,182,212,0.6)', 'rgba(217,70,239,0.6)', 'rgba(139,92,246,0.6)'];
      glowColor = colors[Math.floor(Math.random() * colors.length)];
    }

    return {
      left: Math.random() * 100,
      top: Math.random() * 100,
      size,
      type,
      glowColor,
      opacity: Math.random() * 0.6 + 0.3,
      duration: Math.random() * 4 + 3,
      delay: Math.random() * -10
    };
  }), []);

  const content = {
    es: {
      mainTitle: "No vendo código. Vendo negocios que funcionan solos.",
      descr: "Convierto negocios tradicionales en máquinas digitales. Sitios web profesionales en Colombia, apps a medida y automatizaciones con IA — desarrollador Full Stack en Bogotá que entrega rápido y sin complicaciones.",
      location: "Disponible para empresas en Colombia, España y México.",
      stats: [
        { n: "3+", l: "Años Experiencia" },
        { n: "5", l: "Proyectos Éxito" },
        { n: "100%", l: "Opiniones OK" },
        { n: "4", l: "Países Clientes" }
      ]
    },
    en: {
      mainTitle: "I don't sell code. I sell businesses that run themselves.",
      descr: "I turn traditional businesses into digital machines. Professional websites in Colombia, custom apps, and AI-powered automation—a Full Stack developer based in Bogotá delivering fast, hassle-free results..",
      location: "Available for companies in Colombia, Spain and Mexico.",
      stats: [
        { n: "3+", l: "Years Exp" },
        { n: "5", l: "Projects Done" },
        { n: "100%", l: "Positive Review" },
        { n: "4", l: "Countries" }
      ]
    }
  }

  const t = lang === 'es' ? content.es : content.en;

  const techOrbits = [
    { label: 'JavaScript', radius: 150, duration: 22, color: '#f7df1e' },
    { label: 'Python', radius: 185, duration: 32, color: '#38bdf8' },
    { label: 'React', radius: 225, duration: 26, color: '#06b6d4' },
    { label: 'Odoo', radius: 270, duration: 42, color: '#a855f7' },
    { label: 'Next.js', radius: 320, duration: 36, color: '#ffffff' }
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-28 pb-16 overflow-hidden bg-gradient-to-tr from-[#01010a] via-[#020112] to-[#04011a]">
      
      <div className="absolute inset-0 z-0 pointer-events-none" style={{ contain: 'strict' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,_rgba(6,182,212,0.06),transparent_50%)] animate-nebula-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,_rgba(139,92,246,0.05),transparent_60%)] animate-nebula-pulse" style={{ animationDelay: '-4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_75%,_rgba(217,70,239,0.04),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_83%_50%,_rgba(255,85,0,0.05),transparent_40%)]" />
      </div>

      <div className="absolute inset-0 z-0" style={{ contain: 'strict', contentVisibility: 'auto' }}>
        {backgroundStars.map((s, i) => (
          <div key={i} className={`absolute animate-twinkle pointer-events-none ${s.type === 'cross' ? 'flex items-center justify-center' : 'rounded-full'}`} 
               style={{ left: `${s.left}%`, top: `${s.top}%`, width: s.size, height: s.size, backgroundColor: s.type !== 'cross' ? '#ffffff' : 'transparent', boxShadow: s.type === 'glow' ? `0 0 10px 3px ${s.glowColor}` : 'none', opacity: s.opacity, animationDuration: `${s.duration}s`, animationDelay: `${s.delay}s`, willChange: 'opacity' }}>
            {s.type === 'cross' && (
              <>
                <div className="absolute w-full h-[1.5px] bg-gradient-to-r from-transparent via-white to-transparent" />
                <div className="absolute h-full w-[1.5px] bg-gradient-to-b from-transparent via-white to-transparent" />
              </>
            )}
          </div>
        ))}

        {stableClusters.map((cluster, cIndex) => (
          <div key={`stable-${cIndex}`} className="absolute animate-galaxy-drift hidden md:block" style={{ left: `calc(50% + ${cluster.x}px)`, top: `calc(50% + ${cluster.y}px)` }}>
            {Array.from({ length: cluster.count }).map((_, i) => {
              const dist = Math.pow(Math.random(), 1.6) * cluster.size;
              const color = cluster.palette[Math.floor(Math.random() * cluster.palette.length)];
              return (
                <div key={i} className="absolute animate-organic-spin" style={{ animationDuration: `${cluster.speed + (dist/3.5)}s`, animationDelay: `${Math.random() * -80}s`, willChange: 'transform' }}>
                  <div className="rounded-full" style={{ width: Math.random() * 2.3 + 1.2, height: Math.random() * 2.3 + 1.2, backgroundColor: color, boxShadow: `0 0 10px 2px ${color}`, transform: `translateX(${dist}px)` }} />
                </div>
              );
            })}
          </div>
        ))}

        <div className="absolute top-1/2 left-1/2 lg:left-[83%] -translate-x-1/2 -translate-y-1/2 flex items-center justify-center pointer-events-none">
          <div className="absolute w-[160px] h-[160px] bg-black rounded-full shadow-[0_0_60px_20px_#000000,0_0_110px_45px_rgba(255,85,0,0.2)] z-10 border border-black" />
          {absorbedRightClusters.map((cluster, cIndex) => (
            <div key={`vortex-${cIndex}`} className="absolute animate-vortex-spin" style={{ animationDuration: `${cluster.speed}s` }}>
              {Array.from({ length: cluster.count }).map((_, i) => {
                const dist = cluster.radiusMin + (Math.random() * (cluster.radiusMax - cluster.radiusMin));
                const color = dist < 140 ? blackHoleColors[Math.floor(Math.random() * blackHoleColors.length)] : (Math.random() > 0.5 ? palettes[1][0] : palettes[0][0]); 
                const isSpaghettified = dist < 130;
                return (
                  <div key={i} className="absolute rounded-full" 
                    style={{ width: isSpaghettified ? Math.random() * 14 + 6 : Math.random() * 3.5 + 2, height: isSpaghettified ? 1.2 : Math.random() * 2 + 1.5, backgroundColor: color, opacity: cluster.opacity * (Math.random() * 0.5 + 0.5), boxShadow: `0 0 10px 2px ${color}`, transform: `rotate(${Math.random() * 360}deg) translateX(${dist}px) skewX(-20deg) scaleX(${isSpaghettified ? 2.2 : 1})`, transformOrigin: '0 0', willChange: 'transform' }} />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
        <div className="flex flex-col space-y-6 sm:space-y-8">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight tracking-tighter text-transparent bg-clip-text animate-rainbow-flow bg-[length:300%_300%] bg-gradient-to-r from-cyan-400 via-fuchsia-500 to-indigo-400 filter drop-shadow-[0_2px_10px_rgba(0,0,0,0.3)]">
              {t.mainTitle}
            </h1>
          </motion.div>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} className="space-y-6">
            <p className="text-slate-200 text-base sm:text-lg md:text-xl max-w-xl font-medium leading-relaxed drop-shadow-[0_2px_10px_rgba(0,0,0,0.5)]">
              {t.descr}
            </p>
            <div className="inline-flex items-center gap-3 bg-white/5 border border-white/10 backdrop-blur-md px-4 py-1.5 rounded-full shadow-[0_4px_15px_rgba(0,0,0,0.3)]">
              <span className="relative flex h-2 w-2 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <p className="text-gray-300 text-[10px] sm:text-xs font-bold tracking-wider uppercase font-mono">{t.location}</p>
            </div>
          </motion.div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-5">
            <PremiumButton href="https://es.fiverr.com/sellers/johan_mora_tech/edit" label="Fiverr" sub="Contratar Experto" icon={<span className="text-[#1dbf73] font-black italic text-xl">fi</span>} color="#1dbf73" />
            <PremiumButton href="https://www.workana.com/freelancer/3ed48637fba9edee8896cd06f5cf16b3" label="Workana" sub="Ver Portafolio" icon={<span className="text-[#207bf2] font-black text-xl font-sans">W</span>} color="#207bf2" />
            <PremiumButton href="https://contra.com/johan_camelo_zdz26kbz/work?r=johan_camelo_zdz26kbz" label="Contra" sub="Hire Me" icon={<span className="text-[#00E6A0] font-black text-xl font-sans">C</span>} color="#00E6A0" />
          </div>

          <div className="bg-black/30 border border-white/10 backdrop-blur-md rounded-2xl p-4 sm:p-6 flex flex-row items-center justify-between shadow-[0_15px_35px_rgba(0,0,0,0.6)] w-full max-w-xl">
            {t.stats.map((stat, i) => (
              <div key={i} className="flex flex-row items-center flex-1 justify-center first:justify-start last:justify-end">
                <div className="flex flex-col items-start">
                  <div className="flex items-center gap-1.5">
                    <span className="w-1 h-1 rounded-full bg-[#e879f9] shadow-[0_0_8px_#e879f9]" />
                    <span className="text-2xl sm:text-3xl md:text-4xl font-black bg-gradient-to-b from-white via-white to-[#d8b4fe] bg-clip-text text-transparent tracking-tighter filter drop-shadow-[0_2px_12px_rgba(168,85,247,0.4)] select-none">{stat.n}</span>
                  </div>
                  <span className="text-[8px] sm:text-[9px] md:text-[10px] text-purple-300 font-black tracking-[0.08em] sm:tracking-[0.12em] uppercase font-mono mt-1.5 opacity-90">{stat.l}</span>
                </div>
                {i < t.stats.length - 1 && <div className="h-8 sm:h-10 w-[1px] bg-gradient-to-b from-transparent via-white/15 to-transparent mx-auto hidden sm:block" />}
              </div>
            ))}
          </div>
        </div>

        <div className="relative flex items-center justify-center h-[450px] sm:h-[600px] md:h-[800px] w-full mt-8 lg:mt-0">
          <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} className="z-20 w-40 h-40 sm:w-48 sm:h-48 md:w-64 md:h-64 bg-gradient-to-b from-purple-500 to-blue-600 p-[2px] rounded-full shadow-[0_0_50px_rgba(168,85,247,0.3)]">
            <div className="w-full h-full bg-[#050110] rounded-full overflow-hidden relative border-2 border-white/10">
               <Image src="/profile.png" alt="Johan" fill className="object-cover scale-110" priority />
            </div>
          </motion.div>

          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none scale-[0.65] sm:scale-85 md:scale-100">
            {techOrbits.map((tech, i) => (
              <div key={i} className="absolute flex items-center justify-center">
                <div className="absolute border-[2px] rounded-full opacity-[0.35]" style={{ width: tech.radius * 2, height: tech.radius * 2, borderColor: tech.color, boxShadow: `0 0 22px ${tech.color}40` }} />
                <motion.div className="absolute" style={{ width: tech.radius * 2, height: tech.radius * 2 }} animate={{ rotate: 360 }} transition={{ duration: tech.duration, repeat: Infinity, ease: "linear" }}>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                    <div className="bg-[#000000] border-2 rounded-full px-3.5 py-1 flex items-center gap-2 shadow-[0_4px_20px_rgba(0,0,0,0.9)]" style={{ borderColor: tech.color }}>
                      <div className="relative flex h-2 w-2 shrink-0">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-100" style={{ backgroundColor: tech.color }} />
                        <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: tech.color }} />
                      </div>
                      <span className="text-[10px] md:text-[11px] font-black uppercase tracking-[0.2em] font-mono select-none text-white">{tech.label}</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes organic-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes vortex-spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes galaxy-drift { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-12px); } }
        @keyframes twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.95; } }
        @keyframes rainbow-flow { 0% { background-position: 0% 50%; } 50% { background-position: 100% 50%; } 100% { background-position: 0% 50%; } }
        @keyframes nebula-pulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        .animate-organic-spin { animation: organic-spin linear infinite; transform-origin: left center; }
        .animate-vortex-spin { animation: vortex-spin linear infinite; }
        .animate-galaxy-drift { animation: galaxy-drift 25s infinite ease-in-out; }
        .animate-twinkle { animation: twinkle infinite ease-in-out; }
        .animate-rainbow-flow { animation: rainbow-flow 12s ease infinite; }
        .animate-nebula-pulse { animation: nebula-pulse 15s ease-in-out infinite; }
      `}</style>
    </section>
  );
}

function PremiumButton({ href, label, sub, icon, color }: { href: string, label: string, sub: string, icon: any, color: string }) {
  return (
    <a href={href} target="_blank" className="relative group block w-full sm:w-auto">
      <div className="absolute -inset-0.5 rounded-xl blur opacity-20 group-hover:opacity-70 transition duration-500" style={{ backgroundColor: color }} />
      <div className="relative flex items-center gap-3.5 bg-[#09061a] border border-white/10 px-4 sm:px-5 py-3 rounded-xl transition-all group-hover:border-white/30 shadow-[0_5px_20px_rgba(0,0,0,0.8)]">
        <div className="w-9 h-9 rounded-lg bg-white/[0.04] flex items-center justify-center border border-white/10 group-hover:scale-105 transition-transform shrink-0" style={{ boxShadow: `inset 0 0 10px ${color}15` }}>
          {icon}
        </div>
        <div className="flex flex-col">
          <span className="text-white font-black text-sm sm:text-base leading-none tracking-wide">{label}</span>
          <span className="text-[9px] text-gray-400 mt-1 uppercase tracking-widest font-black font-mono">{sub}</span>
        </div>
      </div>
    </a>
  );
} 