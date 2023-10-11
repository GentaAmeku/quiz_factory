'use client';
import { kfhimaji } from '@/styles/fonts';
import { Button, Card, CardBody, Spacer } from '@nextui-org/react';
import { useQuiz, useStep } from './_hooks';

export default function QuizStep() {
  const { current, next, getStepValue } = useStep();
  const { length, setAnswer } = useQuiz();
  const data = getStepValue();
  const handleOnPressCard = (v: number) => {
    setAnswer(v, current);
  };

  return (
    <main className="flex flex-col min-h-screen items-center  p-24">
      <h2 className={`${kfhimaji.className} text-5xl`}>
        {current + 1}/{length}
      </h2>
      <Spacer y={6} />
      <Card className="p-4 max-w-2xl">
        <CardBody>
          <p className="text-xl">{data?.title}</p>
        </CardBody>
      </Card>
      <Spacer y={12} />
      <div className="grid gap-8 grid-cols-1">
        {data?.options?.map((v, i) => (
          <Card
            isPressable
            key={i}
            onPress={() => handleOnPressCard(v.value)}
            isHoverable
            shadow="sm"
            className="p-1 max-w-lg"
          >
            <CardBody>
              <p>{v.label}</p>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
