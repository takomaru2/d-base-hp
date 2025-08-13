import styles from './index.module.scss';
import { ChangeEvent, FC } from 'react';
import { Option } from '@/pages/contact/const/contactOptions';
import { UserInput } from '@/pages/contact/type';

type CheckBoxFieldProps = {
  name: string;
  selected: UserInput['size'];
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  title: string;
  options: Option[];
};

export const CheckBoxGroup: FC<CheckBoxFieldProps> = ({
  name,
  selected,
  onChange,
  title,
  options,
}) => {
  return (
    <div className={styles.container}>
      <p className={styles.title}>{title}</p>
      {options.map((option) => (
        <label className={styles.checkBoxItem} key={option.value}>
          <input
            name={name}
            type="checkbox"
            checked={selected.includes(option.value)}
            onChange={onChange}
            className={styles.checkBox}
            value={option.value}
          />
          <span className={styles.label}>{option.label}</span>
        </label>
      ))}
    </div>
  );
};
