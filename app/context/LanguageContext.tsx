'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'es' | 'en'

interface LanguageContextProps {
  lang: Language
  toggleLang: () => void
  t: (key: string) => string
}

const translations = {
  es: {
    greeting: 'Hola, soy Johan',
    role: 'Desarrollador Frontend',
    description: 'Apasionado por crear interfaces modernas y accesibles.',
    downloadCV: 'Descargar CV',
    services_title: "Servicios",
    services_intro:
      "Enfocado en crear componentes frontend escalables y estandarizar APIs en el backend.",
    service1_title: "01 Desarrollo Web",
    service1_desc:
      "Creo componentes visuales modernos y eficientes con buenas prácticas en React.",
    service2_title: "02 Servicio Fullstack",
    service2_desc:
      "Estandarización de APIs y diseño de sistemas usando Node.js y MongoDB.",
  },
  en: {
    greeting: 'Hi, I am Johan',
    role: 'Frontend Developer',
    description:
      'Passionate about creating modern and accessible interfaces.',
    downloadCV: 'Download CV',
    services_title: "Services",
    services_intro:
      "Engaged in creating scalable frontend components and backend APIs.",
    service1_title: "01 Web Development",
    service1_desc:
      "Modern and user-friendly visual components using React.",
    service2_title: "02 Fullstack Service",
    service2_desc:
      "API standardization and improvement using Node.js and MongoDB.",
  },
}

const LanguageContext = createContext<LanguageContextProps | undefined>(
  undefined
)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Language>('es')

  const toggleLang = () => {
    setLang(prev => (prev === 'es' ? 'en' : 'es'))
  }

  const t = (key: string) =>
    translations[lang][key as keyof typeof translations['es']] || key

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context)
    throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return context
}
