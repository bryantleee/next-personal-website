import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/Footer/Footer'
import BryantLogo from '../components/BryantLogo/BryantLogo'
import Nav from '../components/Nav/Nav'
import Introduction from '../components/Introduction/Introduction'
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

        <div className={styles.logo_container}>
          <BryantLogo />
          <Nav />
        </div>
        <Introduction />
      </main>
      <Footer/>
    </>
  )
}

export default Home
