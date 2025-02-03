import { useWindowWidth } from '@/hooks/useWindowWidth';
import { PC, TABLET } from '@/const/breakpoint';

export type UseWorksSliderBreakPoints = {
  basicWidth: number;
  heroWidth: number;
  basicHeight: number;
  heroHeight: number;
  gap: number;
};

const pc = {
  basicWidth: 200,
  heroWidth: 400,
  basicHeight: 330,
  heroHeight: 580,
  gap: 50,
};

const tablet = {
  basicWidth: 140,
  heroWidth: 300,
  basicHeight: 213,
  heroHeight: 450,
  gap: 25,
};

const sp = {
  basicWidth: 78,
  heroWidth: 166,
  basicHeight: 122,
  heroHeight: 259,
  gap: 10,
};

export const useWorksSliderBreakPointsStyle = (): UseWorksSliderBreakPoints => {
  const windowWidth = useWindowWidth();

  const isPcSize = windowWidth > PC;
  const isTabletSize = windowWidth > TABLET;

  if (isPcSize) {
    return pc;
  } else if (isTabletSize) {
    return tablet;
  } else {
    return sp;
  }
};
