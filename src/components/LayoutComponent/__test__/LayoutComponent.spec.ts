import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import LayoutComponent from '..'

describe('Layout Component', () => {
  test('slots render content properly', () => {
    const headerSlot = 'I am the header'
    const resumeSlot = 'I am the resume'
    const movementsSlot = 'I am the movements'
    render(LayoutComponent, {
      slots: {
        header: headerSlot,
        resume: resumeSlot,
        movements: movementsSlot
      }
    })

    expect(screen.getByText(/i am the header/i)).toBeInTheDocument()
    expect(screen.getByText(/i am the resume/i)).toBeInTheDocument()
    expect(screen.getByText(/i am the movements/i)).toBeInTheDocument()
  })
})