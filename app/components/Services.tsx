"use client";

import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useMemo } from 'react';

const IconGlobe = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
);
const IconShop = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/>
    <line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>
  </svg>
);
const IconDB = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <ellipse cx="12" cy="5" rx="9" ry="3"/>
    <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
    <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
  </svg>
);
const IconBot = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 2a2 2 0 0 1 2 2c0 .74-.4 1.39-1 1.73V7h1a7 7 0 0 1 7 7h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1h-1a7 7 0 0 1-7 7H9a7 7 0 0 1-7-7H1a1 1 0 0 1-1-1v-3a1 1 0 0 1 1-1h1a7 7 0 0 1 7-7h1V5.73c-.6-.34-1-.99-1-1.73a2 2 0 0 1 2-2z"/>
    <circle cx="9" cy="14" r="1" fill="currentColor"/>
    <circle cx="15" cy="14" r="1" fill="currentColor"/>
  </svg>
);

function HexIcon({ icon, primary, secondary }: { icon: React.ReactNode; primary: string; secondary: string }) {
  return (
    <div className="relative w-14 h-14 mb-6">
      <div
        className="absolute inset-[-4px] animate-hex-ring"
        style={{
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
          background: `linear-gradient(180deg, ${primary}99, transparent)`,
        }}
      />
      <div
        className="w-full h-full flex items-center justify-center"
        style={{
          clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
          background: `linear-gradient(135deg, ${primary}40, ${secondary}25)`,
          color: primary,
          filter: `drop-shadow(0 0 6px ${primary}b3)`,
        }}
      >
        {icon}
      </div>
    </div>
  );
}

function ExoticPriceTag({ label, price, primary, secondary }: {
  label: string; price: string; primary: string; secondary: string;
}) {
  return (
    <div className="flex items-baseline gap-2">
      <span
        className="text-[8px] font-black tracking-[0.25em] uppercase select-none"
        style={{ color: `${primary}99`, fontFamily: "'Orbitron', monospace" }}
      >
        {label}
      </span>
      <span
        className="text-[16px] font-black select-none bg-clip-text text-transparent"
        style={{
          backgroundImage: `linear-gradient(135deg, ${primary}, #fff, ${secondary})`,
          fontFamily: "'Orbitron', monospace",
        }}
      >
        {price}
      </span>
    </div>
  );
}

function CtaButton({ label, primary, secondary, serviceTitle }: {
  label: string; primary: string; secondary: string; serviceTitle: string;
}) {
  const message = encodeURIComponent(`Hola, me interesa el servicio de *${serviceTitle}*. ¿Podemos hablar?`);
  const whatsappUrl = `https://wa.me/573189813014?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group/btn relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 overflow-hidden border w-fit"
      style={{ borderColor: `${primary}50`, color: primary, fontFamily: "'Space Grotesk', sans-serif", textDecoration: 'none' }}
    >
      <div
        className="absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
        style={{ background: `linear-gradient(90deg, ${primary}18, ${secondary}10)` }}
      />
      <span className="relative z-10 group-hover/btn:translate-x-0.5 transition-transform duration-300">
        {label}
      </span>
    </a>
  );
}

export default function Services() {
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

  const t = lang === 'es' ? content.es : content.en;

  const services = [
    {
      title: t.webTitle, desc: t.webDesc, price: t.webPrice,
      label: t.startLabel, btnLabel: t.btnLabel,
      icon: <IconGlobe />, colorScheme: { primary: "#22D3EE", secondary: "#8B5CF6" },
    },
    {
      title: t.shopifyTitle, desc: t.shopifyDesc, price: t.shopifyPrice,
      label: t.startLabel, btnLabel: t.btnLabel,
      icon: <IconShop />, colorScheme: { primary: "#D946EF", secondary: "#3B82F6" },
    },
    {
      title: t.odooTitle, desc: t.odooDesc, price: t.odooPrice,
      label: t.startLabel, btnLabel: t.btnLabel,
      icon: <IconDB />, colorScheme: { primary: "#A78BFA", secondary: "#F59E0B" },
    },
    {
      title: t.aiTitle, desc: t.aiDesc, price: t.aiPrice,
      label: t.startLabel, btnLabel: t.btnLabel,
      icon: <IconBot />, colorScheme: { primary: "#F472B6", secondary: "#22D3EE" },
    },
  ];

  return (
    <section id="services" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-[#03030b] via-[#020112] to-[#01010a]" />

      <div className="absolute inset-0 z-0 pointer-events-none" style={{ contain: 'strict' }}>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_15%_25%,_rgba(6,182,212,0.06),transparent_50%)] animate-nebula-pulse" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_45%_40%,_rgba(139,92,246,0.05),transparent_60%)] animate-nebula-pulse" style={{ animationDelay: '-4s' }} />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_75%,_rgba(217,70,239,0.04),transparent_45%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_83%_50%,_rgba(255,85,0,0.05),transparent_40%)]" />
      </div>

      <div className="absolute inset-0 z-0" style={{ contain: 'strict' }}>
        {backgroundStars.map((s, i) => (
          <div key={i}
            className={`absolute animate-twinkle pointer-events-none ${s.type === 'cross' ? 'flex items-center justify-center' : 'rounded-full'}`}
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

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <p className="text-cyan-400 font-black tracking-[0.4em] uppercase text-xs text-center mb-4">
            {t.sectionTitle}
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-white to-purple-400">
            {t.mainTitle}
          </h2>
          <p className="text-center text-slate-400 text-base mt-3 tracking-wide">
            {t.mainSubtitle}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-20">
          {services.map((s, i) => (
            <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 + i * 0.1 }} className="group relative">
              <div
                className="absolute -inset-[1px] rounded-[32px] opacity-20 group-hover:opacity-100 transition duration-700 blur-sm"
                style={{ background: `linear-gradient(135deg, ${s.colorScheme.primary}, ${s.colorScheme.secondary})` }}
              />
              <div className="relative bg-[#0a0a12]/80 border border-white/10 p-8 rounded-[32px] backdrop-blur-md shadow-2xl transition duration-500 hover:border-white/20">
                <HexIcon icon={s.icon} primary={s.colorScheme.primary} secondary={s.colorScheme.secondary} />
                <h3 className="text-xl font-bold text-white mb-3">{s.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">{s.desc}</p>
                <div className="flex flex-col gap-3">
                  <ExoticPriceTag
                    label={s.label}
                    price={s.price}
                    primary={s.colorScheme.primary}
                    secondary={s.colorScheme.secondary}
                  />
                  <CtaButton
                    label={s.btnLabel}
                    primary={s.colorScheme.primary}
                    secondary={s.colorScheme.secondary}
                    serviceTitle={s.title}
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@700;900&family=Space+Grotesk:wght@400;700&display=swap');

        @keyframes twinkle { 0%, 100% { opacity: 0.15; } 50% { opacity: 0.95; } }
        @keyframes nebula-pulse { 0%, 100% { opacity: 0.8; transform: scale(1); } 50% { opacity: 1; transform: scale(1.05); } }
        @keyframes hex-ring { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        .animate-twinkle { animation: twinkle infinite ease-in-out; }
        .animate-nebula-pulse { animation: nebula-pulse 15s ease-in-out infinite; }
        .animate-hex-ring { animation: hex-ring 8s linear infinite; }
      `}</style>
    </section>
  );
}

