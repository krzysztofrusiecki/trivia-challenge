import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Questions from './Questions';

export default {
  title: 'pages/Questions',
  component: Questions,
} as ComponentMeta<typeof Questions>;

const defaultProps = {};

const Template: ComponentStory<typeof Questions> = (args) => (
  <Questions {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
