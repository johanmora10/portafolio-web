import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from './context/LanguageContext'

import Navbar from './components/Navbar'
import FloatButtons from './components/FloatButtons'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Johan — Portafolio',
  description: 'Portafolio profesional de Johan',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html suppressHydrationWarning>
      <body className={inter.className}>
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
