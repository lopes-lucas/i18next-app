import { Footer } from './components/Footer'
import { Trans } from 'react-i18next/TransWithoutContext'
import { getTranslation } from '../i18n/index'
import Link from 'next/link'
import Image from 'next/image'

const LanguageSwitcher = ({ currentLng }) => (
  <div className="flex justify-end gap-4 mb-8">
    <Link href="/en">
      <Image
        src="/img/us.webp"
        alt="English"
        width={40}
        height={25}
        className={`${currentLng === 'en' ? 'ring-2 ring-blue-500' : ''} rounded overflow-hidden object-cover aspect-[4/3]`}
      />
    </Link>
    <Link href="/pt">
      <Image
        src="/img/br.webp"
        alt="Português"
        width={40}
        height={25}
        className={`${currentLng === 'pt' ? 'ring-2 ring-blue-500' : ''} rounded overflow-hidden object-cover aspect-[4/3]`}
      />
    </Link>
  </div>
)

export default async function Page({ params }) {
  const { lng } = params
  const { t } = await getTranslation(lng)

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-slate-900 px-4">
      <div className="w-full max-w-2xl rounded-xl bg-white dark:bg-slate-800 shadow-lg dark:shadow-none p-10 space-y-10">
        
        <LanguageSwitcher currentLng={lng} />

        <h1 className="text-3xl font-bold text-gray-900 dark:text-white text-center">
          {t('title')}
        </h1>

        <p className="text-gray-700 dark:text-gray-300 text-center text-lg leading-relaxed">
          <Trans i18nKey="subtitle" t={t} />
        </p>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {t('instructions.title')}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {t('instructions.list', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
            {t('features.title')}
          </h2>
          <ol className="list-decimal list-inside space-y-2 text-gray-700 dark:text-gray-300">
            {t('features.list', { returnObjects: true }).map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ol>
        </div>

        <div className="pt-6">
          <Footer lng={lng} />
        </div>
      </div>
    </div>
  )
}
