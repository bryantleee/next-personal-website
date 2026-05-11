import type { NextPage } from 'next'
import Head from 'next/head'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import styles from '../../styles/Home.module.scss'

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Bryant</title>
        <meta name="description" content="Explore Bryant's portfolio of projects and creative work" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Projects</h1>
          <p className={styles.projectsSubtitle}>A selection of personal and side projects.</p>
        </div>
        <Projects />
      </main>
      <Footer />
    </>
  )
}

export default ProjectsPage
