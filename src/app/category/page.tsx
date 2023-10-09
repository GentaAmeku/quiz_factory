'use client';

import { categories } from '@/data';
import { kfhimaji } from '@/styles/fonts';
import { Card, Image } from '@nextui-org/react';
import NextImage from 'next/image';
import { useRouter } from 'next/navigation';

export default function Category() {
  const router = useRouter();
  const handleClickCategory = (id: string) => () => {
    router.replace(`/category/${id}`);
  };
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <h1 className={`text-5xl ${kfhimaji.className}`}>Category</h1>
      <div className="grid gap-8 grid-cols-1 mt-12">
        {categories.map((item, i) => (
          <Card
            isPressable
            onPress={handleClickCategory(item.id)}
            key={i}
            shadow="md"
          >
            <Image
              as={NextImage}
              alt={item.title}
              src={item.img.src}
              width={450}
              height={300}
            />
          </Card>
        ))}
      </div>
    </main>
  );
}
