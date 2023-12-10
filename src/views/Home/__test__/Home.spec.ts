import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Home from '..'

describe('Home view tests', () => {
    test('renders properly', () => {
        render(Home)

        expect(screen.getByTestId('header-component')).toBeInTheDocument()
        expect(screen.getByTestId('resume-component')).toBeInTheDocument()
        expect(screen.getByTestId('movements-component')).toBeInTheDocument()
    })
})