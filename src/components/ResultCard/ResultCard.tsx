import React from 'react';

import theme from 'src/theme';
import Typography from 'src/components/Typography';
import { ResultCardProps } from 'src/interfaces/ResultCard';

import {
  ResultCardWrapper,
  IconContainer,
  StyledTickIcon,
  StyledXIcon,
} from './ResultCard.styles';

const ResultCard: React.FC<ResultCardProps> = ({ isCorrect, children }) => (
  <ResultCardWrapper data-testid="result-card" isCorrect={isCorrect}>
    <Typography fontSize={theme.fontSize.medium}>{children}</Typography>
    <IconContainer>
      {isCorrect ? <StyledTickIcon data-testid="tick-icon" /> : <StyledXIcon />}
    </IconContainer>
  </ResultCardWrapper>
);

export default ResultCard;
