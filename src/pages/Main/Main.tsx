import React from 'react';
import { MainFormValues } from 'src/interfaces/Main';

import MainTemplate from 'src/templates/Main';

import { Wrapper } from './Main.styles';

const Main: React.FC = () => {
  const onSubmit = (values: MainFormValues) => {
    console.log(values);
  };

  return (
    <Wrapper>
      <MainTemplate onSubmit={onSubmit} />
    </Wrapper>
  );
};

export default Main;
