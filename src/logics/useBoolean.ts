import { useState } from 'react';

type UseIsBooleanReturn = [
  boolean,
  {
    toggle: () => void;
    on: () => void;
    off: () => void;
  },
];
export const useIsBoolean = (
  initialValue: boolean = false,
): UseIsBooleanReturn => {
  const [isBoolean, setIsBoolean] = useState(initialValue);

  const action = {
    toggle: () => setIsBoolean((prev) => !prev),
    on: () => setIsBoolean(true),
    off: () => setIsBoolean(false),
  };

  return [isBoolean, action];
};
