import { useEffect } from 'react';

export const useAnimationFrameInterval = (
  updateState: () => void,
  interval: number,
) => {
  useEffect(() => {
    let lastTime = performance.now();
    let cancelId: number;

    const updateFrameInterval = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        updateState();
        lastTime = currentTime;
      }
      cancelId = requestAnimationFrame(updateFrameInterval);
    };

    cancelId = requestAnimationFrame(updateFrameInterval);

    return () => {
      cancelAnimationFrame(cancelId);
    };
  }, [updateState, interval]);
};
