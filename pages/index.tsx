import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import BryantLogo from '../components/BryantLogo/BryantLogo'
import styles from '../styles/Home.module.scss'
import Introduction from '../components/Introduction/Introduction'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Bryant Lee</title>
        <meta name="description" content="Personal website for Bryant" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <main className={styles.main}>
        <div className={styles.logo_container}>
          <BryantLogo />
        </div>
        <Introduction />
      </main>
      <Footer/>
    </>
  )
}

export default Home
