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

export interface Quiz {
  correct: boolean;
  title: string;
  options: string[];
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
        correct: false,
        title: 'オークスケルトンカードの効果で正しいのは次の内どれ1？',
        options: [
          '聖属性モンスターに与える物理ダメージ + 20%',
          '闇属性モンスターに与える物理ダメージ + 20%',
          '地属性モンスターに与える物理ダメージ + 20%',
          'オーク系に対するダメージ + 30%',
        ],
      },
      {
        correct: false,
        title: 'オークスケルトンカードの効果で正しいのは次の内どれ2？',
        options: [
          '聖属性モンスターに与える物理ダメージ + 20%',
          '闇属性モンスターに与える物理ダメージ + 20%',
          '地属性モンスターに与える物理ダメージ + 20%',
          'オーク系に対するダメージ + 30%',
        ],
      },
      {
        correct: false,
        title: 'オークスケルトンカードの効果で正しいのは次の内どれ3？',
        options: [
          '聖属性モンスターに与える物理ダメージ + 20%',
          '闇属性モンスターに与える物理ダメージ + 20%',
          '地属性モンスターに与える物理ダメージ + 20%',
          'オーク系に対するダメージ + 30%',
        ],
      },
      {
        correct: false,
        title: 'オークスケルトンカードの効果で正しいのは次の内どれ4？',
        options: [
          '聖属性モンスターに与える物理ダメージ + 20%',
          '闇属性モンスターに与える物理ダメージ + 20%',
          '地属性モンスターに与える物理ダメージ + 20%',
          'オーク系に対するダメージ + 30%',
        ],
      },
    ],
  },
];
