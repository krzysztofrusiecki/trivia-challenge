import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Results from './Results';

export default {
  title: 'templates/Results',
  component: Results,
} as ComponentMeta<typeof Results>;

const defaultProps = {
  results: [
    {
      question:
        'Switzerland has four national languages, English being one of them.',
      answer: true,
      isAnswerCorrect: true,
    },
    {
      question:
        'Switzerland has four national languages, English being one of them.',
      answer: true,
      isAnswerCorrect: false,
    },
    {
      question:
        'Switzerland has four national languages, English being one of them.',
      answer: true,
      isAnswerCorrect: true,
    },
  ],
  onPlayAgainClick: action('onPlayAgainClick'),
  onCloseButtonClick: action('onCloseButtonClick'),
};

const Template: ComponentStory<typeof Results> = (args) => (
  <div style={{ background: '#4651C0', padding: '1rem' }}>
    <Results {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  ...defaultProps,
};
