import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import HeaderComponent from '..'

describe('HeaderComponent', () => {
    test('renders properly', () => {
        render(HeaderComponent)

        expect(screen.getByTestId('brand-logo')).toBeVisible()
        expect(screen.getByText(/cash/i)).toBeVisible()
        expect(screen.getByText(/control/i)).toBeVisible()
    })
})