import styles from './index.module.scss';
import { FC } from 'react';
import { Option } from '@/pages/contact/const/contactOptions';

type SelectedFieldProps = {
  selected: string[];
  onChange: (size: string) => void;
  title: string;
  options: Option[];
  value: string[];
};

export const CheckBoxGroup: FC<SelectedFieldProps> = ({
  selected,
  onChange,
  title,
  options,
  value,
}) => {
  return (
    <div className={styles.container}>
      <h4>{title}</h4>
      {options.map((option) => (
        <label className={styles.checkBoxItem} key={option.value}>
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
