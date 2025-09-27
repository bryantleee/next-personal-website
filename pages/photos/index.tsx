import type { NextPage } from 'next'
import Head from 'next/head'
import Photos from '../../components/Photos/Photos'
import HamburgerMenu from '../../components/HamburgerMenu/HamburgerMenu'
import styles from '../../styles/Home.module.scss'

const PhotosPage: NextPage = () => {
  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Head>
        <title>Photos - Bryant</title>
        <meta name="description" content="Explore Bryant's photography and visual work" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>My Photos</h1>
          <p className={styles.projectsSubtitle}>A collection of my photography and visual work</p>
        </div>
        <Photos />
      </main>
    </div>
  )
}

export default PhotosPage
