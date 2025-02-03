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
  basicWidth: 190,
  heroWidth: 400,
  basicHeight: 290,
  heroHeight: 630,
  gap: 26,
};

const tablet = {
  basicWidth: 132,
  heroWidth: 232,
  basicHeight: 200,
  heroHeight: 400,
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
