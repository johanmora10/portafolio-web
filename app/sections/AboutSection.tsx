'use client';

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useMemo } from 'react';

export default function HireMe() {
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

  const options = [
    {
      title: 'Fiverr', category: lang === 'es' ? 'IDEAL PARA PROYECTOS PEQUEÑOS' : 'IDEAL FOR SMALL PROJECTS', icon: 'fi',
      desc: lang === 'es' ? 'Sitios web, landing pages y tiendas Shopify. Pago seguro por plataforma, entrega garantizada.' : 'Websites, landing pages, and Shopify stores. Secure platform payment, guaranteed delivery.',
      features: [
        { icon: '💲', label: lang === 'es' ? 'Desde $150 USD' : 'From $150 USD' },
        { icon: '🔒', label: lang === 'es' ? 'Pago seguro' : 'Secure payment' },
        { icon: '⚡', label: lang === 'es' ? 'Entrega rápida' : 'Fast delivery' }
      ],
      btnText: lang === 'es' ? 'Ver mis gigs en Fiverr →' : 'See my Fiverr gigs →',
      url: 'https://es.fiverr.com/sellers/johan_mora_tech/edit',
      isRecommended: false
    },
    {
      title: 'Contra', category: lang === 'es' ? 'IDEAL PARA PROYECTOS MEDIANOS' : 'IDEAL FOR MEDIUM PROJECTS', icon: 'C',
      desc: lang === 'es' ? 'Apps, sistemas a medida y automatizaciones. Sin comisiones ocultas — lo que acordamos es lo que recibes.' : 'Apps, custom systems, and automations. No hidden fees — what we agree on is what you receive.',
      features: [
        { icon: '💯', label: lang === 'es' ? 'Sin comisiones' : 'No commission' },
        { icon: '📄', label: lang === 'es' ? 'Contratos claros' : 'Clear contracts' },
        { icon: '🌍', label: lang === 'es' ? 'Pago internacional' : 'International payment' }
      ],
      btnText: lang === 'es' ? 'Ver perfil en Contra →' : 'See profile on Contra →',
      url: 'https://contra.com/johan_camelo_zdz26kbz/work?r=johan_camelo_zdz26kbz',
      isRecommended: true
    },
    {
      title: 'TikTok', category: lang === 'es' ? 'CONTENIDO Y PROYECTOS' : 'CONTENT & PROJECTS', icon: '🎵',
      desc: lang === 'es' ? 'Mira mis proyectos en desarrollo, tutoriales y automatizaciones en formato corto.' : 'Watch my ongoing projects, tutorials, and short-form automation content.',
      features: [
        { icon: '📱', label: '@johanmora.tech' },
        { icon: '💻', label: lang === 'es' ? 'Desarrollo & Tech' : 'Development & Tech' }
      ],
      btnText: lang === 'es' ? 'Ver perfil en TikTok →' : 'See profile on TikTok →',
      url: 'https://www.tiktok.com/@johanmora.tech',
      isRecommended: false
    },
    {
      title: lang === 'es' ? 'Email directo' : 'Direct Email', category: lang === 'es' ? 'PARA PROYECTOS GRANDES' : 'FOR LARGE PROJECTS', icon: '✉️',
      desc: lang === 'es' ? '¿Proyecto complejo o necesitas una propuesta formal? Escríbeme y te respondo en menos de 24 horas.' : 'Complex project or need a formal proposal? Write to me and I will reply within 24 hours.',
      features: [
        { icon: '📧', label: 'johanmora.tech@gmail.com' }
      ],
      btnText: lang === 'es' ? 'Enviar correo →' : 'Send email →',
      url: 'mailto:johanmora.tech@gmail.com',
      isRecommended: false
    }
  ];

  return (
    <section id="hire" className="relative py-32 overflow-hidden">
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
        <p className="text-center text-xs md:text-sm uppercase tracking-widest text-cyan-400 font-bold mb-3">
          {lang === 'es' ? '¿LISTO PARA TRABAJAR JUNTOS?' : 'READY TO WORK TOGETHER?'}
        </p>
        
        <h2 className="text-4xl md:text-6xl font-black text-center mb-4 tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-white to-purple-500">
          {lang === 'es' ? 'Contrátame — elige cómo prefieres' : 'Hire me — choose how you prefer'}
        </h2>
        
        <p className="text-center text-gray-400 text-base md:text-lg max-w-2xl mx-auto mb-16">
          {lang === 'es'
            ? 'Trabajo con plataformas seguras o directamente contigo. Tú decides.'
            : 'I work through secure platforms or directly with you. You decide.'}
        </p>

        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {options.map((opt, idx) => (
            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative">
              <div className="absolute -inset-[1px] rounded-[32px] opacity-20 group-hover:opacity-100 transition duration-700 blur-sm bg-gradient-to-br from-cyan-500 to-purple-600" />
              <div className="relative bg-[#0a0a12]/80 border border-white/10 p-8 rounded-[32px] backdrop-blur-md h-full flex flex-col justify-between">
                <div>
                  {opt.isRecommended && (
                    <div className="absolute top-6 right-6 bg-gradient-to-r from-purple-500 to-indigo-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                      ⭐ {lang === 'es' ? 'Recomendado' : 'Recommended'}
                    </div>
                  )}

                  <h3 className="text-2xl font-bold font-['Orbitron'] mb-1 flex items-center gap-3">
                    <span className="text-2xl">{opt.icon}</span>
                    {opt.title}
                  </h3>
                  
                  <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400 mb-4 block">{opt.category}</span>
                  
                  <p className="text-gray-300 text-sm leading-relaxed mb-6">
                    {opt.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-8">
                    {opt.features.map((f, i) => (
                      <div key={i} className="bg-white/5 px-3 py-1.5 rounded-lg border border-white/5 flex items-center gap-2">
                        <span className="text-xs">{f.icon}</span>
                        <span className="text-xs font-medium text-gray-300">{f.label}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="border-t border-white/10 pt-4">
                  <a
                    href={opt.url}
                    target={opt.url.startsWith('mailto') ? '_self' : '_blank'}
                    rel="noopener noreferrer"
                    className="w-full py-3.5 px-6 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-center font-bold text-sm text-cyan-400 hover:text-white transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    {opt.btnText}
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Sección de WhatsApp */}
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mt-12 group relative">
          <div className="absolute -inset-[1px] rounded-[32px] opacity-20 group-hover:opacity-100 transition duration-700 blur-sm bg-gradient-to-br from-emerald-500 to-cyan-500" />
          <div className="relative bg-[#0a0a12]/80 border border-white/10 p-8 rounded-[32px] backdrop-blur-md flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <span className="text-4xl p-3 bg-white/5 rounded-2xl border border-white/5">💬</span>
              <div>
                <h4 className="text-xl font-bold font-['Orbitron']">
                  WhatsApp — <span className="text-gray-400 font-normal text-sm">{lang === 'es' ? 'respuesta en menos de 1 hora' : 'response in less than 1 hour'}</span>
                </h4>
                <p className="text-gray-300 text-sm mt-1">
                  {lang === 'es'
                    ? '¿Tienes una idea y quieres saber si puedo ayudarte? Escríbeme directo — sin formularios, sin esperas.'
                    : 'Have an idea and want to know if I can help? Message me directly — no forms, no waiting.'}
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/573189813014"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-emerald-500 to-teal-600 hover:opacity-90 text-white font-bold text-sm px-8 py-4 rounded-2xl whitespace-nowrap transition-all duration-300 shadow-lg shadow-emerald-950/50 shrink-0"
            >
              {lang === 'es' ? 'Escribir ahora →' : 'Message now →'}
            </a>
          </div>
        </motion.div>

        {/* Texto de disponibilidad */}
        <div className="flex items-center justify-center gap-2 mt-10 text-sm text-gray-400">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
          <span>
            {lang === 'es'
              ? 'Disponible ahora · Colombia, España y México · Respondo en menos de 24h'
              : 'Available now · Colombia, Spain and Mexico · Responding in less than 24h'}
          </span>
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