import styles from './index.module.scss';
import Link from 'next/link';
import Image, { StaticImageData } from 'next/image';

import { FC } from 'react';

type CardButtonLinkProps = {
  craft: string;
  image: StaticImageData;
  price: string;
  text: string;
};

export const CardButtonLink: FC<CardButtonLinkProps> = ({
  craft,
  image,
  price,
  text,
}) => {
  return (
    <Link href={'/'} className={styles.container}>
      <Image
        src={image}
        alt={'従業員が車の側面を磨いている'}
        className={styles.image}
      />
      <div className={styles.craft}>{craft}</div>
      <div className={styles.descriptionWrapper}>
        <div className={styles.price}>{price}</div>
        <div className={styles.text}>{text}</div>
      </div>
    </Link>
  );
};
