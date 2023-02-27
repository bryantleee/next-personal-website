import type { NextPage } from 'next'
import Head from 'next/head'
import Projects from '../../components/Projects/Projects'
import styles from '../../styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Projects</title>
        <meta name="description" content="Bryant's projects" />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className={styles.main}>
        <h1> Projects </h1>
        <Projects />
      </main>
    </div>
  )
}

export default Home
