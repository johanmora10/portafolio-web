'use client'
import { useTheme } from 'next-themes'
import { useLanguage } from '../context/LanguageContext'
import { useEffect, useState } from 'react'

export default function FloatButtons() {
  const { theme, setTheme } = useTheme()
  const { lang, toggleLang } = useLanguage()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])
  if (!mounted) return null

  return (
    <div style={{
      position: 'fixed',
      right: '1rem',
      top: '50%',
      display: 'flex',
      flexDirection: 'column',
      gap: '0.5rem',
      zIndex: 100
    }}>
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        style={{
          padding: '0.5rem',
          borderRadius: '50%',
          background: '#a306ff',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        {theme === 'dark' ? '☀️' : '🌙'}
      </button>

      <button
        onClick={toggleLang}
        style={{
          padding: '0.5rem',
          borderRadius: '50%',
          background: '#a306ff',
          color: 'white',
          cursor: 'pointer'
        }}
      >
        {lang.toUpperCase()}
      </button>
    </div>
  )
}
