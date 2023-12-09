import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Home from '..'

describe('Home view tests', () => {
    test('renders properly', () => {
        render(Home)

        expect(screen.getByText(/hello world!/i)).toBeVisible()
    })
})