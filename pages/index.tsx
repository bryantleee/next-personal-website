import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Construction from '../components/Construction/Construction'
import BryantLogo from '../components/BryantLogo/BryantLogo'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bryant Lee</title>
        <meta name="description" content="Personal website for Bryant" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        {/* Title section - curved card hanging from top-left */}
        <div className={styles.titleSection}>
          <div className={styles.titleCard}>
            <h1 className={styles.title}>Bryant Lee</h1>
            <p className={styles.subtitle}>Software Engineer</p>
          </div>
        </div>

        {/* Main content area */}
        <div className={styles.contentArea}>
          <div className={styles.logo_container}>
            <BryantLogo />
          </div>
          <Construction/>
        </div>

        {/* Footer section - curved card hanging from bottom-right */}
        <div className={styles.footerSection}>
          <div className={styles.footerCard}>
            <Footer/>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
