import React from 'react';
import styles from './index.module.scss';

export const SubmitButton = () => {
  return (
    <div className={styles.inputWrapper}>
      <button type={'submit'} className={styles.submit}>
        確認
      </button>
    </div>
  );
};
