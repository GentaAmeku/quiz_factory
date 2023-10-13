import { Quiz } from '@/data';
import { shuffle } from '@/utils';
import { atom, selector } from 'recoil';

export const quizAtom = atom<Quiz[]>({
  key: 'quizAtom',
  default: [],
});

export const quizAnswerAtom = atom<number[]>({
  key: 'quizAnswerAtom',
  default: [],
});

export const quizInitializeSelector = selector<Quiz[]>({
  key: 'quizSelector',
  get: ({ get }) => get(quizAtom),
  set: ({ set }, data): void =>
    set(
      quizAtom,
      (data as Quiz[]).map((d) => ({ ...d, options: shuffle(d.options) }))
    ),
});

const setAnswer = (quiz: Quiz[], [answer, current]: number[]) =>
  quiz.map((d, i) => {
    return i === current ? { ...d, answer } : d;
  });

const setJudge = (quiz: Quiz[]) =>
  quiz.map((d, i) => {
    return {
      ...d,
      options: d.options.map((o) => ({
        ...o,
        isCorrect: d.correct === o.value,
        isIncorrect: d.answer !== d.correct && o.value === d.answer,
      })),
    };
  });

export const quizAnswerSelector = selector({
  key: 'quizAnswerSelector',
  get: ({ get }) => get(quizAnswerAtom),
  set: ({ get, set }, data): void => {
    const quiz = get(quizAtom);
    set(quizAtom, setJudge(setAnswer(quiz, data as number[])));
  },
});
