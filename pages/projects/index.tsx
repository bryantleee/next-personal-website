import type { NextPage } from 'next'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import Seo from '../../components/Seo/Seo'
import styles from '../../styles/Home.module.scss'

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Seo
        title="Projects | Bryant Lee"
        description="Explore Bryant's portfolio of projects and creative work."
        path="/projects"
        image="/home-lab.webp"
      />
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
