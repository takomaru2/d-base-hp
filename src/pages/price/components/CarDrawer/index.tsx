import { FC } from 'react';
import styles from './index.module.scss';
import Image from 'next/image';
import plusImage from '../../../../../public/assets/top/plus.png';
import minusImage from '../../../../../public/assets/top/minus.png';

type CarDrawerProps = {
  isOpen: boolean;
  onClick: () => void;
  title: string;
  description: string;
};

export const CarDrawer: FC<CarDrawerProps> = ({
  isOpen,
  onClick,
  title,
  description,
}) => {
  const icon = isOpen ? minusImage : plusImage;
  return (
    <details className={styles.container}>
      <summary className={styles.carSize} onClick={onClick}>
        <div className={styles.title}>{title}</div>
        <Image src={icon} alt={'push button'} className={styles.icon} />
      </summary>
      <div className={styles.carList}>{description}</div>
    </details>
  );
};
