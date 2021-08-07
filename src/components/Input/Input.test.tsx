import React from 'react';
import { screen } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import Input from './Input';

const setup = () => {
  renderWithProviders(<Input name="test-input" label="Test label" />);

  const component = screen.getByTestId('input-test');
  const label = screen.getByTestId('input-label-test');

  return { component, label };
};

describe('Input', () => {
  test('renders', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  test('renders with a label', () => {
    const { label } = setup();

    expect(label).toBeInTheDocument();
  });
});
