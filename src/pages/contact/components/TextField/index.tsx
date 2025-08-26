import styles from './index.module.scss';
import { ChangeEvent, FC, FocusEventHandler } from 'react';

type InputFieldProps = {
  errorState: string | undefined;
  name: string;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onBlur: FocusEventHandler<HTMLInputElement>;
  placeholder: string;
  value: string;
  required?: boolean;
};

export const TextField: FC<InputFieldProps> = ({
  errorState,
  name,
  label,
  onChange,
  onBlur,
  placeholder,
  value,
  required = false,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.fieldHeader}>
        <label htmlFor={name} className={styles.label}>
          {label}
        </label>
        {required && <span className={styles.required}>必須</span>}
      </div>
      {errorState && <p className={styles.errorMessage}>{errorState}</p>}
      <input
        type={'text'}
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
