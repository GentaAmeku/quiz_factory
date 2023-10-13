import { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import useSound from 'use-sound';
import { useParams } from 'next/navigation';

import { random } from '@/utils';
import { CategoryId, Quiz, data } from '@/data';
import { quizAtom, quizInitializeSelector, quizAnswerSelector } from '@/atoms';

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

export const useQuiz = () => {
  const { category } = useParams();
  const [playCorrectSfx] = useSound(correctSfx, { volume: 0.5 });
  const [playIncorrectSfx] = useSound(incorrectSfx, { volume: 0.5 });
  const quizOrig = getQuiz(category as CategoryId);
  const length = getStepLength(quizOrig);
  const quiz = createQuiz(quizOrig, length);
  const setQuiz = useSetRecoilState(quizInitializeSelector);
  const setQuizAnswer = useSetRecoilState(quizAnswerSelector);
  const setAnswer = (answer: number, current: number) =>
    setQuizAnswer([answer, current]);

  useEffect(() => {
    setQuiz(quiz);
    console.info('initialized', quiz);
  }, []);

  return { length, setAnswer };
};

export const useStep = () => {
  const [current, setCurrent] = useState(0);
  const quiz = useRecoilValue(quizAtom);
  const isLastStep = current === quiz.length - 1;
  const next = () => !isLastStep && setCurrent((c) => c + 1);
  const getStepValue = (step: number = current): Quiz => quiz[step] || {};

  return { current, next, getStepValue, isLastStep };
};
