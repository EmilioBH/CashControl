import { describe, test, expect } from 'vitest';
import { render, screen } from '@testing-library/vue';
import '@testing-library/jest-dom';
import MovementsGraph from '..';

describe('MovementsGraph', () => {
  test('renders SVG graph properly', () => {
    render(MovementsGraph, {
      props: {
        amounts: [100, 300, 100],
      },
    });

    expect(screen.getByTestId('svg-graph')).toBeInTheDocument();
  });

  test('renders de lines in the graph', () => {
    render(MovementsGraph, {
      props: {
        amounts: [100, 300, 100],
      },
    });

    expect(screen.getByTestId('svg-line')).toBeInTheDocument();
    expect(screen.getByTestId('svg-polyline')).toBeInTheDocument();
  });
});
