'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { kfhimaji } from '@/styles/fonts';
import { Button, Card, CardBody, Spacer } from '@nextui-org/react';
import { useQuiz, useStep } from './_hooks';

const XmarkIcon = () => (
  <FontAwesomeIcon icon={faXmark} size="lg" color="#ff0000" className="mr-4" />
);

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
              <div className="flex flex-row break-all items-center">
                <XmarkIcon />
                <p>{v.label}</p>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </main>
  );
}
