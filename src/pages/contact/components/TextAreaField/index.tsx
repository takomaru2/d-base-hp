import styles from './index.module.scss';
import React, { FC } from 'react';
import { UserInput } from '../../types';

type TextAreaFieldProps = {
  errorState: Partial<Record<keyof UserInput, string>>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  value: string;
  fieldName: string;
  name: string;
};

export const TextAreaField: FC<TextAreaFieldProps> = ({
  errorState,
  onChange,
  onBlur,
  value,
  fieldName,
  name,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.fieldHeader}>
        <p className={styles.fieldName}>{fieldName}</p>
        <span className={styles.required}>必須</span>
      </div>
      {errorState.postContent && (
        <p className={styles.errorMessage}>{errorState.postContent}</p>
      )}
      <textarea
        name={name}
        className={styles.textArea}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
    </div>
  );
};
