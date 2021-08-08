export interface Result {
  question: string;
  answer: boolean;
  isAnswerCorrect: boolean;
}

export interface ResultsProps {
  results: Result[];
  onPlayAgainClick: () => void;
  onCloseButtonClick: () => void;
}
