import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Projects.module.scss'

interface Project {
  id: string
  title: string
  description: string
  image: string
  accentColor: string
  href: string
}

const projects: Project[] = [
  {
    id: '1',
    title: "Blobbo's Apple Catch",
    description: "A Homebrew Game Boy using GBDK 2020!",
    image: "/blobbo-minimalist.png",
    accentColor: "#fcd303",
    href: "/projects/blobbo-apple-catch"
  },
  {
    id: '2',
    title: "Bryant's Best List",
    description: "Bryant's New York City Recommendations!",
    image: "/blobbo-minimalist.png",
    accentColor: "#5eeb34",
    href: "/projects/bryants-best-list"
  },
  {
    id: '3',
    title: "My Homelab",
    description: "I have a homelab! Check it out!",
    image: "/blobbo-minimalist.png",
    accentColor: "#ff6b6b",
    href: "/projects/portfolio"
  },
  {
    id: '4',
    title: "Project Scout",
    description: "A completely-offgrid remote security system that sends push notifications to my phone through the Meshtastic",
    image: "/blobbo-minimalist.png",
    accentColor: "#4ecdc4",
    href: "/projects/scout"
  }
]

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <Link key={project.id} href={project.href} className={styles.projectLink}>
          <div
            className={`${styles.projectCard} ${hoveredCard === project.id ? styles.hovered : ''}`}
            onMouseEnter={() => setHoveredCard(project.id)}
            onMouseLeave={() => setHoveredCard(null)}
          >
            <div className={styles.cardContent}>
              <div className={styles.imageContainer}>
                <Image 
                  src={project.image} 
                  alt={project.title} 
                  width={200} 
                  height={200}
                  className={styles.projectImage}
                />
              </div>
              <div className={styles.cardInfo}>
                <h3 className={styles.projectTitle}>{project.title}</h3>
                <p className={styles.projectDescription}>{project.description}</p>
              </div>
            </div>
            <div 
              className={styles.accentBar}
              style={{ backgroundColor: project.accentColor }}
            />
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Projects
