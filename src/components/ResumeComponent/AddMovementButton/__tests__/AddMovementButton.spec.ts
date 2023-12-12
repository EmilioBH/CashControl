import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import AddMovementButton from '..'

describe('AddMovementButton', () => {
  test('renders properly', () => {
    render(AddMovementButton, {
      global: {
        stubs: {
          Teleport: true
        }
      }
    })

    expect(screen.getByRole('button', { name: /add movement/i }))
  })
})