import styles from './index.module.scss';
import React, { FC } from 'react';
import { InitialInput } from '@/pages/contact/type';

type TextAriaFiledProps = {
  errorState: Partial<Record<keyof InitialInput, string>>;
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
        <h4>{title}</h4>
        {errorState.postContent && (
          <p style={{ color: 'red' }}>{errorState.postContent}</p>
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
