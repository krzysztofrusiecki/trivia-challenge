import React from 'react';
import { screen } from '@testing-library/react';

import renderWithProviders from 'src/utils/renderWithProviders';

import ProgressBar from './ProgressBar';

const setup = () => {
  renderWithProviders(<ProgressBar filledNumber={0} totalNumber={10} />);

  const component = screen.getByTestId('progress-bar');
  const filled = screen.queryByTestId('filled-progress-bar');

  return { component, filled };
};

describe('ProgressBar', () => {
  test('renders', () => {
    const { component } = setup();

    expect(component).toBeInTheDocument();
  });

  test('renders empty progress bar', () => {
    const { filled } = setup();

    expect(filled).not.toBeInTheDocument();
  });
});
