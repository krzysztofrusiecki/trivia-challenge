import React from 'react';
import { fireEvent, screen } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import Input from './Input';

const setup = (label: React.ReactNode = null) => {
  const onChange = jest.fn();

  renderWithProviders(<Input value="122" label={label} onChange={onChange} />);

  const component = screen.getByTestId('input-test');
  const inputLabel = screen.queryByTestId('input-label-test');

  return { component, inputLabel, onChange };
};

describe('Input', () => {
  test('renders', () => {
    const { component, onChange } = setup();

    expect(component).toBeInTheDocument();

    fireEvent.change(component, { target: { value: '123' } });

    expect(onChange).toHaveBeenCalledWith('123');
  });

  test('renders with a label', () => {
    const { inputLabel } = setup('test label');

    expect(inputLabel).toBeInTheDocument();
  });

  test('renders without label', () => {
    const { inputLabel } = setup();

    expect(inputLabel).not.toBeInTheDocument();
  });
});
