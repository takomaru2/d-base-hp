import { useEffect, useState } from 'react';

// 引数にスライド枚数を渡してあげることで、何枚でもループするようになるよ。lengthを指定してね。intervalはデフォルトで4秒設定
export const useAutoSlide = (length: number, interval: number = 4000) => {
  const [activeIndex, setActiveIndex] = useState(0);

  // 前回のアニメーションから4秒経っていればactiveIndexを更新する。
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
  }, [length, interval, setActiveIndex]);

  return activeIndex;
};
