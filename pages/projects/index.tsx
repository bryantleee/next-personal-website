import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import styles from '../../styles/Home.module.css'

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
        <h2 className="title">
          <Link href="/projects">
            <a>Projects</a>
          </Link>
        </h2>
      </main>
    </div>
  )
}

export default Home
