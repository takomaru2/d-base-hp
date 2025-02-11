import { FC } from 'react';
import styles from './index.module.scss';

type SizeCardTextProps = {
  size: string;
  price: string;
};

export const SizeCardText: FC<SizeCardTextProps> = ({ size, price }) => {
  return (
    <>
      <div className={styles.container}>
        <div>{size}</div>
        <div>{price}</div>
      </div>
    </>
  );
};
