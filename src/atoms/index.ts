import { Quiz } from '@/data';
import { shuffle } from '@/utils';
import { atom, selector } from 'recoil';

export const quizAtom = atom<Quiz[]>({
  key: 'quizAtom',
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
