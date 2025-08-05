import styles from './index.module.scss';
import { ChangeEvent, FC } from 'react';
import { Option } from '@/pages/contact/const/form.data';

type CheckBoxFieldProps = {
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  option: Option[];
};

export const RadioButtonField: FC<CheckBoxFieldProps> = ({
  onChange,
  title,
  option,
}) => {
  return (
    <div className={styles.checkBoxContainer}>
      {title} <span>任意</span>
      {option.map(({ value, label }) => (
        <label className={styles.checkBoxLabel} key={value}>
          <input
            type="radio"
            name="period"
            value={value}
            className={styles.checkBox}
            onChange={onChange}
          />
          {label}
        </label>
      ))}
    </div>
  );
};
