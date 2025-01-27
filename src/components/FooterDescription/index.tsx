import { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import image from '@/../public/assets/top/footer.jpg';

export const FooterDescription: FC = () => {
  return (
    <div className={styles.container}>
      <div className={styles.description}>
        <div>鳥取県米子市二本木526-4</div>
        <div>代表：はやしばら たくや</div>
        <div>営業時間：10:00~19:00 定休日：毎週水曜日</div>
      </div>
      <Image src={image} alt={'D-base店舗外観'} className={styles.image} />
    </div>
  );
};
