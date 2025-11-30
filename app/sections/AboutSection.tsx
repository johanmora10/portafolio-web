'use client'
import { useLanguage } from '../context/LanguageContext'

export default function About() {
  const { lang } = useLanguage()

  const title = lang === 'es' ? 'Mis Certificados' : 'My Certificates'

  return (
    <section id="about" className="py-20 text-center px-6">
      <h2 className="section-title mb-10">{title}</h2>

      {/* ==== CARRUSEL 3D ==== */}
      <div className="relative w-full flex justify-center">
        <div className="carousel-3d">
          <div className="item">
            <img src="/ciberseguridad.jpg" alt="ciberseguridad" />
          </div>
          <div className="item">
            <img src="/linux.jpg" alt="linux" />
          </div>
          <div className="item">
            <img src="/sena.jpg" alt="sena" />
          </div>
        </div>
      </div>

      <p className="max-w-2xl mx-auto mt-10 text-gray-300 leading-relaxed text-lg">
        {lang === 'es'
          ? 'Estos son algunos de mis certificados obtenidos durante mi formación en tecnología en desarrollo de software.'
          : 'These are some of my certificates obtained during my journey as a software development technologist.'}
      </p>

      {/* ======== ESTILOS ========= */}
      <style jsx>{`
        .carousel-3d {
          width: 260px;
          height: 260px;
          position: relative;
          transform-style: preserve-3d;
          animation: rotate3d 14s linear infinite;
        }

        .item {
          position: absolute;
          transform-style: preserve-3d;
        }

        .item img {
          width: 160px;   /* 🔥 MISMO TAMAÑO PARA TODAS */
          height: 160px;  /* 🔥 MISMO TAMAÑO PARA TODAS */
          object-fit: contain; /* No se recorta */
          border-radius: 14px;

          /* Luz suave futurista */
          background: #000;
          box-shadow:
            0 0 20px rgba(255, 255, 255, 0.4),
            0 0 30px rgba(75, 0, 255, 0.35);

          border: 2px solid rgba(255, 255, 255, 0.35);
        }

        /* DISTANCIA PARA QUE NO CHOQUEN */
        .item:nth-child(1) {
          transform: rotateY(0deg) translateZ(270px);
        }
        .item:nth-child(2) {
          transform: rotateY(120deg) translateZ(270px);
        }
        .item:nth-child(3) {
          transform: rotateY(240deg) translateZ(270px);
        }

        @keyframes rotate3d {
          from {
            transform: rotateY(0deg);
          }
          to {
            transform: rotateY(360deg);
          }
        }
      `}</style>
    </section>
  )
}
