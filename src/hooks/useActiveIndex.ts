import { Dispatch, SetStateAction, useState } from 'react';

export const useActiveIndex = (): [
  number,
  Dispatch<SetStateAction<number>>,
] => {
  const [activeIndex, setActiveIndex] = useState(0);

  return [activeIndex, setActiveIndex];
};
