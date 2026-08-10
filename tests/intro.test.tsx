import { render, screen } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import Intro from '../components/Intro/Intro'

describe('Intro', () => {
  it('uses one page heading and paragraphs for supporting copy', () => {
    const { container } = render(<Intro />)

    expect(
      screen.getByRole('heading', {
        level: 1,
        name: 'Hello! My name is Bryant Lee.',
      }),
    ).toBeInTheDocument()
    expect(container.querySelectorAll('p')).toHaveLength(3)
    expect(container.querySelector('h2, h3')).not.toBeInTheDocument()
  })
})
