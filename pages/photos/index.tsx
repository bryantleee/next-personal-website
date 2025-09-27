import type { NextPage } from 'next'
import Head from 'next/head'
import Footer from '../../components/Footer/Footer'
import Nav from '../../components/Nav/Nav'
import Photos from '../../components/Photos/Photos'
import styles from '../../styles/Home.module.scss'

const PhotosPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>Photos - Bryant Lee</title>
        <meta name="description" content="Photography portfolio by Bryant Lee" />
        <link rel="icon" href="/favicon.svg" />
      </Head>

      <Nav />
      <main className={styles.main}>
        <Photos />
      </main>
      <Footer />
    </>
  )
}

export default PhotosPage
