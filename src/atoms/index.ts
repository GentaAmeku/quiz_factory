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

export const quizAnswerSelector = selector({
  key: 'quizAnswerSelector',
  get: ({ get }) => get(quizAnswerAtom),
  set: ({ get, set }, data): void => {
    const quiz = get(quizAtom);
    const [answer, current] = data as number[];
    set(
      quizAtom,
      quiz.map((d, i) => {
        return i === current
          ? { ...d, answer, incorrect: answer !== d.correct }
          : d;
      })
    );
  },
});
