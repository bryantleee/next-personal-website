import type { PropsWithChildren } from 'react'
import Image from 'next/image'
import type { Project } from '../../data/projects'
import { SITE_NAME, SITE_URL } from '../../data/site'
import Seo from '../Seo/Seo'
import styles from '../../styles/Home.module.scss'
import projectStyles from '../../styles/ProjectPage.module.scss'

type ProjectPageProps = PropsWithChildren<{
  project: Project
}>

const ProjectPage = ({ project, children }: ProjectPageProps) => {
  const path = `/projects/${project.slug}`

  return (
    <>
      <Seo
        title={`${project.title} | ${SITE_NAME}`}
        description={project.description}
        path={path}
        image={project.image.src}
        imageAlt={project.image.alt}
        imageWidth={project.image.width}
        imageHeight={project.image.height}
        type="article"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'CreativeWork',
          name: project.title,
          description: project.description,
          image: `${SITE_URL}${project.image.src}`,
          author: { '@type': 'Person', name: SITE_NAME },
          url: `${SITE_URL}${path}`,
        }}
      />
      <main id="main-content" className={styles.main}>
        <div className={styles.projectsHeader}>
          <h1 className={styles.projectsTitle}>{project.title}</h1>
          <p className={styles.projectsSubtitle}>{project.subtitle}</p>
        </div>
        <div className={projectStyles.content}>
          <div className={projectStyles.hero}>
            <Image
              src={project.image.src}
              alt={project.image.alt}
              width={project.image.width}
              height={project.image.height}
              priority
              sizes={project.image.sizes}
              className={`${projectStyles.heroImage} ${
                project.image.narrow ? projectStyles.heroImageNarrow : ''
              }`}
            />
          </div>
          {children}
        </div>
      </main>
    </>
  )
}

export default ProjectPage
