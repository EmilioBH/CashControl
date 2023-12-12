import { describe, test, expect } from 'vitest'
import { fireEvent, render, screen } from '@testing-library/vue'
import '@testing-library/jest-dom'
import NewMovementModal from '..'

describe('NewMovementModal', () => {
    test('renders properly', () => {
        render(NewMovementModal)

        expect(screen.getByText(/New Movement/i)).toBeVisible()
    })

    test('can recive text on Title', async() => {
        render(NewMovementModal)

        const inputTitle = screen.getByLabelText('Title') as HTMLInputElement
        await fireEvent.update(inputTitle, 'new movement')
        expect(inputTitle.value).toBe('new movement')

        const inputAmount = screen.getByLabelText('Amount') as HTMLInputElement
        await fireEvent.update(inputAmount, '100')
        expect(inputAmount.value).toBe('100')
    })

    test('emits an event when click close button', async() => {
        const { emitted } = render(NewMovementModal)
        
        const closeButton = screen.getByTestId('close-btn')
        await fireEvent.click(closeButton)

        expect(emitted()).toHaveProperty('closeModal')
    })

    test('emits an event when click send form button', async() => {
        const { emitted } = render(NewMovementModal)

        const inputTitle = screen.getByLabelText('Title') as HTMLInputElement
        await fireEvent.update(inputTitle, 'Test Title')

        const inputAmount = screen.getByLabelText('Amount') as HTMLInputElement
        await fireEvent.update(inputAmount, '100')

        const form = screen.getByTestId('form')
        await fireEvent.submit(form)

        expect(emitted()).toHaveProperty('closeModal')
    })
})