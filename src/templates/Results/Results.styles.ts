import styled from 'styled-components';

export const ResultsWrapper = styled.div`
  width: 1040px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
`;

export const Container = styled.div`
  width: 620px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ResultsHeader = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(7)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PointsWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(3.5)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CorrectAnswers = styled.span`
  color: ${({ theme }) => theme.palette.rose};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const ImageWrapper = styled.div`
  height: 52px;
  width: 52px;
  margin-right: ${({ theme }) => theme.spacing(2.5)};
  border-radius: 50%;
  overflow: hidden;
  background-color: ${({ theme }) => theme.palette.white};
`;

export const ResultsContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(7.5)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CloseButtonWrapper = styled.div`
  height: 40px;
  width: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  border-radius: 10px;
  transition: background-color 0.2s linear;

  &:hover {
    background-color: ${({ theme }) => theme.palette.blueHover};
  }
`;

export const ButtonWrapper = styled.div`
  width: 446px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
