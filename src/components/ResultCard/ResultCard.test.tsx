import React from 'react';
import { screen } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import ResultCard from './ResultCard';

const setup = () => {
  renderWithProviders(
    <ResultCard isCorrect>
      The fourth funnel of the RMS Titanic was fake designed to make the ship
      look more powerful and symmetrical.
    </ResultCard>,
  );

  const component = screen.getByTestId('result-card');
  const tickIcon = screen.queryByTestId('tick-icon');

  return { component, tickIcon };
};

describe('ResultCard', () => {
  test('renders', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  test('renders a tick icon when the result is correct', () => {
    const { tickIcon } = setup();

    expect(tickIcon).toBeInTheDocument();
  });
});
