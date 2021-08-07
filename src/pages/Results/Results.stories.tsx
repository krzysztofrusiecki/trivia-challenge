import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Results from './Results';

export default {
  title: 'pages/Results',
  component: Results,
} as ComponentMeta<typeof Results>;

const defaultProps = {};

const Template: ComponentStory<typeof Results> = (args) => (
  <Results {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
