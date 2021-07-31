import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Stars from './Stars';

export default {
  title: 'components/Stars',
  component: Stars,
} as ComponentMeta<typeof Stars>;

const defaultProps = {
  filledNumber: 4,
  totalNumber: 10,
};

const Template: ComponentStory<typeof Stars> = (args) => <Stars {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
