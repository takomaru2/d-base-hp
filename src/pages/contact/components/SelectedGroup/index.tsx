import styles from './index.module.scss';
import React, { ChangeEventHandler, FC } from 'react';
import { Option } from '@/pages/contact/const/contactOptions';

type CheckBoxFieldProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  title: string;
  options: Option[];
  value: string;
  name: string;
};

export const SelectedGroup: FC<CheckBoxFieldProps> = ({
  onChange,
  title,
  options,
  value,
  name,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <label className={styles.title}>{title}</label>
        <span className={styles.required}>必須</span>
      </div>
      <select
        name={name}
        className={styles.select}
        onChange={onChange}
        value={value}
      >
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
