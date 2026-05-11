import Image from 'next/image'
import Link from 'next/link'
import styles from './Projects.module.scss'
import { projects } from './projectsData'

const Projects = () => {
  return (
    <div className={styles.grid}>
      {projects.map((project) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className={styles.card}
        >
          {project.imageUrl ? (
            <div className={styles.thumbnail}>
              <Image
                src={project.imageUrl}
                alt={project.title}
                width={600}
                height={340}
              />
            </div>
          ) : (
            <div className={styles.thumbnailPlaceholder} aria-hidden="true" />
          )}
          <div className={styles.cardBody}>
            <h2 className={styles.cardTitle}>{project.title}</h2>
            <p className={styles.cardSubtitle}>{project.subtitle}</p>
            <p className={styles.cardBlurb}>{project.blurb}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export default Projects
