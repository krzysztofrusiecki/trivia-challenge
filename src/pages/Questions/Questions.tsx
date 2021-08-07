import React from 'react';

import QuestionsTemplate from 'src/templates/Questions';

import { Wrapper } from './Questions.styles';

const Questions: React.FC = () => {
  const onCloseButtonClick = () => {
    console.log('clicked close button');
  };

  const onAnswerClick = (answer: boolean) => {
    console.log('clicked answer', answer);
  };

  const completedQuestions = 4;

  const totalQuestions = 4;

  const result = {
    id: '1',
    category: 'Entertainment: Videogames',
    question:
      'The retail disc of Tony Hawk’s Pro Skater 5 only comes with the tutorial',
    correctAnswer: false,
  };

  return (
    <Wrapper>
      <QuestionsTemplate
        result={result}
        completedQuestions={completedQuestions}
        totalQuestions={totalQuestions}
        onAnswerClick={onAnswerClick}
        onCloseButtonClick={onCloseButtonClick}
      />
    </Wrapper>
  );
};

export default Questions;
