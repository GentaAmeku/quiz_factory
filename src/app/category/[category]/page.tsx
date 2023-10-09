'use client';

import { useRouter } from 'next/navigation';
import { kfhimaji } from '@/styles/fonts';
import { Button } from '@nextui-org/react';

export default function Home() {
  const router = useRouter();
  const handleClickStart = () => router.replace('/category');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center">
        <h1 className={`text-9xl ${kfhimaji.className}`}>Quiz Factory</h1>
        <div className="w-6/12">
          <Button
            color="default"
            variant="light"
            className={`w-full mt-24 p-8`}
            onClick={handleClickStart}
          >
            <span className={`text-3xl`}>GAME START</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
