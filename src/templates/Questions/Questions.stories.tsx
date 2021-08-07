import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Questions from './Questions';

export default {
  title: 'templates/Questions',
  component: Questions,
} as ComponentMeta<typeof Questions>;

const defaultProps = {
  result: {
    id: '1',
    category: 'Entertainment: Videogames',
    question:
      'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial',
    correctAnswer: false,
  },
  completedQuestions: 4,
  totalQuestions: 10,
  onCloseButtonClick: action('onCloseButtonClick'),
  onAnswerClick: action('onAnswerClick'),
};

const Template: ComponentStory<typeof Questions> = (args) => (
  <Questions {...args} />
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
