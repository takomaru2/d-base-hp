import styles from './index.module.scss';
import React, { ChangeEventHandler, FC } from 'react';
import { Option } from '@/pages/contact/const/contactOptions';

type CheckBoxFieldProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  title: string;
  options: Option[];
  value: string;
};

export const SelectedGroup: FC<CheckBoxFieldProps> = ({
  onChange,
  title,
  options,
  value,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h4>{title}</h4>
        <span className={styles.required}>必須</span>
      </div>
      <select
        name="material"
        className={styles.items}
        onChange={onChange}
        value={value}
      >
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
