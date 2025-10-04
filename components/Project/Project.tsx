import React from 'react'
import ProjectHero from '../ProjectHero/ProjectHero'
import ProjectDescription from '../ProjectDescription/ProjectDescription'
import ProjectFeatures from '../ProjectFeatures/ProjectFeatures'
import ProjectTechStack from '../ProjectTechStack/ProjectTechStack'

interface Feature {
  title: string
  description: string
  icon?: string
}

interface TechItem {
  name: string
  category: string
  description?: string
}

interface ProjectData {
  title: string
  subtitle: string
  description: string
  imageUrl?: string
  content: string
  highlights?: string[]
  features?: Feature[]
  technologies?: TechItem[]
}

interface ProjectProps {
  data: ProjectData
}

const Project: React.FC<ProjectProps> = ({ data }) => {
  return (
    <>
      <ProjectHero
        title={data.title}
        subtitle={data.subtitle}
        description={data.description}
        imageUrl={data.imageUrl}
      />
      
      <ProjectDescription
        content={data.content}
        highlights={data.highlights}
      />
      
      {data.features && data.features.length > 0 && (
        <ProjectFeatures features={data.features} />
      )}
      
      {data.technologies && data.technologies.length > 0 && (
        <ProjectTechStack technologies={data.technologies} />
      )}
    </>
  )
}

export default Project

