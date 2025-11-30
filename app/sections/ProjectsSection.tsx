'use client'

import { useLanguage } from '../context/LanguageContext'
import Image from 'next/image'

export default function ProjectsSection() {
  const { lang } = useLanguage()

  const title = lang === 'es' ? 'Proyectos' : 'Projects'

  const projects = [
    {
      title: lang === 'es' ? 'Sistema de gestión de gastos (Odoo)' : 'Expense Manager (Odoo)',
      description: lang === 'es'
        ? 'Sistema para gestionar gastos de empleados con soporte multiempresa.'
        : 'System to manage employee expenses with multi-company support.',
      category: 'Apps',
      image: '/odoo.png',
      url: 'https://maia.anditel.com/slides',
    },
    {
      title: lang === 'es' ? 'Sitio de gym (VITALIS CORPORIS GIM)' : 'Gym site (VITALIS CORPORIS GIM)',
      description: lang === 'es'
        ? 'Gimnasio para ver lo que ofrece el sitio web.'
        : 'Gym to see what the website offers.',
      category: 'UI/UX',
      image: '/gym.png',
      url: 'https://vitalis-gyms.vercel.app/index.html',
    },
    {
      title: lang === 'es' ? 'Portafolio personal' : 'Personal Portfolio',
      description: lang === 'es'
        ? 'Mi portafolio desarrollado con Next.js, TypeScript y Tailwind CSS.'
        : 'My portfolio developed with Next.js, TypeScript, and Tailwind CSS.',
      category: 'Apps',
      image: '/porta.png',
      url: 'https://portafolio-web-c141.vercel.app/',
    },
    {
      title: lang === 'es' ? 'Próximo proyecto' : 'Next Project',
      description: lang === 'es'
        ? 'Descripción próximamente.'
        : 'Description coming soon.',
      category: 'TBD',
      image: '/coming-soon.png',
      url: '#',
    },
  ]

  return (
    <section id="projects" className="py-20 text-center px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="section-title mb-4">{title}</h2>
        <p className="text-secondary mt-2 max-w-2xl mx-auto">
          {lang === 'es'
            ? 'Proyectos personales y de clientes que puedes ver y probar. Observa algunas de mis habilidades.'
            : 'Personal and client projects you can see and try. Watch some of my skills.'}
        </p>

        {/* Botones de filtros */}
        <div className="mt-6 flex justify-center gap-3 flex-wrap">
          <button className="btn-primary">{lang === 'es' ? 'Todos' : 'All'}</button>
          <button className="btn-primary">Apps</button>
          <button className="btn-primary">UI/UX</button>
        </div>

        {/* Grid de proyectos */}
        <div className="mt-8 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((p, idx) => (
            <a
              key={idx}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="card group cursor-pointer flex flex-col h-full"
            >
              {/* Sub-cuadro futurista */}
              <div className="card-futuristic flex items-center justify-center mx-auto w-[800px] h-[800px] overflow-hidden relative">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="rounded-md"
                />
              </div>

              <div className="flex-1 flex flex-col mt-4">
                <h3 className="font-bold text-xl">{p.title}</h3>
                <p className="text-secondary mt-2 text-sm flex-1">{p.description}</p>
                <span className="mt-4 inline-block px-3 py-1 bg-purple-700 text-white rounded-full text-xs">
                  {p.category}
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Estilos de sub-cuadro futurista */}
      <style jsx>{`
        .card-futuristic {
          background: rgba(20,10,30,0.6);
          border-radius: 20px;
          padding: 2rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          transition: transform 0.4s ease, box-shadow 0.4s ease, background 0.4s ease;
          box-shadow: 0 0 15px rgba(100, 0, 255, 0.2), 0 0 25px rgba(0, 255, 255, 0.1);
          border: 1px solid rgba(255,255,255,0.05);
          backdrop-filter: blur(6px);
        }
        .card-futuristic:hover {
          transform: translateY(-10px) rotateX(5deg) rotateY(5deg) scale(1.05);
          box-shadow: 0 0 30px #b02aa6, 0 0 40px #5f2bd7, 0 0 50px #ff00ff;
          background: linear-gradient(135deg, rgba(176,42,166,0.6), rgba(95,43,215,0.6));
        }
      `}</style>
    </section>
  )
}
