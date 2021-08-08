import { CorrectAnswer } from 'src/interfaces/GameSlice';

const isAnswerCorrect = (
  userAnswer: boolean,
  correctAnswer: CorrectAnswer,
): boolean => {
  const parsedCorrectAnswer = correctAnswer === CorrectAnswer.TRUE;

  return userAnswer === parsedCorrectAnswer;
};

export default isAnswerCorrect;
