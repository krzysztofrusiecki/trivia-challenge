import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from 'src/store';
import { saveAnswer, stopCurrentGame } from 'src/slices/gameSlice';
import QuestionsTemplate from 'src/templates/Questions';

import { Wrapper } from './Questions.styles';

const Questions: React.FC = () => {
  const quiz = useSelector((state: RootState) => state.game.quiz);
  const dispatch = useDispatch();
  const history = useHistory();

  const onCloseButtonClick = () => {
    dispatch(stopCurrentGame());
    history.push('/');
  };

  const onAnswerClick = (answer: boolean) => {
    dispatch(saveAnswer(answer));
  };

  useEffect(() => {
    if (quiz.currentQuestionIndex > quiz.totalQuestions) {
      history.push('/results');
    }
  }, [history, quiz.currentQuestionIndex, quiz.totalQuestions]);

  return (
    <Wrapper>
      <QuestionsTemplate
        category={quiz.currentQuestion.category}
        question={quiz.currentQuestion.question}
        completedQuestions={quiz.currentQuestionIndex}
        totalQuestions={quiz.totalQuestions}
        onAnswerClick={onAnswerClick}
        onCloseButtonClick={onCloseButtonClick}
      />
    </Wrapper>
  );
};

export default Questions;
