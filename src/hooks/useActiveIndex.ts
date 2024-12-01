import { Dispatch, SetStateAction, useState } from 'react';

export const useActiveIndex = (
  initialNumber: number = 0,
): [number, Dispatch<SetStateAction<number>>] => {
  const [activeIndex, setActiveIndex] = useState(initialNumber);

  return [activeIndex, setActiveIndex];
};
