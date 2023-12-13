import { describe, test, expect } from 'vitest';
import { screen, render } from '@testing-library/vue';
import '@testing-library/jest-dom';
import MovementsComponent from '..';

describe('Movements Component', () => {
  test('renders properly', () => {
    render(MovementsComponent);

    expect(screen.getByText(/movement historical/i)).toBeVisible();
  });
});
