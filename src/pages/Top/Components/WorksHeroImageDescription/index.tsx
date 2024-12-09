import styles from './index.module.scss';
import React, { FC } from 'react';

type WorksHeroImageDescriptionProps = {
  model: string;
  craft: string;
  pricing: string;
};

export const WorksHeroImageDescription: FC<WorksHeroImageDescriptionProps> = ({
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
