import React from 'react'
import styles from './ProjectDescription.module.scss'

interface ProjectDescriptionProps {
  content: string
  highlights?: string[]
}

const ProjectDescription: React.FC<ProjectDescriptionProps> = ({ 
  content, 
  highlights 
}) => {
  return (
    <section className={styles.description}>
      <div className={styles.content}>
        <h2 className={styles.title}>About This Project</h2>
        <div className={styles.text}>
          {content.split('\n').map((paragraph, index) => (
            <p key={index} className={styles.paragraph}>
              {paragraph}
            </p>
          ))}
        </div>
        {highlights && highlights.length > 0 && (
          <div className={styles.highlights}>
            <h3 className={styles.highlightsTitle}>Key Highlights</h3>
            <ul className={styles.highlightsList}>
              {highlights.map((highlight, index) => (
                <li key={index} className={styles.highlightItem}>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}

export default ProjectDescription
