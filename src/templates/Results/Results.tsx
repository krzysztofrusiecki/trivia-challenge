import React, { useState, useEffect } from 'react';
import _map from 'lodash/map';
import _reduce from 'lodash/reduce';

import theme from 'src/theme';
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
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

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
            <Typography
              fontSize={
                theme.fontSize[
                  width && width > theme.breakpoints.small
                    ? 'regular'
                    : 'medium'
                ]
              }
              color={FontColor.WHITE}
              fontWeight={FontWeight.BOLD}
            >
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
              question={result.question}
              isCorrect={result.isAnswerCorrect}
            />
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
