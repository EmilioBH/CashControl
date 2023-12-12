import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import HomeView from '../home-view.vue'

describe('Home view tests', () => {
    test('renders properly', () => {
        render(HomeView, {
            global: {
                stubs: {
                    Teleport: true
                }
            }
        })

        expect(screen.getByTestId('header-component')).toBeInTheDocument()
        expect(screen.getByTestId('resume-component')).toBeInTheDocument()
        expect(screen.getByTestId('movements-component')).toBeInTheDocument()
    })
})