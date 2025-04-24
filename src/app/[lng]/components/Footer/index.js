'use client'

import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'

const languages = [
  { code: 'en', label: 'English'},
  { code: 'pt', label: 'Português Brasil'}
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
    <div className="relative mt-10 flex justify-center">
      <div className="relative inline-block text-left">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 px-4 py-2 text-sm text-gray-800 dark:text-gray-100 shadow-sm hover:bg-gray-50 dark:hover:bg-slate-700 transition"
        >
          <span className="text-xl">{currentLang?.flag}</span>
          <span>{currentLang?.label}</span>
          <span className="ml-2 text-xs">{open ? '▲' : '▼'}</span>
        </button>

        {open && (
          <ul className="absolute z-10 mt-2 w-full origin-top-right rounded-md border border-gray-300 dark:border-gray-600 bg-white dark:bg-slate-800 shadow-lg ring-1 ring-black/5">
            {languages
              .filter(l => l.code !== lng)
              .map(lang => (
                <li key={lang.code}>
                  <button
                    onClick={() => switchLanguage(lang.code)}
                    className="flex w-full items-center gap-2 px-4 py-2 text-sm text-gray-800 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-slate-700 transition"
                  >
                    <span className="text-xl">{lang.flag}</span>
                    <span>{lang.label}</span>
                  </button>
                </li>
              ))}
          </ul>
        )}
      </div>
    </div>
  )
}
