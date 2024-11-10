import { useCallback, useState } from 'react';

export const useIsBoolean = (initialValue: boolean = false) => {
  const [isBoolean, setIsBoolean] = useState(initialValue);

  const toggle = useCallback(() => setIsBoolean((prev: boolean) => !prev), []);

  const setTrue = useCallback(() => setIsBoolean(true), []);

  const setFalse = useCallback(() => setIsBoolean(false), []);

  return { isBoolean, toggle, setTrue, setFalse };
};
