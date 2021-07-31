import styled from 'styled-components';

interface FilledProgressBarProps {
  width: string;
}

export const WholeProgressBar = styled.div`
  width: 100%;
  height: 5px;
  border-radius: 5px;
  background-color: ${({ theme }) => theme.palette.blueishGrey};
`;

export const FilledProgressBar = styled.div<FilledProgressBarProps>`
  height: 5px;
  border-radius: 5px;
  width: ${({ width }) => width};
  background-color: ${({ theme }) => theme.palette.rose};
  transition: width 0.2s linear;
`;
