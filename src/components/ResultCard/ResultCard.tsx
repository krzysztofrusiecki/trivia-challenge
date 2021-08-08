/* eslint-disable react/no-danger */
import React, { useState, useEffect } from 'react';

import theme from 'src/theme';
import Typography from 'src/components/Typography';
import { ResultCardProps } from 'src/interfaces/ResultCard';

import {
  ResultCardWrapper,
  IconContainer,
  StyledTickIcon,
  StyledXIcon,
} from './ResultCard.styles';

const ResultCard: React.FC<ResultCardProps> = ({ isCorrect, question }) => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return (
    <ResultCardWrapper data-testid="result-card" isCorrect={isCorrect}>
      <Typography
        fontSize={
          theme.fontSize[
            width && width > theme.breakpoints.small ? 'medium' : 'tiny'
          ]
        }
      >
        <div dangerouslySetInnerHTML={{ __html: question }} />
      </Typography>
      <IconContainer>
        {isCorrect ? (
          <StyledTickIcon data-testid="tick-icon" />
        ) : (
          <StyledXIcon />
        )}
      </IconContainer>
    </ResultCardWrapper>
  );
};

export default ResultCard;
