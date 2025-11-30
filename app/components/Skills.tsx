'use client'
import { FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaDatabase, FaTasks, FaFileCode } from 'react-icons/fa'
import { SiPhp, SiPostgresql, SiMysql, SiMongodb, SiDocker, SiGit, SiLinux, SiTailwindcss, SiBabel, SiTypescript, SiSass, SiFigma } from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext'

export default function SkillsSection() {
  const { lang } = useLanguage()
  const title = lang === 'es' ? 'Habilidades' : 'Skills'

  const skills = [
    {
      category: lang === 'es' ? 'Lenguajes de programación' : 'Programming Languages',
      items: [
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-4xl" /> },
        { name: 'TypeScript', icon: <SiTypescript className="text-sky-500 text-4xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-4xl" /> },
        { name: 'Python', icon: <FaPython className="text-yellow-300 text-4xl" /> },
        { name: 'PHP', icon: <SiPhp className="text-purple-600 text-4xl" /> },
        { name: 'C++', icon: <FaDatabase className="text-blue-500 text-4xl" /> },
      ]
    },
    {
      category: lang === 'es' ? 'Bases de datos' : 'Databases',
      items: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700 text-4xl" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500 text-4xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-4xl" /> },
      ]
    },
    {
      category: lang === 'es' ? 'Frameworks y herramientas' : 'Frameworks & Tools',
      items: [
        { name: 'React', icon: <FaReact className="text-blue-400 text-4xl" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-4xl" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-4xl" /> },
        { name: 'Tailwind CSS', icon: <SiTailwindcss className="text-sky-400 text-4xl" /> },
        { name: 'Sass', icon: <SiSass className="text-pink-600 text-4xl" /> },
        { name: 'Figma', icon: <SiFigma className="text-pink-400 text-4xl" /> },
        { name: 'Babel', icon: <SiBabel className="text-pink-500 text-4xl" /> },
        { name: 'Docker', icon: <SiDocker className="text-blue-600 text-4xl" /> },
        { name: 'Git', icon: <SiGit className="text-red-600 text-4xl" /> },
        { name: 'Linux', icon: <SiLinux className="text-gray-500 text-4xl" /> },
        { name: 'Scrum', icon: <FaTasks className="text-purple-500 text-4xl" /> },
        { name: 'XML', icon: <FaFileCode className="text-purple-600 text-4xl" /> },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 text-center">
      <h3 className="section-title mb-12">{title}</h3>

      {skills.map((group, idx) => (
        <div key={idx} className="mb-10">
          <h4 className="text-2xl font-bold mb-6">{group.category}</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 px-6 justify-items-center">
            {group.items.map((s, i) => (
              <div 
                key={i} 
                className="flex flex-col items-center gap-2 card-dark p-6 rounded-xl hover:scale-105 transition-transform"
              >
                {s.icon}
                <span className="mt-2 font-semibold text-lg">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  )
}
