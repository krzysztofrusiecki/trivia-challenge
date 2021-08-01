import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import ResultCard from './ResultCard';

export default {
  title: 'components/ResultCard',
  component: ResultCard,
} as ComponentMeta<typeof ResultCard>;

const defaultProps = {
  children:
    'The fourth funnel of the RMS Titanic was fake designed to make the ship look more powerful and symmetrical.',
};

const Template: ComponentStory<typeof ResultCard> = (args) => (
  <ResultCard {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
