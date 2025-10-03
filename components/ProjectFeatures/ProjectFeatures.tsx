import React from 'react'
import styles from './ProjectFeatures.module.scss'

interface Feature {
  title: string
  description: string
  icon?: string
}

interface ProjectFeaturesProps {
  features: Feature[]
}

const ProjectFeatures: React.FC<ProjectFeaturesProps> = ({ features }) => {
  return (
    <section className={styles.features}>
      <div className={styles.content}>
        <h2 className={styles.title}>Key Features</h2>
        <div className={styles.grid}>
          {features.map((feature, index) => (
            <div key={index} className={styles.feature}>
              <div className={styles.featureIcon}>
                {feature.icon ? (
                  <span className={styles.icon}>{feature.icon}</span>
                ) : (
                  <span className={styles.defaultIcon}>⚡</span>
                )}
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectFeatures
