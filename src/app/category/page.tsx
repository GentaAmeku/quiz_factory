'use client';

import { categories } from '@/data';
import { kfhimaji } from '@/styles/fonts';
import { Card, CardBody, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';

export default function SelectCategory() {
  const router = useRouter();
  const handleClickCategory = (id: string) => () => {
    router.replace(`/category/${id}`);
  };
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className={`text-5xl ${kfhimaji.className}`}>Category</h1>
      <div className="grid gap-8 grid-cols-1 mt-12 sm:grid-cols-2">
        {categories.map((item, i) => (
          <Card
            key={item.id || i}
            isPressable
            onPress={handleClickCategory(item.id)}
            shadow="md"
            className="w-72"
            isDisabled={!item.id}
            disableRipple={!item.id}
          >
            <CardBody>
              <p className={`text-lg text-center ${kfhimaji.className}`}>
                {item.title || '???'}
              </p>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
