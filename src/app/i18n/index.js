import { createInstance } from 'i18next'
import resourcesToBackend from 'i18next-resources-to-backend'
import { initReactI18next } from 'react-i18next/initReactI18next'
import { languages, defaultNS } from './settings'

export async function getTranslation(lng, ns = defaultNS) {
  const i18nInstance = createInstance()

  await i18nInstance
    .use(initReactI18next)
    .use(resourcesToBackend((lng, ns) => import(`./locales/${lng}/${ns}.json`)))
    .init({
      lng,
      fallbackLng: 'pt',
      supportedLngs: languages,
      ns,
      defaultNS,
      interpolation: { escapeValue: false },
    })

  return {
    t: i18nInstance.getFixedT(lng, ns),
  }
}
