import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { RootState } from 'src/store';
import { fetchQuestions, saveInitialValues } from 'src/slices/gameSlice';
import { MainFormValues } from 'src/interfaces/Main';
import MainTemplate from 'src/templates/Main';

import { Wrapper } from './Main.styles';

const Main: React.FC = () => {
  const questions = useSelector((state: RootState) => state.game.questions);
  const dispatch = useDispatch();
  const history = useHistory();

  const onSubmit = (values: MainFormValues) => {
    dispatch(saveInitialValues(values));
    dispatch(fetchQuestions(values));
  };

  useEffect(() => {
    if (questions.data) {
      history.push('/questions');
    }
  }, [history, questions.data]);

  return (
    <Wrapper>
      <MainTemplate onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default Main;
