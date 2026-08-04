import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from './context/LanguageContext'

import Navbar from './components/Navbar'
import FloatButtons from './components/FloatButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johan Mora | Desarrollador Full Stack · Odoo ERP · IA · Colombia',
  description: 'Desarrollador Full Stack especializado en Webflow, WordPress, Shopify, Laravel, React y Odoo ERP. Automatización con IA para negocios en Colombia, España y México.',
  keywords: [
    'desarrollador web Colombia',
    'freelancer React Colombia',
    'Odoo ERP Colombia',
    'desarrollador Odoo freelance',
    'automatización IA Colombia',
    'sitio web profesional Colombia',
    'Full Stack developer Bogotá',
    'Johan Mora desarrollador',
    'programador Bogotá freelance',
    'tienda Shopify Colombia',
  ],
  authors: [{ name: 'Johan Mora' }],
  creator: 'Johan Mora',
  openGraph: {
    title: 'Johan Mora | Full Stack Developer · Odoo ERP · Colombia',
    description: 'No vendo código. Vendo negocios que funcionan solos.',
    url: 'https://my-portfolio-johan.vercel.app', // ← cambia por tu URL real
    siteName: 'Johan Mora Portfolio',
    locale: 'es_CO',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Johan Mora | Full Stack Developer',
    description: 'No vendo código. Vendo negocios que funcionan solos.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>

        {/* Schema markup — Google muestra tu perfil enriquecido */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Johan Mora',
              jobTitle: 'Full Stack Developer',
              description: 'Desarrollador Full Stack especializado en Odoo ERP y automatización con IA en Colombia',
              url: 'https://my-portfolio-johan.vercel.app', // ← cambia por tu URL real
              sameAs: [
                'https://www.linkedin.com/in/johanmora',   // ← pon tu LinkedIn real
                'https://github.com/johanmora10',
                'https://www.fiverr.com/johan_mora_tech',
              ],
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Bogotá',
                addressCountry: 'CO',
              },
            }),
          }}
        />

        <ThemeProvider attribute="class" defaultTheme="dark">
          <LanguageProvider>
            <Navbar />
            {children}
            <FloatButtons />
          </LanguageProvider>
        </ThemeProvider>

      </body>
    </html>
  )
}