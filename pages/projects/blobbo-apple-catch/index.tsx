import type { NextPage } from 'next'
import dynamic from 'next/dynamic'
import ProjectPage from '../../../components/ProjectPage/ProjectPage'
import { getProject } from '../../../data/projects'
import projectStyles from '../../../styles/ProjectPage.module.scss'

const GameBoyEmulator = dynamic(
  () => import('../../../components/GameBoyEmulator/GameBoyEmulator'),
  { ssr: false }
)

const project = getProject('blobbo-apple-catch')

const BlobboAppleCatch: NextPage = () => {
  return (
    <ProjectPage project={project}>
          <h2 className={projectStyles.sectionHeading}>About</h2>
          <p className={projectStyles.body}>
            Blobbo&apos;s Apple Catch is an original homebrew game for the Nintendo Game Boy.
            The player guides Blobbo and his basket to catch falling apples while dodging
            spiders, all running on real Game Boy hardware.
          </p>

          <h3 className={projectStyles.sectionHeading}>Highlights</h3>
          <ul className={projectStyles.list}>
            <li className={projectStyles.listItem}>
              Written in C using{' '}
              <a
                href="https://github.com/gbdk-2020/gbdk-2020"
                target="_blank"
                rel="noopener noreferrer"
                className={projectStyles.link}
              >
                GBDK 2020
              </a>
              ; compiles to a ROM playable on original Game Boy hardware, emulators, and
              the Analogue Pocket.
            </li>
            <li className={projectStyles.listItem}>
              Custom Super Game Boy border for an enhanced presentation when played on a
              Super Nintendo.
            </li>
            <li className={projectStyles.listItem}>
              Hand-drawn pixel art, sprites, and tile graphics designed for the Game Boy&apos;s
              4-color palette and 8x8 tile constraints.
            </li>
            <li className={projectStyles.listItem}>
              Released as a{' '}
              <a
                href="https://drive.google.com/file/d/1SuSRxeb4GMKE__AFbagq8SFiUG_N7MgH/view"
                target="_blank"
                rel="noopener noreferrer"
                className={projectStyles.link}
              >
                physical cartridge
              </a>
              , with sticker artwork and SGB border graphics by{' '}
              <a
                href="https://carolynetan.squarespace.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={projectStyles.link}
              >
                Carolyne Tan
              </a>
              .
            </li>
            <li className={projectStyles.listItem}>
              Open source on{' '}
              <a
                href="https://github.com/bryantleee/blobbos-apple-catch"
                target="_blank"
                rel="noopener noreferrer"
                className={projectStyles.link}
              >
                GitHub
              </a>
              ; ROM downloads available on the Releases page.
            </li>
          </ul>

          <h2 className={projectStyles.sectionHeading}>Play it here</h2>
          <GameBoyEmulator />
    </ProjectPage>
  )
}

export default BlobboAppleCatch
