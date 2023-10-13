'use client';

import { useRouter } from 'next/navigation';
import { Button, Card, Spacer } from '@nextui-org/react';

export default function Home() {
  const router = useRouter();
  const handleClickStart = () => router.replace('/category');
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <div className="flex flex-col items-center">
        <h1 className="text-4xl sm:text-8xl font-kiwi">Quiz Factory</h1>
        <Spacer y={24} />
        <div className="w-80">
          <Button
            color="default"
            variant="light"
            className={`w-full p-8`}
            onClick={handleClickStart}
          >
            <span className={`text-2xl sm:text-3xl`}>Start playing</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
