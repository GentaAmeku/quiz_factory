import ro_logo from '@/images/ro_logo.jpg';
import gtbCard from '@/images/gtb.png';
import yoruCard from '@/images/yoru.png';
import kurohebiCard from '@/images/kurohebi.png';
import { StaticImageData } from 'next/image';

export type CategoryId = 'ro' | '';

interface Category {
  id: CategoryId;
  title: string;
  img?: StaticImageData;
}

export const categories: Category[] = [
  { id: 'ro', title: 'Ragnarok Online', img: ro_logo },
];

export interface Options {
  label: string;
  value: number;
  isCorrect?: boolean;
  isIncorrect?: boolean;
}

export interface Quiz {
  title: string;
  options: Options[];
  correct: number;
  answer?: number;
  description?: string;
  img?: StaticImageData;
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
        title: '黄金蟲カードの読み方は？',
        correct: 4,
        img: gtbCard,
        description:
          'ROで一番有名な高額カード、ほぼ全ての魔法を無効にしてしまう最強のカード',
        options: [
          { label: 'きんごきかーど', value: 1 },
          { label: 'おうごんむしかーど', value: 2 },
          { label: 'きんちゅうかーど', value: 3 },
          { label: 'おうごんちゅうかーど', value: 4 },
        ],
      },
      {
        title: '月夜花の読み方は？',
        correct: 2,
        img: yoruCard,
        description:
          'ROの初期から実装されている有名なボスモンスター、RO経験者しか読めないかも…',
        options: [
          { label: 'つくよばな', value: 1 },
          { label: 'うぉるやふぁ', value: 2 },
          { label: 'むーんらいと', value: 3 },
          { label: 'つきよみ', value: 4 },
        ],
      },
      {
        title: '黒蛇王の読み方は？',
        correct: 1,
        img: kurohebiCard,
        description:
          'コンロンのボスモンスター、念属性で無属性が通らない厄介なボス',
        options: [
          { label: 'こくだおう', value: 1 },
          { label: 'こくじゃおう', value: 2 },
          { label: 'くろへびおう', value: 3 },
          { label: 'ぶらっくすねーくきんぐ', value: 4 },
        ],
      },
    ],
  },
];
