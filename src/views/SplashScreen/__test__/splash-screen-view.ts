import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import SplashScreen from '..'

describe('SplashScreen', () => {
    test('renders properly', () => {
        render(SplashScreen)

        expect(screen.getByTestId('splash-icon')).toBeVisible()
        expect(screen.getByText(/cash/i)).toBeVisible()
        expect(screen.getByText(/control/i)).toBeVisible()
    })
})