import { SectionTitle } from '@/components/SectionTitle';
import styles from './index.module.scss';
import { FC } from 'react';

export const AccessSection: FC = () => {
  return (
    <div className={styles.container}>
      <SectionTitle jpTitle={'アクセス'} enTitle={'Access'} color={'white'} />
      <div className={styles.flexWrap}>
        <iframe
          className={styles.map}
          title="garage map"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d203.17974499238034!2d133.38608325286629!3d35.433103603661735!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3556f72aeb9ee653%3A0x903ae3aba384736f!2z44Kz44O844OG44Kj44Oz44Kw5bCC6ZaA5bqXIEQtYmFzZSDnsbPlrZA!5e0!3m2!1sja!2sjp!4v1733726444496!5m2!1sja!2sjp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className={styles.textWrapper}>
          <p className={styles.text}>
            当店舗は国道9号線に面し、日吉津イオンや鳥取トヨタ東店が近くにあります。アクセスが良好で、無料駐車場も完備しております。
            <br />
            ドライブのついでにお気軽にお立ち寄りください。
          </p>
        </div>
      </div>
    </div>
  );
};
