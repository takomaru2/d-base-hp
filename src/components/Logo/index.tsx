import { FC } from 'react';
import styles from './index.module.scss';

type LogoProps = {
  color?: 'black' | 'white';
};

export const Logo: FC<LogoProps> = ({ color }) => {
  const colorStyle = color === 'white' ? styles.colorWhite : styles.colorBlack;
  return <h1 className={`${styles.heading} ${colorStyle}`}>D-base</h1>;
};
