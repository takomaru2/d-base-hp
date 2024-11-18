import { useEffect, useState } from 'react';

export const useAutoSlide = (length: number, interval: number = 4000) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // コンポーネントがマウントされるたびに呼び出し、前回のアニメーションから4秒経っていればactiveIndexを更新する
  useEffect(() => {
    let lastTime = performance.now();
    let cancelId: number;
    const slide = (currentTime: number) => {
      if (currentTime - lastTime >= interval) {
        setActiveIndex((previousIndex) => (previousIndex + 1) % length);
        lastTime = currentTime;
      }
      cancelId = requestAnimationFrame(slide);
    };
    cancelId = requestAnimationFrame(slide);

    return () => {
      cancelAnimationFrame(cancelId);
    };
  }, [setActiveIndex]);

  return activeIndex;
};
