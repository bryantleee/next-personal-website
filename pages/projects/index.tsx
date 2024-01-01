import type { NextPage } from 'next'
import Head from 'next/head'
import Nav from '../../components/Nav/Nav'
import ProjectGrid from '../../components/ProjectGrid/ProjectGrid'
import styles from './Projects.module.scss'

const Projects: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bryant&apos;s Projects</title>
        <meta name="description" content="Bryant's projects" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}> Projects </h1>
        <div className={styles.nav}>
          <Nav />
        </div>
        <ProjectGrid />
      </main>
    </div>
  )
}

export default Projects
