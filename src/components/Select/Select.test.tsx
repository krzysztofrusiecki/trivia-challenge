import React from 'react';
import { fireEvent, screen, waitFor } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import Select from './Select';

const options = [
  { id: '', label: 'Select an option' },
  { id: '1', label: 'Option 1' },
  { id: '2', label: 'Option 2' },
];

const setup = (label: React.ReactNode = null) => {
  const onChange = jest.fn();

  renderWithProviders(
    <Select value="2" options={options} label={label} onChange={onChange} />,
  );

  const component = screen.getByTestId('select-test');
  const selectLabel = screen.queryByTestId('select-label-test');
  const selectValue = screen.getByTestId('select-value-test');
  const selectArrow = screen.getByTestId('select-arrow-test');
  const optionsWrapper = () => screen.queryByTestId('options-test');
  const option = (id: number) => screen.queryByTestId(`test-option-${id}`);

  return {
    component,
    selectLabel,
    selectValue,
    selectArrow,
    optionsWrapper,
    option,
    onChange,
  };
};

describe('Select', () => {
  test('renders', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  test('renders with a label', () => {
    const { selectLabel } = setup('Test label');

    expect(selectLabel).toBeInTheDocument();
  });

  test('renders without a label', () => {
    const { selectLabel } = setup();

    expect(selectLabel).not.toBeInTheDocument();
  });

  test('renders options wrapper and options inside', async () => {
    const { selectArrow, optionsWrapper, option, onChange } = setup();

    selectArrow.click();

    await waitFor(() => optionsWrapper());

    expect(optionsWrapper()).toBeInTheDocument();
    expect(option(1)).toBeInTheDocument();

    fireEvent.click(screen.getByText(/Option 1/));

    expect(onChange).toHaveBeenCalledTimes(1);
  });

  test('renders with value', () => {
    const { selectValue } = setup();

    expect(selectValue).toBeInTheDocument();
  });
});
