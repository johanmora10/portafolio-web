'use client'
import Image from 'next/image'

type Project = {
  title: string;
  category: string;
  description: string;
  image?: string;
}

const projects: Project[] = [
  { title: 'Expense Manager (Odoo)', category: 'Apps', description: 'System to manage employee expenses with multiple company sequences.' },
  { title: 'Restaurant site (PomaRosa)', category: 'UI/UX', description: 'Restaurant landing with language switch and menu.' },
  { title: 'Portfolio Demo', category: 'Apps', description: 'This portfolio itself made with Next.js and Tailwind.' }
]

export default function Projects(){
  return (
    <section id="projects" className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="section-title">Recent Works</h2>
        <p className="text-center text-gray-300 mt-2">Personal and customer projects you can see and try. Watch some of my skills.</p>

        <div className="mt-6 flex justify-center gap-3">
          <button className="px-6 py-2 rounded-full bg-gradient-to-r from-[#b02aa6] to-[#5f2bd7]">All</button>
          <button className="px-6 py-2 rounded-full bg-black/50">Apps</button>
          <button className="px-6 py-2 rounded-full bg-black/50">UI/UX</button>
        </div>

        <div className="mt-8 projects-grid">
          {projects.map(p => (
            <div key={p.title} className="rounded-xl overflow-hidden p-4 bg-black/40">
              <div className="h-48 bg-gradient-to-br from-[#0b0710] to-[#221022] rounded-md flex items-center justify-center">Image</div>
              <h3 className="mt-4 font-bold text-lg">{p.title}</h3>
              <p className="text-gray-300 mt-2">{p.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
