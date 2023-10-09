import { Noto_Sans_JP } from 'next/font/google';
import localFont from 'next/font/local';

const notojp = Noto_Sans_JP({
  weight: ['400', '500'],
  subsets: ['latin'],
  variable: '--font-notojp',
  display: 'swap',
});

const kfhimaji = localFont({
  src: './fonts/KFhimaji.otf',
  variable: '--font-kfhimaji',
  display: 'swap',
});

const rampartOne = localFont({
  src: './fonts/RampartOne-Regular.ttf',
  variable: '--font-rampartone',
  display: 'swap',
});

const darumadropone = localFont({
  src: './fonts/DarumadropOne-Regular.ttf',
  variable: '--font-darumadropone',
  display: 'swap',
});

export { notojp, kfhimaji, rampartOne, darumadropone };
