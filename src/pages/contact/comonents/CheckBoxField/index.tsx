import styles from '@/pages/contact/index.module.scss';
import React, { ChangeEventHandler, FC } from 'react';

type CheckBoxFieldProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
};

export const CheckBoxField: FC<CheckBoxFieldProps> = ({ onChange }) => {
  return (
    <div className={`${styles.inputWrapper}`}>
      <div className={styles.flex}>
        <span>選択</span>
        <span className={styles.required}>必須</span>
      </div>
      <select name="material" className={styles.selected} onChange={onChange}>
        <option value="1">液剤１</option>
        <option value="2">液剤２</option>
        <option value="3">液剤３</option>
      </select>
    </div>
  );
};
