import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import MovementCard from '..'

describe('MovementCard', () => {
    test('renders properly', () => {
        render(MovementCard, {
            props: {
                id: 1,
                title: 'hello world',
                description: 'it is a wonderfull day',
                amount: '1000'
            }
        })

        expect(screen.getByText(/hello world/i)).toBeVisible()
        expect(screen.getByText(/it is a wonderfull day/i)).toBeVisible()
        expect(screen.getByText('1.000,00 €')).toBeVisible()
        expect(screen.getByTestId('trash-icon')).toBeVisible()
    })
})