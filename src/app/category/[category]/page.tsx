'use client';
import { kfhimaji } from '@/styles/fonts';
import { Card, CardBody, Spacer } from '@nextui-org/react';
import { useInitializeQuiz, useStep } from './hooks';

export default function QuizStep() {
  const { current, next, getStepValue } = useStep();
  const { step } = useInitializeQuiz();
  const data = getStepValue();
  console.log(data);

  return (
    <main className="flex flex-col items-center justify-center p-24">
      <h2 className={`${kfhimaji.className} text-5xl`}>
        {current + 1}/{step}
      </h2>
      <Spacer y={6} />
      <Card className="p-6">
        <CardBody>
          <p className="text-xl">{data?.title}</p>
        </CardBody>
      </Card>
      <Spacer y={6} />
      <div className="grid gap-8 grid-cols-1 mt-12 sm:grid-cols-2">
        {data?.options?.map((v, i) => (
          <Card
            isPressable
            key={i}
            onPress={() => null}
            isHoverable
            className="p-1"
          >
            <CardBody>
              <p>{v}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
