import React from 'react'

type Props = {
  content: string
  highlights?: string[]
}

const ProjectDescription: React.FC<Props> = ({ content, highlights }) => {
  return (
    <section>
      <p>{content}</p>
      {highlights && highlights.length > 0 && (
        <ul>
          {highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default ProjectDescription




