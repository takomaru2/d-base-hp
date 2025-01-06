import { useState } from 'react';

export const useFAQ = () => {
  const [showAnswerIndex, setShowAnswerIndex] = useState<Set<number>>(
    new Set(),
  );

  const isAnswerVisible = (index: number): boolean =>
    showAnswerIndex.has(index);

  const getActiveIndex = (index: number): void => {
    const newSet = new Set(showAnswerIndex);
    if (isAnswerVisible(index)) {
      newSet.delete(index);
      setShowAnswerIndex(newSet);
    } else {
      newSet.add(index);
      setShowAnswerIndex(newSet);
    }
  };

  return { isAnswerVisible, getActiveIndex };
};
