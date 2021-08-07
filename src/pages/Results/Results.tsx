import React from 'react';

import ResultsTemplate from 'src/templates/Results';

import { Wrapper } from './Results.styles';

const Results: React.FC = () => {
  const onCloseButtonClick = () => {
    console.log('clicked close button');
  };

  const onPlayAgainClick = () => {
    console.log('clicked play again button');
  };

  const results = [
    {
      id: '1',
      question:
        'Switzerland has four national languages, English being one of them.',
      category: 'Language',
      correctAnswer: true,
      userAnswer: true,
    },
    {
      id: '2',
      question:
        'Switzerland has four national languages, English being one of them.',
      category: 'Language',
      correctAnswer: false,
      userAnswer: true,
    },
    {
      id: '3',
      question:
        'Switzerland has four national languages, English being one of them.',
      category: 'Language',
      correctAnswer: true,
      userAnswer: true,
    },
  ];

  return (
    <Wrapper>
      <ResultsTemplate
        results={results}
        onPlayAgainClick={onPlayAgainClick}
        onCloseButtonClick={onCloseButtonClick}
      />
    </Wrapper>
  );
};

export default Results;
