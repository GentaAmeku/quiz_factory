'use client';
import { Card, CardBody, Spacer, Image, Button } from '@nextui-org/react';
import NextImage from 'next/image';
import { useQuiz, useStep } from './_hooks';
import { Options } from '@/data';

export default function QuizStep() {
  const { current, next, getStepValue } = useStep();
  const { length, setAnswer } = useQuiz();
  const data = getStepValue();
  const handleOnPressCard = (v: number) => {
    if (!data.answer) setAnswer(v, current);
  };
  const handleClickContinue = () => {
    next();
  };
  const getStyles = (o: Options): string => {
    const join = (array: string[]) => array.join(' ');
    if (o.isCorrect)
      return join([
        'bg-green-200',
        'text-green-600',
        'border',
        'border-green-600',
        'pointer-events-none',
      ]);
    if (o.isIncorrect)
      return join([
        'bg-red-200',
        'text-red-600',
        'border',
        'border-red-600',
        'pointer-events-none',
      ]);
    return '';
  };

  return (
    <main className="flex flex-col min-h-screen items-center py-16 px-12 break-all">
      <h2 className="font-kiwi text-5xl">
        {current + 1}/{length}
      </h2>
      <Spacer y={8} />
      <div className="flex flex-col items-center sm:flex-row sm:flex-row-reverse sm:items-start">
        <div className="flex flex-col font-kiwi text-xl leading-loose tracking-[.3em] grow">
          <p>
            <span>問題:{current + 1}</span>
            <span className="ml-4">{data?.title}</span>
          </p>
          <p className="mt-5">{data?.description}</p>
        </div>
        <div className="mt-6 w-3/4 sm:w-3/12 sm:mr-6 sm:-mt-0">
          <Image
            as={NextImage}
            alt="Description Image"
            src={data.img?.src}
            width="320"
            height="320"
            sizes="100vw"
            className="w-full h-auto"
            priority
          />
        </div>
      </div>
      <Spacer y={8} />
      <div className="grid gap-8 grid-cols-1 w-full sm:w-2/4">
        {data?.options?.map((o, i) => (
          <Card
            isPressable={!data.answer}
            key={i}
            onPress={() => handleOnPressCard(o.value)}
            isHoverable
            shadow="sm"
            className={`p-1 ${getStyles(o)}`}
            fullWidth
          >
            <CardBody>
              <p className="break-all text-center">{o.label}</p>
            </CardBody>
          </Card>
        ))}
      </div>
      <Spacer y={12} />
      <div className="flex justify-end w-full">
        <div className="w-1/6">
          <Button
            color="primary"
            size="lg"
            variant="shadow"
            className="w-full p-6"
            onClick={handleClickContinue}
          >
            <span>Continue</span>
          </Button>
        </div>
      </div>
    </main>
  );
}
