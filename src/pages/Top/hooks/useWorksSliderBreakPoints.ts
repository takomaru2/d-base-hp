import { useWindowWidth } from '@/hooks/useWindowWidth';
import { PC, TABLET } from '@/const/breakpoint';

export type UseWorksSliderBreakPoints = {
  basicWidth: number;
  heroWidth: number;
  basicHeight: number;
  heroHeight: number;
  gap: number;
};

// todo: review開発時に、同じ条件でよさそうなら、constに切り出して共通化
const pc = {
  basicWidth: 250,
  heroWidth: 500,
  basicHeight: 355,
  heroHeight: 710,
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

export const useWorksSliderBreakPoints = (): UseWorksSliderBreakPoints => {
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
