import styles from './index.module.scss';
import Image from 'next/image';
import leftImage from '@/../public/assets/top/works/worksImage01.jpg';
import heroImage from '@/../public/assets/top/works/worksImage02.jpg';

export const ReviewSlider = () => {
  return (
    <div className={styles.container}>
      <div className={styles.reviewerWrapper}>
        <h2 className={styles.title}>見違えるほど綺麗になりました！</h2>
        <div className={styles.textWrapper}>
          <div className={styles.reviewer}>スガちゃん最高No.1様</div>
          <div className={styles.craft}>
            ナノセラミックコーティング・・・¥150,000
          </div>
        </div>
      </div>
      <div className={styles.slider}>
        <Image
          src={leftImage}
          alt={'利用者の車外観'}
          width={74}
          height={117}
          className={styles.leftImage}
        />
        <Image
          src={heroImage}
          alt={'利用者の車外観'}
          width={165}
          height={259}
        />
      </div>
      <div className={styles.model}>SUZUKI Jimny</div>
      <div className={styles.comment}>
        「愛車のコーティングをお願いしましたが、仕上がりに大満足です！ツヤが復活し、水弾きも素晴らしいので洗車が楽になりました。スタッフも丁寧で、また依頼したいです！」
      </div>
    </div>
  );
};
