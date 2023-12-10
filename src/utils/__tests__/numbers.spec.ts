import { describe, test, expect } from 'vitest'
import '@testing-library/jest-dom'
import { formatCurrency } from '../number'

describe('Numbers utils', () => {
    describe('formatCurrency', () => {
        test('formats given stringified number with spanish locale and euro sign', () => {
          const amount = formatCurrency('3.54665')
          expect(amount).toBe('3,55 €')
        })
    
        test('formats given number with spanish locale and euro sign', () => {
          const amount = formatCurrency(3.54665)
          expect(amount).toBe('3,55 €')
        })
      })
})