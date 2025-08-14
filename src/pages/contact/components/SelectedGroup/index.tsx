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
        <p className={styles.title}>{title}</p>
        <span className={styles.required}>必須</span>
      </div>
      <select
        name={name}
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
