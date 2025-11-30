'use client'
import { useLanguage } from '../context/LanguageContext'

export default function Experience() {
  const { lang } = useLanguage()

  const titleExp = lang === 'es' ? 'Experiencia' : 'Experience'
  const titleEdu = lang === 'es' ? 'Educación' : 'Education'

  const experiences = [
    { period: '2021 - Actualidad', title: 'FRONTEND DEVELOPER', company: 'Freelance' },
    { period: '2024 - 2025', title: 'FRONTEND DEVELOPER', company: 'Adecco/Akkodis - The Home Depot' },
    { period: '2023 - 2024', title: 'FRONTEND DEVELOPER', company: 'Tech Mahindra - Scotiabank Colpatria' }
  ]

  const educations = [
    { period: '2021 - 2023', title: lang === 'es' ? 'Tecnólogo en Desarrollo de Software' : 'Software Development Technologist', company: 'SENA' },
    { period: '2019', title: lang === 'es' ? 'Bachiller Académico' : 'High School Diploma', company: 'IED' }
  ]

  return (
    <section id="experience" className="py-20">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8">
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-[#b02aa6] mb-6">{titleExp}</h3>
          <div className="space-y-6">
            {experiences.map(i => (
              <div key={`${i.title}-${i.period}`} className="card-dark p-6 rounded-xl">
                <div className="text-[#b02aa6] font-semibold">{i.period}</div>
                <div className="text-2xl font-bold mt-2">{i.title}</div>
                <div className="text-gray-300 mt-2">{i.company}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center md:text-left">
          <h3 className="text-3xl font-bold text-[#b02aa6] mb-6">{titleEdu}</h3>
          <div className="space-y-6">
            {educations.map(i => (
              <div key={`${i.title}-${i.period}`} className="card-dark p-6 rounded-xl">
                <div className="text-[#b02aa6] font-semibold">{i.period}</div>
                <div className="text-2xl font-bold mt-2">{i.title}</div>
                <div className="text-gray-300 mt-2">{i.company}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
