// @vitest-environment jsdom
import { describe, it, expect, beforeEach } from 'vitest'
import { screen, render } from '@testing-library/react'
import App from '../client/components/App.tsx'
import images from '../client/data/images.ts'

describe('Test', () => {
  beforeEach(() => {
    render(<App />)
  })

  it('Should render a heading', () => {
    expect(screen.getByRole('heading', { level: 1 }))
      .toHaveTextContent('Live it, Laugh it, Love it')
  })

  it('The quote should initially be Live Laugh Love', () => {
    expect(screen.getByRole('heading', {level:3}))
      .toHaveTextContent('Live, Laugh, Love')
  })

  it('Should initially render a salad image', () => {
    expect(screen.getByRole('img').src).toBe(images[17])
  })

})