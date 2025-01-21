import { StaticImageData } from 'next/image';
import { ReactNode } from 'react';
import item1 from '@/../public/assets/top/liquidItem/item1.jpg';
import item2 from '@/../public/assets/top/liquidItem/item2.jpg';

type LiquidSlideItem = {
  id: string;
  src: StaticImageData;
  alt: string;
  name: string;
  description: ReactNode;
};

// todo: 本番デプロイ前にsrc,name,description差し替え
export const liquidSlideItemList: LiquidSlideItem[] = [
  {
    id: '1',
    src: item1,
    alt: '液剤',
    name: 'NS-10H',
    description: (
      <>
        雨染みの元を徹底的に排除した
        <br />
        青空駐車専用コーティング。 <br />
        3層コーティングからなる圧倒的な艶と耐久性
      </>
    ),
  },
  {
    id: '2',
    src: item2,
    alt: '液剤',
    name: 'NASIOL ZR53',
    description: (
      <>
        雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した
        <br />
        青空駐車専用コーティング。 <br />
        3層コーティングからなる圧倒的な艶と耐久性
      </>
    ),
  },

  {
    id: '3',
    src: item1,
    alt: '液剤',
    name: 'NASIOLZR54 aaaaaa bbbb ccccc accccc accccc accccc accccc accccc accccc aaaaaaaa-aaaaa',
    description: (
      <>
        雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した
        <br />
        青空駐車専用コーティング。 <br />
        3層コーティングからなる圧倒的な艶と耐久性
      </>
    ),
  },

  {
    id: '4',
    src: item2,
    alt: 'ポリマーコート',
    name: 'NAaaa',
    description: (
      <>
        雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した雨染みの元を徹底的に排除した
        <br />
        青空駐車専用コーティング。 <br />
        3層コーティングからなる圧倒的な艶と耐久性
      </>
    ),
  },
];