const content = {
  es: {
    sectionTitle: "Servicios",
    mainTitle: "Lo que puedes pedirme como desarrollador web en Colombia",
    mainSubtitle: "— y qué resultado obtienes",
    startLabel: "Desde",
    btnLabel: "Solicitar este servicio →",

    webTitle: "Sitio web profesional",
    webDesc: "¿Tu negocio no existe en internet o tu web actual espanta clientes? Diseño tu sitio desde cero — moderno, rápido y listo en 7 días. SEO incluido.",
    webPrice: "$150 USD",

    shopifyTitle: "Tienda Shopify",
    shopifyDesc: "¿Quieres vender online pero no sabes por dónde empezar? Construyo tu tienda completa y lista para vender desde el primer día — pagos, carrito y diseño incluidos.",
    shopifyPrice: "$200 USD",

    odooTitle: "Odoo ERP",
    odooDesc: "¿Tu equipo pierde horas en tareas manuales? Personalizo módulos Odoo en Python para gestionar tu negocio completo en un solo lugar. Experiencia real en España y México.",
    odooPrice: "$300 USD",

    aiTitle: "Automatización con IA",
    aiDesc: "¿Pagas personas para hacer tareas repetitivas que una máquina hace mejor? Automatizo tus procesos con IA — chatbots, flujos automáticos y reportes sin intervención humana.",
    aiPrice: "$250 USD",
  },
  en: {
    sectionTitle: "Services",
    mainTitle: "What you can ask me",
    mainSubtitle: "— and what result you get",
    startLabel: "Starting at",
    btnLabel: "Request this service →",

    webTitle: "Professional Website",
    webDesc: "Does your business have no online presence, or is your current site driving clients away? I design your site from scratch — modern, fast, and ready in 7 days. SEO included.",
    webPrice: "$150 USD",

    shopifyTitle: "Shopify Store",
    shopifyDesc: "Want to sell online but don't know where to start? I build your complete store ready to sell from day one — payments, cart, and custom design included.",
    shopifyPrice: "$200 USD",

    odooTitle: "Odoo ERP",
    odooDesc: "Is your team losing hours on manual tasks? I customize Odoo modules in Python to manage your entire business in one place. Real experience in Spain and Mexico.",
    odooPrice: "$300 USD",

    aiTitle: "AI Automation",
    aiDesc: "Are you paying people to do repetitive tasks a machine does better? I automate your processes with AI — chatbots, automatic flows, and reports with no human intervention.",
    aiPrice: "$250 USD",
  },
};