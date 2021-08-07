import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Select from './Select';
import { StorybookStyledLabel } from './Select.styles';

export default {
  title: 'components/Select',
  component: Select,
} as ComponentMeta<typeof Select>;

const defaultProps = {
  options: [
    { id: '', label: 'Select an option' },
    { id: '1', label: 'Option 1' },
    { id: '2', label: 'Option 2' },
  ],
  onChange: action('onChange'),
};

const Template: ComponentStory<typeof Select> = (args) => (
  <div style={{ background: '#4651C0', padding: '1rem' }}>
    <Select {...args} />
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
