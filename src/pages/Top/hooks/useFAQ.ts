import { useState } from 'react';

export const useFAQ = () => {
  const [showAnswerIndex, setShowAnswerIndex] = useState<number[]>([]);

  const isAnswerVisible = (index: number) => showAnswerIndex.includes(index);

  const getActiveIndex = (index: number) => {
    if (isAnswerVisible(index)) {
      setShowAnswerIndex(showAnswerIndex.filter((num) => num !== index));
    } else {
      setShowAnswerIndex([...showAnswerIndex, index]);
    }
  };

  return { isAnswerVisible, getActiveIndex };
};
