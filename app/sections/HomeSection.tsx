'use client'
import Hero from '../components/Hero'
import Services from '../components/Services'
import { useLanguage } from '../context/LanguageContext'

export default function HomeSection() {
  const { lang } = useLanguage()

  return (
    <main className="w-full">
      {/* Hero */}
      <Hero />

      {/* Servicios o secciones adicionales */}
      <Services />
    </main>
  )
}
