import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Input from './Input';
import { StorybookStyledLabel } from './Input.styles';

export default {
  title: 'components/Input',
  component: Input,
} as ComponentMeta<typeof Input>;

const defaultProps = {
  value: '',
  label: 'Amount',
  onChange: action('onChange'),
};

const Template: ComponentStory<typeof Input> = (args) => (
  <div style={{ background: '#0000ff', padding: '1rem' }}>
    <Input {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};

export const WithStyledLabel = Template.bind({});
WithStyledLabel.args = {
  ...defaultProps,
  label: <StorybookStyledLabel>Amount</StorybookStyledLabel>,
};
