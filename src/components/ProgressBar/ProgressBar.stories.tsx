import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ProgressBar from './ProgressBar';

export default {
  title: 'components/ProgressBar',
  component: ProgressBar,
} as ComponentMeta<typeof ProgressBar>;

const defaultProps = {
  filledNumber: 4,
  totalNumber: 10,
};

const Template: ComponentStory<typeof ProgressBar> = (args) => (
  <ProgressBar {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
