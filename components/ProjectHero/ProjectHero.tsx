import React from 'react'
import Image from 'next/image'

type Props = {
  title: string
  subtitle: string
  description: string
  imageUrl?: string
}

const ProjectHero: React.FC<Props> = ({ title, subtitle, description, imageUrl }) => {
  return (
    <section>
      {imageUrl ? (
        <Image src={imageUrl} alt={title} width={800} height={400} style={{ maxWidth: '100%', borderRadius: 8 }} />
      ) : null}
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <p>{description}</p>
    </section>
  )
}

export default ProjectHero





