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
  createOnBlur: (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  userInput: UserInput;
};

export const ContactForm: FC<ContactFormProps> = ({
  handleSubmit,
  errorState,
  handleChange,
  createOnBlur,
  userInput,
}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>お問い合わせフォーム</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField
          fieldName={inputLabel.name}
          name={'name'}
          errorState={errorState.name}
          onChange={handleChange}
          onBlur={createOnBlur}
          placeholder={'山田　太郎'}
          value={userInput.name}
          required={true}
        />
        <TextField
          fieldName={inputLabel.katakana}
          name={'katakana'}
          errorState={errorState.katakana}
          onChange={handleChange}
          onBlur={createOnBlur}
          placeholder={'ヤマダ　タロウ'}
          value={userInput.katakana}
          required={true}
        />
        <TextField
          fieldName={inputLabel.mail}
          name={'mail'}
          errorState={errorState.mail}
          onChange={handleChange}
          onBlur={createOnBlur}
          placeholder={'react@example.com'}
          value={userInput.mail}
          required={true}
        />
        <TextField
          fieldName={inputLabel.phone}
          name={'phone'}
          errorState={errorState.phone}
          onChange={handleChange}
          onBlur={createOnBlur}
          placeholder={'08012345678'}
          value={userInput.phone}
          required={true}
        />
        <CheckBoxGroup
          name={'size'}
          checked={userInput.size}
          onChange={handleChange}
          title={inputLabel.size}
          options={sizeOptions}
        />
        <RadioGroup
          onChange={handleChange}
          title={inputLabel.period}
          option={periodOptions}
          value={userInput.period}
          name={'period'}
        />
        <SelectedGroup
          onChange={handleChange}
          title={inputLabel.material}
          options={materialOptions}
          value={userInput.material}
          name={'material'}
        />
        <TextArea
          onChange={handleChange}
          onBlur={createOnBlur}
          errorState={errorState}
          value={userInput.postContent}
          fieldName={inputLabel.postContent}
          name={'postContent'}
        />
        <ConfirmButton />
      </form>
    </section>
  );
};
