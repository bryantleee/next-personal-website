import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import Construction from '../components/Construction/Construction'
import BryantLogo from '../components/BryantLogo/BryantLogo'
import HamburgerMenu from '../components/HamburgerMenu/HamburgerMenu'
import styles from '../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <>
      <HamburgerMenu />
      <Head>
        <title>Bryant Lee</title>
        <meta name="description" content="Personal website for Bryant" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo_container}>
          <BryantLogo />
        </div>
        
        <Construction/>
      </main>
      <Footer/>
    </>
  )
}

export default Home
