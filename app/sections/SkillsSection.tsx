'use client'
import { 
  FaReact, FaHtml5, FaCss3Alt, FaJsSquare, FaNodeJs, FaPython, FaDatabase, FaTasks, FaFileCode 
} from 'react-icons/fa'
import { 
  SiPhp, SiPostgresql, SiMysql, SiMongodb, SiDocker, SiGit, SiLinux, SiTailwindcss, SiBabel 
} from 'react-icons/si'
import { useLanguage } from '../context/LanguageContext'

export default function SkillsSection() {
  const { lang } = useLanguage()
  const title = lang === 'es' ? 'Habilidades' : 'Skills'

  const skills = [
    {
      category: lang === 'es' ? 'Lenguajes' : 'Languages',
      items: [
        { name: 'JavaScript', icon: <FaJsSquare className="text-yellow-400 text-2xl" /> },
        { name: 'Node.js', icon: <FaNodeJs className="text-green-500 text-2xl" /> },
        { name: 'Python', icon: <FaPython className="text-yellow-300 text-2xl" /> },
        // { name: 'PHP', icon: <SiPhp className="text-purple-600 text-2xl" /> },  <-- eliminado
        // { name: 'C++', icon: <FaDatabase className="text-blue-500 text-2xl" /> }, <-- eliminado
      ]
    },
    {
      category: lang === 'es' ? 'Bases de datos' : 'Databases',
      items: [
        { name: 'PostgreSQL', icon: <SiPostgresql className="text-blue-700 text-2xl" /> },
        { name: 'MySQL', icon: <SiMysql className="text-blue-500 text-2xl" /> },
        { name: 'MongoDB', icon: <SiMongodb className="text-green-600 text-2xl" /> },
      ]
    },
    {
      category: lang === 'es' ? 'Frameworks' : 'Frameworks & Tools',
      items: [
        { name: 'React', icon: <FaReact className="text-blue-400 text-2xl" /> },
        { name: 'HTML5', icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
        { name: 'CSS3', icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
        { name: 'Tailwind', icon: <SiTailwindcss className="text-sky-400 text-2xl" /> },
        { name: 'Babel', icon: <SiBabel className="text-pink-500 text-2xl" /> },
        // { name: 'Docker', icon: <SiDocker className="text-blue-600 text-2xl" /> }, <-- eliminado
        { name: 'Git', icon: <SiGit className="text-red-600 text-2xl" /> },
        { name: 'Linux', icon: <SiLinux className="text-gray-500 text-2xl" /> },
        { name: 'Scrum', icon: <FaTasks className="text-purple-500 text-2xl" /> },
        { name: 'XML', icon: <FaFileCode className="text-purple-600 text-2xl" /> },
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 text-center px-6">
      <h3 className="section-title mb-12">{title}</h3>

      <div className="flex justify-center gap-12">
        {skills.map((group, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <h4 className="text-2xl font-bold mb-6">{group.category}</h4>
            <div className="flex flex-row flex-wrap justify-center gap-6">
              {group.items.map((item, i) => (
                <div key={i} className="card-futuristic flex flex-col items-center gap-2" style={{ animationDelay: `${i * 0.1}s` }}>
                  {item.icon}
                  <span className="mt-2 font-semibold text-lg">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
