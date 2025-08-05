import styles from './index.module.scss';
import { FC } from 'react';

type SelectedFieldProps = {
  selected: string[];
  onChange: (size: string) => void;
  title: string;
  options: Option[];
};

type Option = {
  value: string;
  label: string;
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
          <span className={styles.size}>{label}</span>
        </label>
      ))}
    </div>
  );
};
