import type { NextPage } from 'next'
import Head from 'next/head'
import Projects from '../../components/Projects/Projects'
import Footer from '../../components/Footer/Footer'
import Navigation from '../../components/Navigation/Navigation'
import styles from '../../styles/Home.module.scss'

const ProjectsPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Projects - Bryant Lee</title>
        <meta name="description" content="Explore Bryant's portfolio of projects and creative work" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.pageTitle}>
          <h1>Projects</h1>
        </div>
        
        <div className={styles.curvedTop}>
          <svg viewBox="0 0 400 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="topGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#667eea"/>
                <stop offset="100%" stopColor="#667eea" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="topGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#764ba2"/>
                <stop offset="100%" stopColor="#764ba2" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M0,0 L0,100 C50,120 100,110 150,105 C200,100 250,95 300,90 C350,85 400,80 400,0 Z" fill="url(#topGradient1)"/>
            <path d="M0,0 L0,80 C50,95 100,90 150,85 C200,80 250,75 300,70 C350,65 400,60 400,0 Z" fill="url(#topGradient2)"/>
          </svg>
        </div>
        
        <div className={styles.content}>
          <div className={styles.projectsHeader}>
            <h2 className={styles.projectsTitle}>My Projects</h2>
            <p className={styles.projectsSubtitle}>A collection of my creative work and technical projects</p>
          </div>
          <Projects />
        </div>
        
        <div className={styles.curvedBottom}>
          <svg viewBox="0 0 400 120" preserveAspectRatio="none">
            <defs>
              <linearGradient id="bottomGradient1" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#667eea"/>
                <stop offset="100%" stopColor="#667eea" stopOpacity="0"/>
              </linearGradient>
              <linearGradient id="bottomGradient2" x1="100%" y1="0%" x2="0%" y2="0%">
                <stop offset="0%" stopColor="#764ba2"/>
                <stop offset="100%" stopColor="#764ba2" stopOpacity="0"/>
              </linearGradient>
            </defs>
            <path d="M400,0 L400,100 C350,120 300,110 250,105 C200,100 150,95 100,90 C50,85 0,80 0,0 Z" fill="url(#bottomGradient1)"/>
            <path d="M400,0 L400,80 C350,95 300,90 250,85 C200,80 150,75 100,70 C50,65 0,60 0,0 Z" fill="url(#bottomGradient2)"/>
          </svg>
        </div>
      </main>
      <Footer/>
      <Navigation/>
    </>
  )
}

export default ProjectsPage
