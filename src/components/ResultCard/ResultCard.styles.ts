import styled from 'styled-components';

import { ReactComponent as XIcon } from 'src/assets/icons/x.svg';
import { ReactComponent as TickIcon } from 'src/assets/icons/tick.svg';

interface ResultCardWrapperProps {
  isCorrect?: boolean;
}

export const ResultCardWrapper = styled.div<ResultCardWrapperProps>`
  height: 79px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
  padding: ${({ theme }) => theme.spacing(2.75)};
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 14px;
  background-color: ${({ theme, isCorrect }) =>
    isCorrect ? theme.palette.lightGrey : theme.palette.lightRose};
`;

export const IconContainer = styled.div`
  height: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledXIcon = styled(XIcon)`
  height: 15px;
  width: 15px;

  path {
    fill: ${({ theme }) => theme.palette.blue};
  }
`;

export const StyledTickIcon = styled(TickIcon)`
  height: 15px;
  width: 20px;
`;
