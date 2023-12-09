import {describe, expect, test} from 'vitest'
import { screen, render} from '@testing-library/vue'
import '@testing-library/jest-dom'
import HelloWorld from '..'

describe('basic test', () => {
    test('rendes title', () => {
        render(HelloWorld)

        expect(screen.getByText(/HelloWorld!/i)).toBeVisible()
    })
})