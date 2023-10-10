import { useEffect, useState } from 'react';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';

import { random } from '@/utils';
import { CategoryId, Quiz, data } from '@/data';
import { quizAtom, quizSelector } from '@/atoms';
import { useParams } from 'next/navigation';

const getQuiz = (c: CategoryId): Quiz[] | [] => {
  const target = data.find(({ category }) => category === c);
  return target?.quiz || [];
};

const getStepLength = (quiz: Quiz[]): number => quiz.length;

const createQuiz = (quiz: Quiz[], range: number): Quiz[] => {
  return random(quiz, range);
};

export const useInitializeQuiz = () => {
  const { category } = useParams();
  const quizOrig = getQuiz(category as CategoryId);
  const step = getStepLength(quizOrig);
  const quiz = createQuiz(quizOrig, step);
  const setQuiz = useSetRecoilState(quizSelector);

  useEffect(() => {
    console.log('initialized', quiz);
    setQuiz(quiz);
  }, []);

  return { step };
};

export const useStep = () => {
  const quiz = useRecoilValue(quizSelector);
  const [current, setCurrent] = useState(0);
  const next = () => setCurrent((c) => c + 1);
  const getStepValue = (step: number = current) => quiz[step] || {};

  return { current, next, getStepValue };
};
