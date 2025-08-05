import styles from './index.module.scss';
import { FC } from 'react';
import { Option } from '@/pages/contact/const/form.data';

type SelectedFieldProps = {
  selected: string[];
  onChange: (size: string) => void;
  title: string;
  options: Option[];
  value: string[];
};

export const SelectedField: FC<SelectedFieldProps> = ({
  selected,
  onChange,
  title,
  options,
  value,
}) => {
  return (
    <div className={styles.checkBoxContainer}>
      <span>{title}</span>
      {options.map((option) => (
        <label className={styles.checkBoxLabel} key={option.value}>
          <input
            type="checkbox"
            checked={selected.includes(option.value)}
            onChange={() => onChange(option.value)}
            className={styles.checkBox}
            value={value}
          />
          <span className={styles.label}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
