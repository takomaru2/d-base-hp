import styles from './index.module.scss';
import React, { ChangeEventHandler, FC } from 'react';

type CheckBoxFieldProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  title: string;
  options: Option[];
};

type Option = {
  value: string;
  label: string;
};

export const CheckBoxField: FC<CheckBoxFieldProps> = ({
  onChange,
  title,
  options,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.flex}>
        <span>{title}</span>
        <span className={styles.required}>必須</span>
      </div>
      <select name="material" className={styles.selected} onChange={onChange}>
        {options.map(({ value, label }) => (
          <option key={value} value={value}>
            {label}
          </option>
        ))}
      </select>
    </div>
  );
};
