import React from 'react'
import styles from './ProjectHero.module.scss'

interface ProjectHeroProps {
  title: string
  subtitle: string
  description: string
  imageUrl?: string
}

const ProjectHero: React.FC<ProjectHeroProps> = ({ 
  title, 
  subtitle, 
  description, 
  imageUrl 
}) => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
        <p className={styles.description}>{description}</p>
        {imageUrl && (
          <div className={styles.imageContainer}>
            <img src={imageUrl} alt={title} className={styles.image} />
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectHero
