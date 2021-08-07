import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Main from './Main';

export default {
  title: 'templates/Main',
  component: Main,
} as ComponentMeta<typeof Main>;

const defaultProps = {
  onSubmit: action('onSubmit'),
};

const Template: ComponentStory<typeof Main> = (args) => (
  <div style={{ background: '#4651C0', padding: '1rem' }}>
    <Main {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
