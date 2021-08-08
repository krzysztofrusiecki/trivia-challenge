export interface QuestionsProps {
  category: string;
  question: string;
  completedQuestions: number;
  totalQuestions: number;
  onCloseButtonClick: () => void;
  onAnswerClick: (answer: boolean) => void;
}
