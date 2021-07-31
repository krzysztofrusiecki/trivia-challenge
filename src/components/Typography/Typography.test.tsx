import React from 'react';
import { screen } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import Typography from './Typography';

const setup = () => {
  renderWithProviders(<Typography>Typography Test</Typography>);

  const component = screen.getByText(/typography test/gi);

  return {
    component,
  };
};

describe('Typography', () => {
  test('renders', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });
});
