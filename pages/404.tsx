import type { NextPage } from 'next'
import Link from 'next/link'
import Seo from '../components/Seo/Seo'
import styles from '../styles/Home.module.scss'
import projectStyles from '../styles/ProjectPage.module.scss'

const NotFoundPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Page Not Found | Bryant Lee"
        description="The requested page could not be found."
        path="/404"
        noIndex
      />
      <main id="main-content" className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Page not found</h1>
          <p className={styles.projectsSubtitle}>
            That page does not exist.{' '}
            <Link href="/" className={projectStyles.link}>
              Return home
            </Link>
            .
          </p>
        </div>
      </main>
    </>
  )
}

export default NotFoundPage
