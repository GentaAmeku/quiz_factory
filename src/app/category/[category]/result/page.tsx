'use client';

import {
  Accordion,
  AccordionItem,
  Button,
  Card,
  CardBody,
  CardFooter,
  Chip,
  CircularProgress,
  Spacer,
} from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { useResult } from './_hooks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { faCircle } from '@fortawesome/free-regular-svg-icons';

const AccordionTitle = ({
  title,
  isCorrect,
}: {
  title: string;
  isCorrect: boolean;
}) => (
  <>
    {isCorrect ? (
      <FontAwesomeIcon
        icon={faCircle}
        size="lg"
        className="mr-4 text-green-500 w-[22px]"
      />
    ) : (
      <FontAwesomeIcon
        icon={faXmark}
        size="lg"
        className="mr-4 text-red-600 w-[22px]"
      />
    )}
    {title}
  </>
);

export default function Result() {
  const {
    data,
    length,
    rate,
    correctCount,
    getAnswerLabel,
    getCorrectLabel,
    isCorrect,
    handleClickBack,
  } = useResult();

  const router = useRouter();
  if (length === 0) router.replace('/category');

  return (
    <main className="flex flex-col min-h-screen items-center py-16 px-12 break-all">
      <h2 className="font-kiwi text-5xl">結果…</h2>
      <Spacer y={8} />
      <div className="grid gap-6 grid-cols-1 place-items-center sm:grid-cols-2 sm:place-items-start">
        <Card className="w-[320px] h-[320px] border-none bg-gradient-to-br from-green-400 to-blue-400">
          <CardBody className="justify-center items-center pb-0">
            <CircularProgress
              classNames={{
                svg: 'w-48 h-48 drop-shadow-md',
                indicator: 'stroke-white',
                track: 'stroke-white/10',
                value: 'text-3xl font-bold text-white',
              }}
              value={rate}
              strokeWidth={4}
              showValueLabel
            />
          </CardBody>
          <CardFooter className="justify-center items-center pt-0">
            <Chip
              classNames={{
                base: 'border-1 border-white/30',
                content: 'text-white/90 font-bold',
              }}
              variant="bordered"
            >
              <span>
                正解率: {correctCount} / {length}
              </span>
            </Chip>
          </CardFooter>
        </Card>
        <div>
          <Accordion variant="splitted" selectionMode="multiple">
            {data.map((d, i) => (
              <AccordionItem
                key={i}
                title={
                  <AccordionTitle title={d.title} isCorrect={isCorrect(d)} />
                }
                className="font-kiwi text-lg"
              >
                {isCorrect(d) ? (
                  <p>{getAnswerLabel(d.options, d.answer as number)}</p>
                ) : (
                  <>
                    <p className="text-red-500">
                      誤: {getAnswerLabel(d.options, d.answer as number)}
                    </p>
                    <p className="mt-3 text-green-500">
                      正: {getCorrectLabel(d)}
                    </p>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      <Spacer y={24} />
      <div className="w-80">
        <Button
          color="primary"
          variant="shadow"
          className="w-full p-6 text-lg"
          onClick={handleClickBack}
        >
          <span>Back to Category</span>
        </Button>
      </div>
    </main>
  );
}
