import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../../../styles/Home.module.scss'

const Portfolio: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Portfolio Website - Bryant</title>
        <meta name="description" content="A modern, responsive portfolio website built with Next.js and TypeScript." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Portfolio Website</h1>
          <p className={styles.projectsSubtitle}>A modern, responsive portfolio website built with Next.js and TypeScript.</p>
        </div>
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          <h2 style={{ color: '#ebc95b', marginBottom: '1rem' }}>About This Project</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            This portfolio website showcases my work and projects in a clean, modern design. 
            Built with Next.js and TypeScript, it features responsive design, smooth animations, 
            and optimized performance.
          </p>
          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>Key Features</h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Responsive design</li>
            <li style={{ marginBottom: '0.5rem' }}>Modern UI/UX</li>
            <li style={{ marginBottom: '0.5rem' }}>Optimized performance</li>
            <li style={{ marginBottom: '0.5rem' }}>TypeScript integration</li>
            <li style={{ marginBottom: '0.5rem' }}>SEO optimized</li>
          </ul>
          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>Technology Stack</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            Next.js, TypeScript, SCSS, and modern web development best practices for optimal 
            performance and user experience.
          </p>
        </div>
      </main>
    </div>
  )
}

export default Portfolio

