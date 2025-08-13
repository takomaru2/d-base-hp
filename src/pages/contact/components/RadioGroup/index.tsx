import styles from './index.module.scss';
import React, { ChangeEvent, FC } from 'react';
import { Option } from '@/pages/contact/const/contactOptions';

type CheckBoxFieldProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  option: Option[];
  value: string;
};

export const RadioGroup: FC<CheckBoxFieldProps> = ({
  onChange,
  title,
  option,
  value,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      <span className={styles.required}>必須</span>
      {option.map((option) => (
        <label className={styles.checkBoxItem} key={option.value}>
          <input
            type="radio"
            name="period"
            checked={option.value === value}
            value={option.value}
            className={styles.checkBox}
            onChange={onChange}
          />
          <span>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
