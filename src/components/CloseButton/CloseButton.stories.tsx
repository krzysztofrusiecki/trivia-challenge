import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import CloseButton from './CloseButton';

export default {
  title: 'components/CloseButton',
  component: CloseButton,
} as ComponentMeta<typeof CloseButton>;

const defaultProps = {};

const Template: ComponentStory<typeof CloseButton> = (args) => (
  <CloseButton {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
