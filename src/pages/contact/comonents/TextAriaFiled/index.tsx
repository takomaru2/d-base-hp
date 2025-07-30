import styles from '@/pages/contact/index.module.scss';
import React, { FC } from 'react';
import { InitialInput } from '@/pages/contact/index.page';

type TextAriaFiledProps = {
  errorState: Partial<Record<keyof InitialInput, string>>;
  onChange: React.ChangeEventHandler<HTMLTextAreaElement>;
  onBlur: React.FocusEventHandler<HTMLTextAreaElement>;
};

export const TextAriaFiled: FC<TextAriaFiledProps> = ({
  errorState,
  onChange,
  onBlur,
}) => {
  return (
    <>
      <div className={`${styles.inputWrapper}`}>
        <span>お問い合わせ内容</span>
        {errorState.postContent && (
          <p style={{ color: 'red' }}>{errorState.postContent}</p>
        )}
        <textarea
          name="postContent"
          rows={4}
          cols={40}
          className={styles.textArea}
          onChange={onChange}
          onBlur={onBlur}
        />
      </div>
      <div className={`${styles.inputWrapper}`}>
        <button type={'submit'} className={styles.submit}>
          確認
        </button>
      </div>
    </>
  );
};
