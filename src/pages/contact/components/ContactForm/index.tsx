import { TextField } from '@/pages/contact/components/TextField';
import { requiredValid, ValidResult } from '@/pages/contact/logic/validation';
import { katakanaValid } from '@/pages/contact/logic/katakanaValid';
import { emailValid } from '@/pages/contact/logic/emailValid';
import { phoneValid } from '@/pages/contact/logic/phoneValid';
import { CheckBoxGroup } from '../CheckBoxGroup';
import {
  materialOptions,
  periodOption,
  sizeOptions,
} from '@/pages/contact/const/contactOptions';
import { RadioGroup } from '@/pages/contact/components/RadioGroup';
import { TextAriaFiled } from '@/pages/contact/components/TextAriaFiled';
import React, { FC, FormEventHandler } from 'react';
import { ErrorState, UserInput } from '@/pages/contact/type';
import styles from './index.module.scss';
import { ConfirmButton } from '../ConfirmButton';
import { SelectedGroup } from '@/pages/contact/components/SelectedGroup';

type ContactFormProps = {
  onSubmit: FormEventHandler<HTMLFormElement>;
  errorState: ErrorState;
  onChange: (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => void;
  createOnBlur: (
    validate: (value: string) => ValidResult,
  ) => (
    event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  contactForm: UserInput;
  selectedSize: UserInput['size'];
};

export const ContactForm: FC<ContactFormProps> = ({
  onSubmit,
  errorState,
  onChange,
  createOnBlur,
  contactForm,
  selectedSize,
}) => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>お問い合わせフォーム</h2>
      <form className={styles.form} onSubmit={onSubmit}>
        <TextField
          fieldName={'お名前'}
          name={'name'}
          errorState={errorState.name}
          onChange={onChange}
          onBlur={createOnBlur(requiredValid)}
          placeholder={'山田　太郎'}
          value={contactForm.name}
        />
        <TextField
          fieldName={'カタカナ'}
          name={'katakana'}
          errorState={errorState.katakana}
          onChange={onChange}
          onBlur={createOnBlur(katakanaValid)}
          placeholder={'ヤマダ　タロウ'}
          value={contactForm.katakana}
        />
        <TextField
          fieldName={'メールアドレス'}
          name={'mail'}
          errorState={errorState.mail}
          onChange={onChange}
          onBlur={createOnBlur(emailValid)}
          placeholder={'react@example.com'}
          value={contactForm.mail}
        />
        <TextField
          fieldName={'電話番号'}
          name={'phone'}
          errorState={errorState.phone}
          onChange={onChange}
          onBlur={createOnBlur(phoneValid)}
          placeholder={'08012345678'}
          value={contactForm.phone}
        />
        <CheckBoxGroup
          name={'size'}
          selected={selectedSize}
          onChange={onChange}
          title={'お客様のお車のサイズを選択してください'}
          options={sizeOptions}
        />
        <RadioGroup
          onChange={onChange}
          title={'車の経過年数を選択してください'}
          option={periodOption}
          value={contactForm.period}
        />
        <SelectedGroup
          onChange={onChange}
          title={'ご希望の液剤を選択してください'}
          options={materialOptions}
          value={contactForm.material}
        />
        <TextAriaFiled
          onChange={onChange}
          onBlur={createOnBlur(requiredValid)}
          errorState={errorState}
          value={contactForm.postContent}
          title={'お問い合わせ内容を入力してください'}
        />
        <ConfirmButton />
      </form>
    </section>
  );
};
