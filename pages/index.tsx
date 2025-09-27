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
        {/* Curved title card hanging from top-left */}
        <div className={styles.curved_title_card}>
          <h1 className={styles.title_text}>Bryant Lee</h1>
        </div>
        
        {/* Background curves */}
        <div className={styles.top_curve}></div>
        <div className={styles.bottom_curve}></div>
        
        {/* Main content section */}
        <div className={styles.content_section}>
          <p className={styles.content_text}>
            Hello! My name is Bryant Lee. I graduated from Cornell University in
            2021 and currently a software engineer at Amazon in NYC! Feel free to
            reach out to me at leezbrya[at]gmail.com
          </p>
        </div>
        
        {/* Curved footer card hanging from bottom-right */}
        <div className={styles.curved_footer_card}>
          <div className={styles.footer_content}>
            <a
              href="https://github.com/bryantleee"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_link}
            >
              <img src="/github-logo.png" alt="GitHub" width={24} height={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/bryantleee/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_link}
            >
              <img src="/linkedin-logo.png" alt="LinkedIn" width={24} height={24} />
            </a>
            <a
              href="mailto:leezbrya@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.footer_link}
            >
              <img src="/email-logo.png" alt="Email" width={24} height={24} />
            </a>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home
