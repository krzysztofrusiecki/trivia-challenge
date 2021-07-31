import React from 'react';
import { Story } from '@storybook/react';
import styled from 'styled-components';

import GlobalProvider from '../src/providers/GlobalProvider';

const Wrapper = styled.div`
  margin: 2em;
  outline: 1px dashed #ccc;
`;

const Component: React.FC = ({ children }) => (
  <GlobalProvider>
    <Wrapper>{children}</Wrapper>
  </GlobalProvider>
);

const Layout: React.FC<Story> = (Story) => (
  <Component>
    <Story />
  </Component>
);

export default Layout;
