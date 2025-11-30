'use client'
import { useLanguage } from '../context/LanguageContext'
import { FaLaptopCode, FaMobileAlt, FaPaintBrush } from 'react-icons/fa'

export default function Services() {
  const { t } = useLanguage()

  const services = [
    {
      title: t('service1_title'),
      description: t('service1_desc'),
      icon: <FaLaptopCode className="icon glow-icon" />
    },
    {
      title: t('service2_title'),
      description: t('service2_desc'),
      icon: <FaMobileAlt className="icon glow-icon" />
    },
    {
      title: t('service3_title'),
      description: t('service3_desc'),
      icon: <FaPaintBrush className="icon glow-icon" />
    }
  ]

  return (
    <section id="services">
      <h2 className="section-title">{t('services_title')}</h2>
      <p>{t('services_intro')}</p>

      <div className="services-grid">
        {services.map((s, idx) => (
          <div key={idx} className="service-card">
            {s.icon}
            <h3>{s.title}</h3>
            <p>{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
