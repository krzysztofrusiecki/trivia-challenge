import React from 'react';
import { Formik, Form } from 'formik';

import theme from 'src/theme';
import { MainProps } from 'src/interfaces/Main';
import { FontColor, FontWeight, TextAlign } from 'src/interfaces/Typography';
import Typography from 'src/components/Typography';
import Button from 'src/components/Button';
import Input from 'src/components/Input';
import Select from 'src/components/Select';
import formatNumericalValue from 'src/utils/formatNumericalValue';
import { ReactComponent as DifficultyIcon } from 'src/assets/icons/difficulty.svg';
import { ReactComponent as AmountIcon } from 'src/assets/icons/amount.svg';

import {
  Container,
  FormWrapper,
  IconContainer,
  MainHeader,
  MainWrapper,
  StyledLabel,
  StyledLogo,
} from './Main.styles';

const selectOptions = [
  {
    id: 'easy',
    label: 'Easy',
  },
  {
    id: 'hard',
    label: 'Hard',
  },
];

const Main: React.FC<MainProps> = ({ onSubmit }) => (
  <MainWrapper>
    <MainHeader>
      <Typography
        color={FontColor.WHITE}
        fontSize={theme.fontSize.huge}
        fontWeight={FontWeight.BOLD}
        textAlign={TextAlign.CENTER}
      >
        Welcome to the
      </Typography>
      <StyledLogo />
    </MainHeader>
    <Container>
      <Formik
        initialValues={{
          difficulty: 'easy',
          amount: '10',
        }}
        onSubmit={onSubmit}
      >
        {({ values, setFieldValue, handleSubmit }) => (
          <Form>
            <FormWrapper>
              <Select
                value={values.difficulty}
                options={selectOptions}
                label={
                  <StyledLabel>
                    <IconContainer>
                      <DifficultyIcon />
                    </IconContainer>
                    Difficulty
                  </StyledLabel>
                }
                onChange={(value) => setFieldValue('difficulty', value)}
              />
              <Input
                value={values.amount}
                label={
                  <StyledLabel>
                    <IconContainer>
                      <AmountIcon />
                    </IconContainer>
                    Amount
                  </StyledLabel>
                }
                onChange={(value) => {
                  setFieldValue('amount', formatNumericalValue(value));
                }}
              />
            </FormWrapper>
            <Button type="submit" onButtonClick={handleSubmit}>
              Start quiz
            </Button>
          </Form>
        )}
      </Formik>
    </Container>
  </MainWrapper>
);

export default Main;
