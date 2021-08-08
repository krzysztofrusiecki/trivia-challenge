import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from 'src/store';
import {
  stopCurrentGame,
  fetchQuestions,
  restartCurrentGame,
} from 'src/slices/gameSlice';
import ResultsTemplate from 'src/templates/Results';

import { Wrapper } from './Results.styles';

const Results: React.FC = () => {
  const answers = useSelector((state: RootState) => state.game.answers);
  const questions = useSelector((state: RootState) => state.game.questions);
  const initialValues = useSelector(
    (state: RootState) => state.game.initialValues,
  );
  const dispatch = useDispatch();
  const history = useHistory();

  const onCloseButtonClick = () => {
    dispatch(stopCurrentGame());
    history.push('/');
  };

  const onPlayAgainClick = () => {
    dispatch(restartCurrentGame());
    dispatch(fetchQuestions(initialValues));

    if (questions.data) {
      history.push('/questions');
    }
  };

  return (
    <Wrapper>
      <ResultsTemplate
        results={answers}
        onPlayAgainClick={onPlayAgainClick}
        onCloseButtonClick={onCloseButtonClick}
      />
    </Wrapper>
  );
};

export default Results;
