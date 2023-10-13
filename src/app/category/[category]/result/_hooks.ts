import { quizInitializeSelector } from '@/atoms';
import { Options, Quiz } from '@/data';
import { useRouter } from 'next/navigation';
import { useRecoilValue } from 'recoil';

export const useResult = () => {
  const quiz = useRecoilValue(quizInitializeSelector);
  const router = useRouter();
  const length = quiz.length;
  const getCorrectCount = () => {
    return quiz.reduce((acc, current) => {
      const correctCount = current.answer === current.correct ? 1 : 0;
      return acc + correctCount;
    }, 0);
  };
  const getCorrectRate = () => {
    const correctCount = getCorrectCount();
    return (correctCount / quiz.length) * 100;
  };
  const getAnswerLabel = (data: Options[], answer: number) => {
    const target = data.find((d) => d.value === answer);
    return target?.label;
  };
  const getCorrectLabel = (data: Quiz) => {
    const target = data.options.find((d) => data.correct === d.value);
    return target?.label;
  };
  const isCorrect = (d: Quiz) => d.answer === d.correct;
  const handleClickBack = () => router.replace('/category');

  return {
    data: quiz,
    length,
    rate: getCorrectRate(),
    correctCount: getCorrectCount(),
    getAnswerLabel,
    getCorrectLabel,
    isCorrect,
    handleClickBack,
  };
};
