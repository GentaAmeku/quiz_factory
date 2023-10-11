import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { random, shuffle } from '@/utils';
import { CategoryId, Quiz, data } from '@/data';
import { quizAtom, quizInitializeSelector, quizAnswerSelector } from '@/atoms';
import { useParams } from 'next/navigation';

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
  const quiz = useRecoilValue(quizAtom);
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => c + 1);
  const getStepValue = (step: number = current): Quiz => quiz[step] || {};

  return { current, next, getStepValue };
};
