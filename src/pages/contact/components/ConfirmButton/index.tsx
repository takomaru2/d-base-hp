import React, { FC } from 'react';
import styles from './index.module.scss';

export const ConfirmButton: FC = () => {
  return (
    <button type={'submit'} className={styles.button}>
      確認
    </button>
  );
};
