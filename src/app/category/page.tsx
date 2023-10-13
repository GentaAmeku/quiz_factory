'use client';

import { categories } from '@/data';
import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import NextImage from 'next/image';

export default function SelectCategory() {
  const router = useRouter();
  const handlePressCategory = (id: string) => {
    router.push(`/category/${id}`);
  };
  return (
    <main className="flex flex-col items-center justify-between p-16">
      <h1 className="text-5xl font-kiwi">Categories</h1>
      <div className="grid gap-8 mt-12 grid-cols-[minmax(320px,1fr)] ">
        {categories.map((item) => (
          <Card
            key={item.id}
            shadow="lg"
            isPressable
            onPress={() => handlePressCategory(item.id)}
          >
            <CardHeader className="pb-0 pt-4 px-6 flex-col items-start">
              <p className="text-xl">{item.title || '???'}</p>
            </CardHeader>
            <CardBody className="overflow-visible max-w-md">
              <div className="rounded-xl">
                <Image
                  as={NextImage}
                  alt="Category Card"
                  src={item.img?.src}
                  width="320"
                  height="320"
                  sizes="100vw"
                  className="w-full h-auto"
                  priority
                />
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
