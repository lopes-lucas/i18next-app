import { Footer } from './components/Footer'
import styles from './page.module.css'
import { Trans } from 'react-i18next/TransWithoutContext'
import { getTranslation } from '../i18n/index'

export default async function Page({ params }) {
  const { t } = await getTranslation(params.lng)

  return (
    <div className={styles.pageContainer}>
      <h1 className={styles.title}>{t('title')}</h1>

      <p className={styles.subtitle}>
        <Trans i18nKey="subtitle" t={t} />
      </p>

      <h2 className={styles.instructionsTitle}>{t('instructions.title')}</h2>
      <ol className={styles.list}>
        {t('instructions.list', { returnObjects: true }).map((item, index) => (
          <li key={index} className={styles.listItem}>{item}</li>
        ))}
      </ol>

      <h2 className={styles.featuresTitle}>{t('features.title')}</h2>
      <ol className={styles.list}>
        {t('features.list', { returnObjects: true }).map((item, index) => (
          <li key={index} className={styles.listItem}>{item}</li>
        ))}
      </ol>

      <Footer lng={params.lng} />
    </div>
  )
}
