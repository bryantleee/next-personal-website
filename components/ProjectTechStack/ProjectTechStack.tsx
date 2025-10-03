import React from 'react'
import styles from './ProjectTechStack.module.scss'

interface TechItem {
  name: string
  category: string
  description?: string
}

interface ProjectTechStackProps {
  technologies: TechItem[]
}

const ProjectTechStack: React.FC<ProjectTechStackProps> = ({ technologies }) => {
  const categories = technologies.reduce((acc, tech) => {
    if (!acc[tech.category]) {
      acc[tech.category] = []
    }
    acc[tech.category].push(tech)
    return acc
  }, {} as Record<string, TechItem[]>)

  return (
    <section className={styles.techStack}>
      <div className={styles.content}>
        <h2 className={styles.title}>Technology Stack</h2>
        <div className={styles.categories}>
          {Object.entries(categories).map(([category, techs]) => (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <div className={styles.techGrid}>
                {techs.map((tech, index) => (
                  <div key={index} className={styles.techItem}>
                    <h4 className={styles.techName}>{tech.name}</h4>
                    {tech.description && (
                      <p className={styles.techDescription}>{tech.description}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectTechStack
