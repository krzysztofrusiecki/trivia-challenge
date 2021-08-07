import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Main from './Main';

export default {
  title: 'pages/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const defaultProps = {};

const Template: ComponentStory<typeof Main> = (args) => <Main {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
