import type { NextPage } from 'next'
import Image from 'next/image'
import Footer from '../../../components/Footer/Footer'
import Seo from '../../../components/Seo/Seo'
import styles from '../../../styles/Home.module.scss'

const BLOBBO_DESCRIPTION =
  'An original homebrew Nintendo Game Boy game built in C with GBDK 2020, with a physical cartridge release.'

const BlobboAppleCatch: NextPage = () => {
  return (
    <>
      <Seo
        title="Blobbo's Apple Catch | Bryant Lee"
        description={BLOBBO_DESCRIPTION}
        path="/projects/blobbo-apple-catch"
        image="/blobbo-apple-catch.webp"
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: "Blobbo's Apple Catch",
          description: BLOBBO_DESCRIPTION,
          image: 'https://www.bryant.li/blobbo-apple-catch.webp',
          author: { '@type': 'Person', name: 'Bryant Lee' },
          url: 'https://www.bryant.li/projects/blobbo-apple-catch',
        }}
      />
      <main className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>Blobbo&apos;s Apple Catch</h1>
          <p className={styles.projectsSubtitle}>
            Nintendo Game Boy homebrew game
          </p>
        </div>
        <div
          style={{
            padding: '0 2rem 3rem',
            maxWidth: '800px',
            margin: '0 auto',
            color: '#ffffff',
          }}
        >
          <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
            <Image
              src="/blobbo-apple-catch.webp"
              alt="Blobbo's Apple Catch on a Game Boy"
              width={3024}
              height={4032}
              style={{ width: '100%', maxWidth: '500px', height: 'auto', borderRadius: 8 }}
            />
          </div>

          <h2 style={{ color: '#ebc95b', marginBottom: '1rem' }}>About</h2>
          <p style={{ marginBottom: '1.5rem', lineHeight: '1.6' }}>
            Blobbo&apos;s Apple Catch is an original homebrew game for the Nintendo Game Boy.
            The player guides Blobbo and his basket to catch falling apples while dodging
            spiders, all running on real Game Boy hardware.
          </p>

          <h3 style={{ color: '#ebc95b', marginBottom: '1rem' }}>Highlights</h3>
          <ul style={{ marginBottom: '1.5rem', paddingLeft: '1.5rem', lineHeight: '1.7' }}>
            <li style={{ marginBottom: '0.5rem' }}>
              Written in C using{' '}
              <a
                href="https://github.com/gbdk-2020/gbdk-2020"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ebc95b', textDecoration: 'underline' }}
              >
                GBDK 2020
              </a>
              ; compiles to a ROM playable on original Game Boy hardware, emulators, and
              the Analogue Pocket.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Custom Super Game Boy border for an enhanced presentation when played on a
              Super Nintendo.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Hand-drawn pixel art, sprites, and tile graphics designed for the Game Boy&apos;s
              4-color palette and 8x8 tile constraints.
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Released as a{' '}
              <a
                href="https://drive.google.com/file/d/1SuSRxeb4GMKE__AFbagq8SFiUG_N7MgH/view"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ebc95b', textDecoration: 'underline' }}
              >
                physical cartridge
              </a>
              , with sticker artwork and SGB border graphics by{' '}
              <a
                href="https://carolynetan.squarespace.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ebc95b', textDecoration: 'underline' }}
              >
                Carolyne Tan
              </a>
              .
            </li>
            <li style={{ marginBottom: '0.5rem' }}>
              Open source on{' '}
              <a
                href="https://github.com/bryantleee/blobbos-apple-catch"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: '#ebc95b', textDecoration: 'underline' }}
              >
                GitHub
              </a>
              ; ROM downloads available on the Releases page.
            </li>
          </ul>
        </div>
      </main>
      <Footer />
    </>
  )
}

export default BlobboAppleCatch
