import styles from './index.module.scss';
import React, { FC } from 'react';
import { UserInput } from '@/pages/contact/type';

type TextAriaFiledProps = {
  errorState: Partial<Record<keyof UserInput, string>>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
  value: string;
  title: string;
};

export const TextAriaFiled: FC<TextAriaFiledProps> = ({
  errorState,
  onChange,
  onBlur,
  value,
  title,
}) => {
  return (
    <>
      <div className={styles.container}>
        <p className={styles.title}>{title}</p>
        {errorState.postContent && (
          <p className={styles.errorMessage}>{errorState.postContent}</p>
        )}
        <textarea
          name="postContent"
          className={styles.textArea}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      </div>
    </>
  );
};
