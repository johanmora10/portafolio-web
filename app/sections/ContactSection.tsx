'use client'
import { useLanguage } from '../context/LanguageContext'
import { FaMapMarkerAlt, FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function ContactSection() {
  const { lang } = useLanguage()

  const contactItems = [
    { icon: <FaMapMarkerAlt />, title: lang === 'es' ? 'Ubicación' : 'Location', content: 'Bogotá, Colombia', href: 'https://www.google.com/maps/place/Bogotá,+Colombia' },
    { icon: <FaEnvelope />, title: 'Email', content: 'estebanmora363@gmail.com', href: 'mailto:estebanmora363@gmail.com' },
    // { icon: <FaPhone />, title: lang === 'es' ? 'Teléfono' : 'Phone', content: '+57 313 425 5691', href: 'tel:+573134255691' },  <-- eliminado
    { icon: <FaGithub />, title: 'GitHub', content: 'github.com/johanmora10', href: 'https://github.com/johanmora10' },
    { icon: <FaLinkedin />, title: 'LinkedIn', content: 'LinkedIn', href: 'https://www.linkedin.com/in/johan-esteban-mora-camelo-1911622ab/' }
  ]

  return (
    <section id="contact" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h3 className="text-4xl font-extrabold mb-12 text-center text-main-title">{lang === 'es' ? 'Contáctame' : 'Contact Me'}</h3>
        <div className="grid md:grid-cols-2 gap-10">

          {/* Información */}
          <div className="flex flex-col gap-4">
            {contactItems.map((item, idx) => (
              <a key={idx} href={item.href} target="_blank" rel="noopener noreferrer"
                 className="flex items-center gap-4 card p-4 hover:scale-105 transition-transform duration-300">
                <div className="text-2xl">{item.icon}</div>
                <div>
                  <h4 className="font-semibold text-main-title">{item.title}</h4>
                  <p className="text-secondary">{item.content}</p>
                </div>
              </a>
            ))}
          </div>

          {/* Formulario Mejorado */}
          <form action="mailto:estebanmora363@gmail.com" method="POST" encType="text/plain"
                className="bg-card p-6 rounded-xl shadow-lg flex flex-col gap-5 border border-gradient">

            <h4 className="text-2xl font-semibold text-main-title mb-3">{lang === 'es' ? 'Envíame un mensaje' : 'Send me a message'}</h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input name="name" placeholder={lang === 'es' ? 'Nombre' : 'Name'} className="input-field"/>
              <input name="email" placeholder="Email" className="input-field"/>
            </div>

            <textarea name="message" placeholder={lang === 'es' ? 'Mensaje' : 'Message'} rows={5} className="input-field"/>
            
            <button type="submit" className="btn-primary self-start w-full md:w-auto">{lang === 'es' ? 'Enviar' : 'Send'}</button>
          </form>

        </div>
      </div>
    </section>
  )
}
