import styles from './index.module.scss';
import React, { FC } from 'react';

type HeroModelDescriptionProps = {
  model: string;
  craft: string;
  pricing: string;
};

export const HeroModelDescription: FC<HeroModelDescriptionProps> = ({
  model,
  craft,
  pricing,
}) => {
  return (
    <div className={styles.modelDetail}>
      <div className={styles.model}>{model}</div>
      <div className={styles.priceWrapper}>
        <div>{craft}</div>
        <div>{pricing}</div>
      </div>
    </div>
  );
};
