import React from 'react';
import { screen } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import Stars from './Stars';

const setup = () => {
  renderWithProviders(<Stars filledNumber={5} totalNumber={5} />);

  const component = screen.getByTestId('stars');
  const star = (id: number) => screen.queryByTestId(`star-${id}`);

  return { component, star };
};

describe('Stars', () => {
  test('renders', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  test('renders correct number of stars', () => {
    const { star } = setup();

    const fifthStar = star(5);

    expect(fifthStar).toBeInTheDocument();
  });

  test('not renders not existing star', () => {
    const { star } = setup();

    const sixthStar = star(6);

    expect(sixthStar).not.toBeInTheDocument();
  });
});
