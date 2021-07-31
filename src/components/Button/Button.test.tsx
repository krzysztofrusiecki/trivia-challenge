import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import Button from './Button';

const setup = () => {
  const onButtonClick = jest.fn();

  renderWithProviders(<Button onButtonClick={onButtonClick}>Click</Button>);

  const component = screen.getByText(/click/gi);

  return { component, onButtonClick };
};

describe('Button', () => {
  test('renders', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  test('clicks', () => {
    const { component, onButtonClick } = setup();

    fireEvent.click(component);

    expect(onButtonClick).toHaveBeenCalled();
  });
});
