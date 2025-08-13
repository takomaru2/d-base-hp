import React from 'react';
import styles from './index.module.scss';

export const ConfirmButton = () => {
  return (
    <button type={'submit'} className={styles.button}>
      確認
    </button>
  );
};
