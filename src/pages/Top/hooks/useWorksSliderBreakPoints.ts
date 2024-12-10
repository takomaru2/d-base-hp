import { useWindowWidth } from '@/hooks/useWindowWidth';

export type UseWorksSliderBreakPoints = {
  basicWidth: number;
  heroWidth: number;
  basicHeight: number;
  heroHeight: number;
  gap: number;
};

export const useWorksSliderBreakPoints = () => {
  const windowWidth = useWindowWidth();

  const pc = windowWidth > 1000;
  const tablet = windowWidth > 600;
  if (pc) {
    return {
      basicWidth: 250,
      heroWidth: 500,
      basicHeight: 355,
      heroHeight: 710,
      gap: 50,
    };
  } else if (tablet) {
    return {
      basicWidth: 140,
      heroWidth: 300,
      basicHeight: 213,
      heroHeight: 450,
      gap: 25,
    };
  } else {
    return {
      basicWidth: 78,
      heroWidth: 166,
      basicHeight: 122,
      heroHeight: 259,
      gap: 10,
    };
  }
};
