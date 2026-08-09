import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './Projects.module.scss'
import { projects } from './projectsData'

const Thumbnail = ({
  src,
  alt,
  eager,
}: {
  src: string
  alt: string
  eager: boolean
}) => {
  const [loaded, setLoaded] = useState(false)
  return (
    <div className={`${styles.thumbnail} ${loaded ? styles.loaded : ''}`}>
      <Image
        src={src}
        alt={alt}
        width={600}
        height={340}
        loading={eager ? 'eager' : 'lazy'}
        onLoad={() => setLoaded(true)}
      />
    </div>
  )
}

const Projects = () => {
  return (
    <div className={styles.grid}>
      {projects.map((project, index) => (
        <Link
          key={project.slug}
          href={`/projects/${project.slug}`}
          className={styles.card}
        >
          {project.imageUrl ? (
            <Thumbnail
              src={project.imageUrl}
              alt={project.title}
              eager={index < 2}
            />
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
