export enum CorrectAnswer {
  TRUE = 'True',
  FALSE = 'False',
  NONE = '',
}

export interface Question {
  category: string;
  question: string;
  correctAnswer: CorrectAnswer;
}

export interface Answer {
  question: string;
  answer: boolean;
  isAnswerCorrect: boolean;
}
