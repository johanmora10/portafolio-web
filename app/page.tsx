'use client'

import Navbar from './components/Navbar'
import HomeSection from './sections/HomeSection'
import AboutSection from './sections/AboutSection'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import PersonalSection from './sections/PersonalSection'
import ContactSection from './sections/ContactSection'
import Footer from './components/Footer'

export default function Page(){
  return (
    <main>
      <Navbar />
      <HomeSection />
      <ProjectsSection />
      <AboutSection />
      <ContactSection />
      <PersonalSection />
      <SkillsSection />
      <Footer />
    </main>
  )
}
