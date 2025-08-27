import { TextField } from '@/pages/contact/components/TextField';
import { CheckBoxGroup } from '@/pages/contact/components/CheckBoxGroup';
import {
  inputLabel,
  materialOptions,
  periodOptions,
  sizeOptions,
} from '@/pages/contact/const/contactOptions';
import { RadioGroup } from '@/pages/contact/components/RadioGroup';
import { TextArea } from '@/pages/contact/components/TextArea';
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
  handleBlur: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  userInput: UserInput;
};

export const ContactForm: FC<ContactFormProps> = ({
  handleSubmit,
  errorState,
  handleChange,
  handleBlur,
  userInput,
}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>お問い合わせフォーム</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          name={'name'}
          value={userInput.name}
          label={inputLabel.name}
          placeholder={'山田　太郎'}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState.name}
          required={true}
        />
        <TextField
          name={'katakana'}
          value={userInput.katakana}
          label={inputLabel.katakana}
          placeholder={'ヤマダ　タロウ'}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState.katakana}
          required={true}
        />
        <TextField
          name={'mail'}
          value={userInput.mail}
          label={inputLabel.mail}
          placeholder={'react@example.com'}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState.mail}
          required={true}
        />
        <TextField
          name={'phone'}
          value={userInput.phone}
          label={inputLabel.phone}
          placeholder={'08012345678'}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState.phone}
          required={true}
        />
        <CheckBoxGroup
          name={'size'}
          title={inputLabel.size}
          checked={userInput.size}
          options={sizeOptions}
          onChange={handleChange}
        />
        <RadioGroup
          name={'period'}
          value={userInput.period}
          title={inputLabel.period}
          option={periodOptions}
          onChange={handleChange}
        />
        <SelectedGroup
          name={'material'}
          value={userInput.material}
          title={inputLabel.material}
          options={materialOptions}
          onChange={handleChange}
        />
        <TextArea
          name={'postContent'}
          value={userInput.postContent}
          fieldName={inputLabel.postContent}
          onChange={handleChange}
          onBlur={handleBlur}
          errorState={errorState}
        />
        <ConfirmButton />
      </form>
    </section>
  );
};
