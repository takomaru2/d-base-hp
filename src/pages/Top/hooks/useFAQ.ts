import { useState } from 'react';

export const useFAQ = () => {
  const [showAnswerIndex, setShowAnswerIndex] = useState<number[]>([]);

  const isAnswerVisible = (index: number): boolean =>
    showAnswerIndex.includes(index);

  const getActiveIndex = (index: number): (() => void) => {
    return () => {
      if (isAnswerVisible(index)) {
        setShowAnswerIndex(showAnswerIndex.filter((num) => num !== index));
      } else {
        setShowAnswerIndex([...showAnswerIndex, index]);
      }
    };
  };

  return { isAnswerVisible, getActiveIndex };
};
