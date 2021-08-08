/* eslint-disable no-param-reassign */
import axios from 'axios';
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import _get from 'lodash/get';

import config from 'src/config';
import { MainFormValues } from 'src/interfaces/Main';
import isAnswerCorrect from 'src/utils/isAnswerCorrect';
import { Answer, CorrectAnswer, Question } from 'src/interfaces/GameSlice';

interface InitialState {
  initialValues: MainFormValues;
  questions: {
    status: 'idle' | 'loading';
    data: Question[] | null;
    error: unknown;
  };
  quiz: {
    currentQuestion: Question;
    currentQuestionIndex: number;
    totalQuestions: number;
  };
  answers: Answer[];
}

const initialState: InitialState = {
  initialValues: {
    difficulty: 'easy',
    amount: '10',
  },
  questions: {
    status: 'idle',
    data: null,
    error: null,
  },
  quiz: {
    currentQuestion: {
      category: '',
      question: '',
      correctAnswer: CorrectAnswer.NONE,
    },
    currentQuestionIndex: 0,
    totalQuestions: 0,
  },
  answers: [],
};

export const fetchQuestions = createAsyncThunk(
  'game/fetchQuestions',
  async ({ amount, difficulty }: MainFormValues) => {
    const amountWithoutSpaces = amount.replace(/ /g, '');

    try {
      const response = await axios.get(
        `${config.apiBaseUrl}?amount=${amountWithoutSpaces}&difficulty=${difficulty}&type=boolean`,
      );
      return response.data;
    } catch (error) {
      return error;
    }
  },
);

export const gameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    saveInitialValues: (state, action: PayloadAction<MainFormValues>) => ({
      ...state,
      initialValues: action.payload,
    }),
    saveAnswer: (state, action: PayloadAction<boolean>) => {
      const questionIndex = state.quiz.currentQuestionIndex;

      const nextQuestion = _get(state, `questions.data.${questionIndex}`, {
        category: '',
        question: '',
        correctAnswer: CorrectAnswer.NONE,
      });

      return {
        ...state,
        answers: [
          ...state.answers,
          {
            question: state.quiz.currentQuestion.question,
            answer: action.payload,
            isAnswerCorrect: isAnswerCorrect(
              action.payload,
              state.quiz.currentQuestion.correctAnswer,
            ),
          },
        ],
        quiz: {
          ...state.quiz,
          currentQuestionIndex: questionIndex + 1,
          currentQuestion: nextQuestion,
        },
      };
    },
    stopCurrentGame: () => initialState,
    restartCurrentGame: (state) => ({
      ...initialState,
      initialValues: state.initialValues,
    }),
  },
  extraReducers: {
    [fetchQuestions.pending.type]: (state) => {
      state.questions = {
        status: 'loading',
        data: null,
        error: {},
      };
    },
    [fetchQuestions.fulfilled.type]: (state, action) => {
      const { results } = action.payload;

      state.questions = {
        status: 'idle',
        data: results,
        error: {},
      };

      state.quiz = {
        currentQuestion: {
          category: results[0].category,
          question: results[0].question,
          correctAnswer: results[0].correctAnswer,
        },
        currentQuestionIndex: 1,
        totalQuestions: action.payload.results.length,
      };
    },
    [fetchQuestions.rejected.type]: (state, action) => {
      state.questions = {
        status: 'idle',
        data: null,
        error: action.payload,
      };
    },
  },
});

export const {
  saveAnswer,
  stopCurrentGame,
  restartCurrentGame,
  saveInitialValues,
} = gameSlice.actions;

export default gameSlice.reducer;
