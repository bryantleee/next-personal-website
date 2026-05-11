import type { NextPage } from 'next'
import Footer from '../components/Footer/Footer'
import Intro from '../components/Intro/Intro'
import BryantLogo from '../components/BryantLogo/BryantLogo'
import Seo from '../components/Seo/Seo'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <Seo
        title="Bryant Lee"
        description="Bryant Lee: software engineer. Game Boy homebrew, self-hosted infrastructure, and edge AI projects."
        path="/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Bryant Lee',
          url: 'https://www.bryant.li',
          jobTitle: 'Software Engineer',
          sameAs: [
            'https://github.com/bryantleee',
            'https://www.linkedin.com/in/bryantleee/',
          ],
        }}
      />

      <main className={styles.main}>
        <div className={styles.logo_container}>
          <BryantLogo />
        </div>

        <Intro/>
      </main>
      <Footer/>
    </>
  )
}

export default Home
