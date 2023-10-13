import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import useSound from 'use-sound';
import { useParams } from 'next/navigation';

import { random } from '@/utils';
import { CategoryId, Quiz, data } from '@/data';
import { quizAtom, quizInitializeSelector } from '@/atoms';

import correctSfx from '@/sounds/correct.mp3';
import incorrectSfx from '@/sounds/incorrect.mp3';

const getQuiz = (c: CategoryId): Quiz[] | [] => {
  const target = data.find(({ category }) => category === c);
  return target?.quiz || [];
};

const getStepLength = (quiz: Quiz[]): number => quiz.length;

const createQuiz = (quiz: Quiz[], range: number): Quiz[] => {
  return random(quiz, range);
};

const setAnswer = (quiz: Quiz[], answer: number, current: number) =>
  quiz.map((d, i) => {
    return i === current ? { ...d, answer } : d;
  });

const setJudge = (quiz: Quiz[]) =>
  quiz.map((d) => {
    if (!d.answer || 'isCorrect' in d) return d;
    return {
      ...d,
      options: d.options.map((o) => ({
        ...o,
        isCorrect: d.correct === o.value,
        isIncorrect: d.answer !== d.correct && o.value === d.answer,
      })),
    };
  });

export const useQuiz = () => {
  const { category } = useParams();
  const [playCorrectSfx] = useSound(correctSfx, { volume: 0.5 });
  const [playIncorrectSfx] = useSound(incorrectSfx, { volume: 0.5 });
  const quizOrig = getQuiz(category as CategoryId);
  const length = getStepLength(quizOrig);
  const initializeQuiz = useSetRecoilState(quizInitializeSelector);
  const [quiz, setQuiz] = useRecoilState(quizAtom);
  const reply = (answer: number, current: number) => {
    const quizWithAnser = setAnswer(quiz, answer, current);
    setQuiz(setJudge(quizWithAnser));

    const currentQuiz = quizWithAnser[current];
    currentQuiz.answer === currentQuiz.correct
      ? playCorrectSfx()
      : playIncorrectSfx();
  };

  useEffect(() => {
    initializeQuiz(createQuiz(quizOrig, length));
    console.info('initialized', quiz);
  }, []);

  return { length, setAnswer: reply };
};

export const useStep = () => {
  const [current, setCurrent] = useState(0);
  const quiz = useRecoilValue(quizAtom);
  const isLastStep = current === quiz.length - 1;
  const next = () => !isLastStep && setCurrent((c) => c + 1);
  const getStepValue = (step: number = current): Quiz => quiz[step] || {};

  return { current, next, getStepValue, isLastStep };
};
