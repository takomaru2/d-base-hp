import styles from '@/pages/contact/index.module.scss';
import { ChangeEvent, FC, FocusEventHandler } from 'react';

type InputFieldProps = {
  errorState: string | undefined;
  name: string;
  fieldName: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: FocusEventHandler<HTMLInputElement>;
  placeholder: string;
  value: string;
};

export const TextField: FC<InputFieldProps> = ({
  errorState,
  name,
  fieldName,
  onChange,
  onBlur,
  placeholder,
  value,
}) => {
  return (
    <div className={styles.inputWrapper}>
      <div className={styles.flex}>
        <label htmlFor={name} className={styles.label}>
          {fieldName}
        </label>
        <span className={styles.required}>必須</span>
      </div>
      {errorState && <p style={{ color: 'red' }}>{errorState}</p>}
      <input
        type="text"
        name={name}
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};
