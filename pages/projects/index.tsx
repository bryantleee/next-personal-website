import type { NextPage } from 'next'
import Head from 'next/head'
import Projects from '../../components/Projects/Projects'
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu'
import styles from '../../styles/Home.module.scss'

const ProjectsPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Head>
        <title>Projects - Bryant</title>
        <meta name="description" content="Explore Bryant's portfolio of projects and creative work" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>My Projects</h1>
          <p className={styles.projectsSubtitle}>A collection of my creative work and technical projects</p>
        </div>
        <Projects />
      </main>
    </div>
  )
}

export default ProjectsPage
