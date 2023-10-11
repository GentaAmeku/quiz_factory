export type CategoryId = 'ro' | '';

interface Category {
  id: CategoryId;
  title: string;
}

export const categories: Category[] = [
  { id: 'ro', title: 'Ragnarok Online' },
  { id: '', title: '' },
  { id: '', title: '' },
  { id: '', title: '' },
];

interface Options {
  label: string;
  value: number;
}

export interface Quiz {
  title: string;
  options: Options[];
  correct: number;
  answer?: number;
  incorrect?: boolean;
}

interface CategoryQuestion {
  category: CategoryId;
  quiz: Quiz[];
}

export const data: CategoryQuestion[] = [
  {
    category: 'ro',
    quiz: [
      {
        title: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWM1',
        correct: 1,
        options: [
          { label: 'WM', value: 1 },
          { label: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWM', value: 2 },
          { label: 'WWWWWWWWWWWWWWWWM', value: 3 },
          { label: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWM', value: 4 },
        ],
      },
      {
        title: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWM2',
        correct: 2,
        options: [
          { label: 'WM', value: 1 },
          { label: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWM', value: 2 },
          { label: 'WWWWWWWWWWWWWWWWM', value: 3 },
          { label: 'WWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWWM', value: 4 },
        ],
      },
    ],
  },
];
