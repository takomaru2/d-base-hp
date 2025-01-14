import { useWindowWidth } from '@/hooks/useWindowWidth';
import { PC, TABLET } from '@/const/breakpoint';

export type UseReviewSliderBreakPoints = {
  basicWidth: number;
  heroWidth: number;
  basicHeight: number;
  heroHeight: number;
  gap: number;
};

const pc = {
  basicWidth: 200,
  heroWidth: 448,
  basicHeight: 315,
  heroHeight: 700,
  gap: 26,
};

const tablet = {
  basicWidth: 132,
  heroWidth: 232,
  basicHeight: 200,
  heroHeight: 350,
  gap: 18,
};

const sp = {
  basicWidth: 74,
  heroWidth: 166,
  basicHeight: 117,
  heroHeight: 259,
  gap: 10,
};

export const useReviewSliderBreakPointsStyle =
  (): UseReviewSliderBreakPoints => {
    const windowWidth = useWindowWidth();

    const pcBreakPoint = windowWidth > PC;
    const tabletBreakPoint = windowWidth > TABLET;

    if (pcBreakPoint) {
      return pc;
    } else if (tabletBreakPoint) {
      return tablet;
    } else {
      return sp;
    }
  };
