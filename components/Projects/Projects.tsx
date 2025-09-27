import Image from 'next/image'
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
    description: "A fun mobile game featuring Blobbo catching apples with smooth physics and engaging gameplay.",
    image: "/blobbo-minimalist.png",
    accentColor: "#fcd303",
    href: "/projects/blobbo-apple-catch"
  },
  {
    id: '2',
    title: "Bryant's Best List",
    description: "A curated collection of the best tools, resources, and recommendations for developers.",
    image: "/blobbo-minimalist.png",
    accentColor: "#5eeb34",
    href: "/projects/bryants-best-list"
  },
  {
    id: '3',
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website built with Next.js and TypeScript.",
    image: "/blobbo-minimalist.png",
    accentColor: "#ff6b6b",
    href: "/projects/portfolio"
  },
  {
    id: '4',
    title: "Task Manager",
    description: "A productivity app for managing tasks with drag-and-drop functionality and team collaboration.",
    image: "/blobbo-minimalist.png",
    accentColor: "#4ecdc4",
    href: "/projects/task-manager"
  }
]

const Projects = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  return (
    <div className={styles.projectsGrid}>
      {projects.map((project) => (
        <div
          key={project.id}
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
      ))}
    </div>
  )
}

export default Projects
