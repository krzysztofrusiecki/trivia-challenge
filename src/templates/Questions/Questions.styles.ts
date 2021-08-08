import styled from 'styled-components';

export const QuestionsWrapper = styled.div`
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
    background-color: ${({ theme }) => theme.palette.lightBlue};
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(4)};
`;

export const LevelWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(5)};
`;

export const ProgressWrapper = styled.div`
  width: 446px;
  margin-bottom: ${({ theme }) => theme.spacing(7.5)};
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PointsWrapper = styled.div`
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(3)};
`;

export const CorrectAnswers = styled.span`
  color: ${({ theme }) => theme.palette.rose};
  font-size: ${({ theme }) => theme.fontSize.large};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
`;

export const QuestionWrapper = styled.div`
  height: 154px;
  width: 100%;
  margin-bottom: ${({ theme }) => theme.spacing(9)};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonsWrapper = styled.div`
  width: 446px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
