import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import GlobalProvider from 'src/providers/GlobalProvider';

const renderWithProviders = (children: React.ReactNode): RenderResult =>
  render(<GlobalProvider>{children}</GlobalProvider>);

export default renderWithProviders;
