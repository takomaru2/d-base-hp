import { useCallback, useState } from 'react';

export const useIsBoolean = (initialValue: boolean = false) => {
  const [isBoolean, setIsBoolean] = useState(initialValue);

  const isToggle = () => setIsBoolean((prev) => !prev);

  const setTrue = setIsBoolean(true);

  const setFalse = setIsBoolean(false);

  return { isBoolean, isToggle, setTrue, setFalse };
};
