import { useWindowWidth } from '@/hooks/useWindowWidth';

export type UseWorksSliderBreakPoints = {
  basicSize: number;
  heroSize: number;
  gap: number;
};

export const useWorksSliderBreakPoints = () => {
  const windowWidth = useWindowWidth();

  const pc = windowWidth > 1000;
  const tablet = windowWidth > 600;
  if (pc) {
    return {
      basicSize: 250,
      heroSize: 500,
      gap: 50,
    };
  } else if (tablet) {
    return {
      basicSize: 140,
      heroSize: 300,
      gap: 25,
    };
  } else {
    return {
      basicSize: 78,
      heroSize: 166,
      gap: 10,
    };
  }
};
