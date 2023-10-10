import { Quiz } from '@/data';
import { atom, selector } from 'recoil';

export const quizAtom = atom<Quiz[]>({
  key: 'quizAtom',
  default: [],
});

export const quizSelector = selector<Quiz[]>({
  key: 'quizSelector',
  get: ({ get }) => get(quizAtom),
  set: ({ set }, v) => set(quizAtom, v),
});
