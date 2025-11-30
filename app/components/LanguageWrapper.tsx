'use client'
import { useEffect, ReactNode } from 'react'
import { useLanguage } from '../context/LanguageContext'

interface Props {
  children: ReactNode
}

export default function LanguageWrapper({ children }: Props) {
  const { lang } = useLanguage()

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  return <>{children}</>
}

