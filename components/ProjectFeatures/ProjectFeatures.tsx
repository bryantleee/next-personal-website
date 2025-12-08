import React from 'react'

type Feature = {
  title: string
  description: string
  icon?: string
}

type Props = {
  features: Feature[]
}

const ProjectFeatures: React.FC<Props> = ({ features }) => {
  return (
    <section>
      <h3>Features</h3>
      <ul>
        {features.map((f) => (
          <li key={f.title}>
            <strong>{f.title}</strong>
            <p>{f.description}</p>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default ProjectFeatures




