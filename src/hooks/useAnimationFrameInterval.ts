import { useEffect } from 'react';

export const useAnimationFrameInterval = (
  updateState: () => void,
  interval: number,
) => {
  useEffect(() => {
    let lastTime = performance.now();
    let cancelId: number;

    const slide = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        updateState();
        lastTime = currentTime;
      }
      cancelId = requestAnimationFrame(slide);
    };

    cancelId = requestAnimationFrame(slide);

    return () => {
      cancelAnimationFrame(cancelId);
    };
  }, [updateState, interval]);
};
