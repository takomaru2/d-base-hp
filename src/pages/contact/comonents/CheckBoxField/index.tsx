import styles from './index.module.scss';
import React, { ChangeEventHandler, FC } from 'react';
import { Option } from '@/pages/contact/const/form.data';

type CheckBoxFieldProps = {
  onChange: ChangeEventHandler<HTMLSelectElement>;
  title: string;
  options: Option[];
  value: string;
};

export const CheckBoxField: FC<CheckBoxFieldProps> = ({
  onChange,
  title,
  options,
  value,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.flex}>
        <span>{title}</span>
        <span className={styles.required}>必須</span>
      </div>
      <select name="material" className={styles.selected} onChange={onChange}>
        {options.map((option) => (
          <option key={option.value} value={value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};
