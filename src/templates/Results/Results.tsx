import React from 'react';
import _map from 'lodash/map';
import _reduce from 'lodash/reduce';

import { FontColor, FontWeight } from 'src/interfaces/Typography';
import { ResultsProps } from 'src/interfaces/Results';
import Button from 'src/components/Button';
import ResultCard from 'src/components/ResultCard';
import Stars from 'src/components/Stars';
import Typography from 'src/components/Typography';
import CloseButton from 'src/components/CloseButton';
import { ReactComponent as PersonIcon } from 'src/assets/icons/person.svg';

import {
  Container,
  ResultsContainer,
  ResultsHeader,
  PointsWrapper,
  ResultsWrapper,
  ImageWrapper,
  CorrectAnswers,
  CloseButtonWrapper,
  ButtonWrapper,
} from './Results.styles';

const Results: React.FC<ResultsProps> = ({
  results,
  onPlayAgainClick,
  onCloseButtonClick,
}) => {
  const correctAnswersNumber = _reduce(
    results,
    (acc, result) => (result.isAnswerCorrect ? acc + 1 : acc),
    0,
  );

  return (
    <ResultsWrapper>
      <CloseButtonWrapper onClick={onCloseButtonClick}>
        <CloseButton onButtonClick={onCloseButtonClick} />
      </CloseButtonWrapper>
      <Container>
        <ResultsHeader>
          <PointsWrapper>
            <ImageWrapper>
              <PersonIcon />
            </ImageWrapper>
            <Typography color={FontColor.WHITE} fontWeight={FontWeight.BOLD}>
              You scored <CorrectAnswers>{correctAnswersNumber}</CorrectAnswers>
              /{results.length}
            </Typography>
          </PointsWrapper>
          <Stars
            filledNumber={correctAnswersNumber}
            totalNumber={results.length}
          />
        </ResultsHeader>
        <ResultsContainer>
          {_map(results, (result) => (
            <ResultCard
              key={result.question}
              isCorrect={result.isAnswerCorrect}
            >
              {result.question}
            </ResultCard>
          ))}
        </ResultsContainer>
        <ButtonWrapper>
          <Button onButtonClick={onPlayAgainClick}>Play again</Button>
        </ButtonWrapper>
      </Container>
    </ResultsWrapper>
  );
};

export default Results;
