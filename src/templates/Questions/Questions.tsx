import React from 'react';

import theme from 'src/theme';
import { ButtonVariant } from 'src/interfaces/Button';
import { FontWeight, TextAlign } from 'src/interfaces/Typography';
import { CloseButtonVariant } from 'src/interfaces/CloseButton';
import { QuestionsProps } from 'src/interfaces/Questions';
import Button from 'src/components/Button';
import CloseButton from 'src/components/CloseButton';
import Typography from 'src/components/Typography';
import ProgressBar from 'src/components/ProgressBar';

import {
  CloseButtonWrapper,
  Container,
  QuestionsWrapper,
  ButtonsWrapper,
  QuestionWrapper,
  ProgressWrapper,
  CorrectAnswers,
  PointsWrapper,
  TitleContainer,
  LevelWrapper,
} from './Questions.styles';

const Questions: React.FC<QuestionsProps> = ({
  category,
  question,
  completedQuestions,
  totalQuestions,
  onCloseButtonClick,
  onAnswerClick,
}) => (
  <QuestionsWrapper>
    <CloseButtonWrapper onClick={onCloseButtonClick}>
      <CloseButton
        variant={CloseButtonVariant.SECONDARY}
        onButtonClick={onCloseButtonClick}
      />
    </CloseButtonWrapper>
    <Container>
      <TitleContainer>
        <Typography
          fontWeight={FontWeight.BOLD}
          fontSize={theme.fontSize.massive}
          textAlign={TextAlign.CENTER}
          lineHeight="100px"
        >
          {category}
        </Typography>
      </TitleContainer>
      <LevelWrapper>
        <Typography
          fontSize={theme.fontSize.large}
          textAlign={TextAlign.CENTER}
          lineHeight="32px"
          letterSpacing={16}
        >
          level {completedQuestions}
        </Typography>
      </LevelWrapper>
      <ProgressWrapper>
        <PointsWrapper>
          <Typography fontWeight={FontWeight.BOLD}>
            <CorrectAnswers>{completedQuestions}</CorrectAnswers>/
            {totalQuestions}
          </Typography>
        </PointsWrapper>
        <ProgressBar
          filledNumber={completedQuestions}
          totalNumber={totalQuestions}
        />
      </ProgressWrapper>
      <QuestionWrapper>
        <Typography
          fontSize={theme.fontSize.great}
          textAlign={TextAlign.CENTER}
        >
          {question}
        </Typography>
      </QuestionWrapper>
      <ButtonsWrapper>
        <Button
          variant={ButtonVariant.SECONDARY}
          onButtonClick={() => onAnswerClick(true)}
        >
          True
        </Button>
        <Button
          variant={ButtonVariant.OUTLINED}
          onButtonClick={() => onAnswerClick(false)}
        >
          False
        </Button>
      </ButtonsWrapper>
    </Container>
  </QuestionsWrapper>
);

export default Questions;
