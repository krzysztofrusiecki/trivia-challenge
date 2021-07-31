import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Typography from './Typography';

export default {
  title: 'components/Typography',
  component: Typography,
} as ComponentMeta<typeof Typography>;

const defaultProps = {
  children: 'It is test text!',
};

const Template: ComponentStory<typeof Typography> = (args) => (
  <Typography {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
