import { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import item1 from '../../../../../public/assets/top/liquidItem/item1.jpg';

export const LiquidItem: FC = () => {
  return (
    <div className={styles.item}>
      <Image className={styles.image} alt={'液剤'} src={item1} />
      <div className={styles.textbox}>
        <div className={styles.title}>NS-10H</div>
        <p className={styles.text}>
          雨染みの元を徹底的に排除した
          <br />
          青空駐車専用コーティング。 <br />
          3層コーティングからなる圧倒的な艶と耐久性
        </p>
      </div>
    </div>
  );
};
