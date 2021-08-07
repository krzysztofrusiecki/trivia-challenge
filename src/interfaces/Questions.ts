import { Result } from './Results';

export interface QuestionsProps {
  result: Result;
  completedQuestions: number;
  totalQuestions: number;
  onCloseButtonClick: () => void;
  onAnswerClick: (answer: boolean) => void;
}
