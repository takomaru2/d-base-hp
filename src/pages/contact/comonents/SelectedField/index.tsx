import styles from './index.module.scss';
import { FC } from 'react';
import { Option } from '@/pages/contact/const/form.data';

type SelectedFieldProps = {
  selected: string[];
  onChange: (size: string) => void;
  title: string;
  options: Option[];
};

export const SelectedField: FC<SelectedFieldProps> = ({
  selected,
  onChange,
  title,
  options,
}) => {
  return (
    <div className={styles.checkBoxContainer}>
      <span>{title}</span>
      {options.map(({ value, label }) => (
        <label className={styles.checkBoxLabel} key={value}>
          <input
            type="checkbox"
            checked={selected.includes(value)}
            onChange={() => onChange(value)}
            className={styles.checkBox}
          />
          <span className={styles.label}>{label}</span>
        </label>
      ))}
    </div>
  );
};
