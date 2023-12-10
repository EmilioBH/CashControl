import { describe, test, expect } from 'vitest'
import { screen, render } from '@testing-library/vue'
import '@testing-library/jest-dom'
import MovementCard from '..'

describe('MovementCard', () => {
    test('renders properly', () => {
        render(MovementCard, {
            props: {
                title: 'hello world'
            }
        })

        expect(screen.getByText(/hello world/i)).toBeVisible()
    })
})