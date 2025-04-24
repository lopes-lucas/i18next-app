'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import styles from './footer.module.css'

const languages = [
  { code: 'en', label: 'English', flag: '🇺🇸 ' },
  { code: 'pt', label: 'Português Brasil', flag: '🇧🇷 ' }
]

export const Footer = ({ lng }) => {
  const [open, setOpen] = useState(false)
  const router = useRouter()
  const pathname = usePathname()

  const currentLang = languages.find(l => l.code === lng)

  const switchLanguage = (newLng) => {
    const newPath = pathname.replace(`/${lng}`, `/${newLng}`)
    router.push(newPath)
    setOpen(false)
  }

  return (
    <div className={styles.languageSelector}>
      <button onClick={() => setOpen(!open)} className={styles.currentLang}>
        <span className={styles.flag}>{currentLang?.flag}</span>
        <span className={styles.label}>{currentLang?.label}</span>
        <span className={styles.arrow}>{open ? '▲' : '▼'}</span>
      </button>

      {open && (
        <ul className={styles.dropdown}>
          {languages.filter(l => l.code !== lng).map((lang) => (
            <li key={lang.code}>
              <button className={styles.langItem} onClick={() => switchLanguage(lang.code)}>
                <span className={styles.flag}>{lang.flag}</span>
                <span className={styles.label}>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
