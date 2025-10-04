import type { NextPage } from 'next'
import Head from 'next/head'
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu'
import styles from '../../../styles/Home.module.scss'

const BryantsBestList: NextPage = () => {
  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Head>
        <title>Bryant's Best List - Bryant</title>
        <meta name="description" content="A curated collection of the best tools, resources, and recommendations for developers." />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Bryant's Best List</h1>
          <p className={styles.projectsSubtitle}>A curated collection of the best tools, resources, and recommendations for developers.</p>
        </div>
        <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', color: '#ffffff' }}>
          <h2 style={{ color: '#ebc95b', marginBottom: '1rem' }}>About This Project</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Bryant's Best List is a carefully curated collection of the most useful tools, resources, 
            and recommendations for developers. This project aims to help fellow developers discover 
            quality tools and resources that can improve their workflow and productivity.
          </p>
          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>Key Features</h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem' }}>
            <li style={{ marginBottom: '0.5rem' }}>Curated tool recommendations</li>
            <li style={{ marginBottom: '0.5rem' }}>Developer resource collection</li>
            <li style={{ marginBottom: '0.5rem' }}>Regular updates and additions</li>
            <li style={{ marginBottom: '0.5rem' }}>Categorized by use case</li>
            <li style={{ marginBottom: '0.5rem' }}>Community-driven suggestions</li>
          </ul>
          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>Categories</h3>
          <p style={{ marginBottom: '1.5rem' }}>
            The list covers various categories including development tools, design resources, 
            productivity apps, and learning materials.
          </p>
        </div>
      </main>
    </div>
  )
}

export default BryantsBestList

