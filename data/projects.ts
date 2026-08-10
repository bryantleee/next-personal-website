import projectData from './projects.json'

export interface ProjectImage {
  src: string
  alt: string
  width: number
  height: number
  sizes: string
  narrow?: boolean
}

export interface Project {
  slug: string
  title: string
  subtitle: string
  blurb: string
  description: string
  image: ProjectImage
}

export const projects: Project[] = projectData

export const getProject = (slug: string): Project => {
  const project = projects.find((candidate) => candidate.slug === slug)

  if (!project) {
    throw new Error(`Unknown project: ${slug}`)
  }

  return project
}
