export interface Result {
  id: string;
  question: string;
  category: string;
  correctAnswer: boolean;
  userAnswer?: boolean;
}

export interface ResultsProps {
  results: Result[];
  correctAnswers: number;
  onPlayAgainClick: () => void;
  onCloseButtonClick: () => void;
}
