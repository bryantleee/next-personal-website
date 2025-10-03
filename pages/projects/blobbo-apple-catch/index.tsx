import type { NextPage } from 'next'
import Head from 'next/head'
import HamburgerMenu from '../../../components/HamburgerMenu/HamburgerMenu'
import ProjectHero from '../../../components/ProjectHero/ProjectHero'
import ProjectDescription from '../../../components/ProjectDescription/ProjectDescription'
import ProjectFeatures from '../../../components/ProjectFeatures/ProjectFeatures'
import ProjectTechStack from '../../../components/ProjectTechStack/ProjectTechStack'
import styles from '../../../styles/Home.module.scss'

const BlobboAppleCatch: NextPage = () => {
  const projectData = {
    title: "Blobbo's Apple Catch",
    subtitle: "Homebrew Game Boy Game",
    description: "A classic arcade-style game developed for the original Game Boy using GBDK 2020, featuring Blobbo the character catching falling apples.",
    content: `This project represents my dive into retro game development for the original Game Boy hardware. Using GBDK 2020 (Game Boy Development Kit), I created a complete game from scratch that runs on real Game Boy hardware.

The game features Blobbo, a charming character who must catch falling apples while avoiding obstacles. The gameplay is simple yet addictive, with increasing difficulty levels and classic 8-bit graphics that pay homage to the golden age of handheld gaming.

Developing for the Game Boy presented unique challenges including limited memory, monochrome display constraints, and the need to optimize for the Z80 processor. This project taught me valuable lessons about resource management and efficient programming techniques.

The game includes multiple levels, a scoring system, and classic Game Boy sound effects created using the system's sound channels.`,
    highlights: [
      "Developed using GBDK 2020 for authentic Game Boy compatibility",
      "Complete game with multiple levels and increasing difficulty",
      "Classic 8-bit graphics and sound effects",
      "Optimized for the original Game Boy's hardware constraints",
      "Playable on real Game Boy hardware via flash cartridges"
    ],
    features: [
      {
        title: "Retro Graphics",
        description: "Authentic 8-bit pixel art created within Game Boy's 160x144 monochrome display limitations.",
        icon: "🎮"
      },
      {
        title: "Classic Gameplay",
        description: "Simple yet engaging mechanics with Blobbo catching apples while avoiding obstacles.",
        icon: "🍎"
      },
      {
        title: "Progressive Difficulty",
        description: "Multiple levels with increasing speed and complexity to challenge players.",
        icon: "📈"
      },
      {
        title: "Sound Design",
        description: "Chiptune music and sound effects using Game Boy's 4-channel sound system.",
        icon: "🎵"
      },
      {
        title: "Score System",
        description: "High score tracking and point system to encourage replayability.",
        icon: "🏆"
      },
      {
        title: "Hardware Optimization",
        description: "Efficient code optimized for the Z80 processor and limited memory constraints.",
        icon: "⚡"
      }
    ],
    technologies: [
      { name: "GBDK 2020", category: "Development Kit", description: "Modern C compiler and tools for Game Boy development" },
      { name: "C Programming", category: "Language", description: "Low-level C programming for embedded systems" },
      { name: "Game Boy Hardware", category: "Platform", description: "Original Game Boy with Z80 processor and 8KB RAM" },
      { name: "Tile Graphics", category: "Graphics", description: "8x8 pixel tiles for sprite and background graphics" },
      { name: "Sound Channels", category: "Audio", description: "Game Boy's 4-channel sound system for music and effects" },
      { name: "Flash Cartridge", category: "Distribution", description: "Modern flash cartridges for running homebrew games" },
      { name: "Emulator Testing", category: "Development", description: "BGB and other emulators for development and testing" },
      { name: "Assembly Optimization", category: "Performance", description: "Assembly language for critical performance sections" }
    ]
  }

  return (
    <div className={styles.container}>
      <HamburgerMenu />
      <Head>
        <title>Blobbo's Apple Catch</title>
        <meta name="description" content="A Homebrew Game Boy game developed using GBDK 2020 featuring Blobbo catching falling apples" />
        <link rel="icon" href="/favicon.svg" />
      </Head>
      <main className={styles.main}>
        <ProjectHero 
          title={projectData.title}
          subtitle={projectData.subtitle}
          description={projectData.description}
        />
        <ProjectDescription 
          content={projectData.content}
          highlights={projectData.highlights}
        />
        <ProjectFeatures features={projectData.features} />
        <ProjectTechStack technologies={projectData.technologies} />
      </main>
    </div>
  )
}

export default BlobboAppleCatch
