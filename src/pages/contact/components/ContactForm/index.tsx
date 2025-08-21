import { TextField } from '@/pages/contact/components/TextField';
import { CheckBoxGroup } from '@/pages/contact/components/CheckBoxGroup';
import {
  materialOptions,
  periodOptions,
  sizeOptions,
} from '@/pages/contact/const/contactOptions';
import { RadioGroup } from '@/pages/contact/components/RadioGroup';
import { TextAreaField } from '@/pages/contact/components/TextAreaField';
import React, { FC, FormEventHandler } from 'react';
import { ErrorState, UserInput } from '@/pages/contact/types';
import styles from './index.module.scss';
import { ConfirmButton } from '@/pages/contact/components/ConfirmButton';
import { SelectedGroup } from '@/pages/contact/components/SelectedGroup';

type ContactFormProps = {
  handleSubmit: FormEventHandler<HTMLFormElement>;
  errorState: ErrorState;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | React.ChangeEvent<HTMLSelectElement>,
  ) => void;
  createOnBlur: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  userInput: UserInput;
  userInputSize: string[];
};

export const ContactForm: FC<ContactFormProps> = ({
  handleSubmit,
  errorState,
  handleChange,
  createOnBlur,
  userInput,
  userInputSize,
}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>お問い合わせフォーム</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          fieldName={'お名前'}
          name={'name'}
          errorState={errorState.name}
          onChange={handleChange}
          onBlur={createOnBlur}
          placeholder={'山田　太郎'}
          value={userInput.name}
        />
        <TextField
          fieldName={'カタカナ'}
          name={'katakana'}
          errorState={errorState.katakana}
          onChange={handleChange}
          onBlur={createOnBlur}
          placeholder={'ヤマダ　タロウ'}
          value={userInput.katakana}
        />
        <TextField
          fieldName={'メールアドレス'}
          name={'mail'}
          errorState={errorState.mail}
          onChange={handleChange}
          onBlur={createOnBlur}
          placeholder={'react@example.com'}
          value={userInput.mail}
        />
        <TextField
          fieldName={'電話番号'}
          name={'phone'}
          errorState={errorState.phone}
          onChange={handleChange}
          onBlur={createOnBlur}
          placeholder={'08012345678'}
          value={userInput.phone}
        />
        <CheckBoxGroup
          name={'size'}
          checked={userInputSize}
          onChange={handleChange}
          title={'お客様のお車のサイズを選択してください'}
          options={sizeOptions}
        />
        <RadioGroup
          onChange={handleChange}
          title={'車の経過年数を選択してください'}
          option={periodOptions}
          value={userInput.period}
          name={'period'}
        />
        <SelectedGroup
          onChange={handleChange}
          title={'ご希望の液剤を選択してください'}
          options={materialOptions}
          value={userInput.material}
          name={'material'}
        />
        <TextAreaField
          onChange={handleChange}
          onBlur={createOnBlur}
          errorState={errorState}
          value={userInput.postContent}
          fieldName={'お問い合わせ内容を入力してください'}
          name={'postContent'}
        />
        <ConfirmButton />
      </form>
    </section>
  );
};
