import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import Resume from '..'

describe('Resume Component', () => {
    test('renders properly', () => {
        render(Resume, {
            props: {
                amount: '1000'
            },
            global: {
                stubs: {
                    Teleport: true
                }
            }
        })

        expect(screen.getByText(/ahorro total/i)).toBeVisible()
        expect(screen.getByText('1.000,00 €')).toBeVisible()
    })
})