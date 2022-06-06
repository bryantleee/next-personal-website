import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../components/footer'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bryant Lee</title>
        <meta name="description" content="Personal website for Bryant Lee" />
        <link rel="icon" href="/favicon.png" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          bryant
        </h1>
        <h2> 
          under construction, please come back later!
        </h2>
        <h3>
          {':)'}
        </h3>
      </main>
      <Footer/>
    </div>
  )
}

export default Home
