import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import CloseButton from './CloseButton';

const setup = () => {
  const onButtonClick = jest.fn();

  renderWithProviders(<CloseButton onButtonClick={onButtonClick} />);

  const component = screen.getByTestId('close-button');

  return { component, onButtonClick };
};

describe('CloseButton', () => {
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
