import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';
import { TextAriaFiled } from '@/pages/contact/comonents/TextAriaFiled';
import { TextField } from '@/pages/contact/comonents/TextField';
import {
  emailValid,
  katakanaValid,
  phoneValid,
  requiredValid,
} from '@/pages/contact/logic/validation';
import { useContactHandler } from '@/pages/contact/hooks/useContactHandler';
import {
  materialOptions,
  periodOption,
  sizeOptions,
} from '@/pages/contact/const/form.data';
import { ErrorState, initialInput, InitialInput } from '@/pages/contact/type';
import { SelectedGroup } from '@/pages/contact/comonents/SelectedGroup';
import { RadioGroup } from '@/pages/contact/comonents/RadioGroup';
import { CheckBoxGroup } from '@/pages/contact/comonents/CheckBoxGroup';

export default function Contact() {
  const [selectedSize, setSelectedSize] = useState<string[]>([]);
  const [contactForm, setContactForm] = useState<InitialInput>(initialInput);
  const [errorState, setErrorState] = useState<ErrorState>({});

  const { onChange, handleToggle, createOnBlur, onSubmit } = useContactHandler(
    contactForm,
    selectedSize,
    setContactForm,
    setSelectedSize,
    setErrorState,
  );

  useEffect(() => {
    const sessionInput = sessionStorage.getItem('formInput');
    const sessionSelected = sessionStorage.getItem('selected');

    if (sessionInput) {
      setContactForm(JSON.parse(sessionInput));
    }

    if (sessionSelected) {
      setSelectedSize(JSON.parse(sessionSelected));
    }
  }, []);

  return (
    <>
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
          <SelectedGroup
            selected={selectedSize}
            onChange={handleToggle}
            title={'お客様のお車のサイズを選択してください'}
            options={sizeOptions}
            value={selectedSize}
          />
          <RadioGroup
            onChange={onChange}
            title={'車の経過年数を選択してください'}
            option={periodOption}
            value={contactForm.period}
          />
          <CheckBoxGroup
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
        </form>
      </section>
    </>
  );
}
