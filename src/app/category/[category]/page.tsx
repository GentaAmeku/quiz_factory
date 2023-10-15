'use client';
import { Card, CardBody, Spacer, Button } from '@nextui-org/react';
import NextImage from 'next/image';
import { Options } from '@/data';
import { useParams, useRouter } from 'next/navigation';
import { useQuiz, useStep } from './_hooks';

export default function QuizStep() {
  const { category } = useParams();
  const { current, next, getStepValue, isLastStep } = useStep();
  const { length, setAnswer } = useQuiz();
  const router = useRouter();
  const data = getStepValue();
  const handleOnPressCard = (v: number) => {
    if (!data.answer) setAnswer(v, current);
  };
  const handleClickContinue = () => {
    if (isLastStep) router.push(`/category/${category}/result`);
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
      <div className="flex flex-col items-center sm:flex-row sm:flex-row-reverse sm:items-start sm:w-full">
        <div className="flex flex-col font-kiwi text-xl leading-loose tracking-[.3em] grow sm: flex-1">
          <p>
            <span>問題:{current + 1}</span>
            <span className="ml-4">{data?.title}</span>
          </p>
          <p className="mt-5">{data?.description}</p>
        </div>
        <div className="mt-6 relative w-[240px] h-[320px] sm:mr-6 sm:-mt-0">
          {data.img && (
            <NextImage
              alt="Description Image"
              src={data.img?.src || ''}
              style={{ objectFit: 'cover' }}
              priority
              fill
            />
          )}
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
            disableRipple
          >
            <CardBody>
              <p className="break-all text-center">{o.label}</p>
            </CardBody>
          </Card>
        ))}
      </div>
      {data.answer && (
        <>
          <Spacer y={12} />
          <div className="flex justify-end w-full">
            <div className="w-1/6">
              <Button
                color="primary"
                size="lg"
                variant="shadow"
                className="w-full p-6 text-lg"
                onClick={handleClickContinue}
              >
                <span>{isLastStep ? 'Result' : 'Continue'}</span>
              </Button>
            </div>
          </div>
        </>
      )}
    </main>
  );
}
