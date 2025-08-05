import styles from './index.module.scss';
import React, { useEffect, useState } from 'react';
import { SelectedField } from '@/pages/contact/comonents/SelectedField';
import { RadioButtonField } from '@/pages/contact/comonents/RadioButtonField';
import { CheckBoxField } from '@/pages/contact/comonents/CheckBoxField';
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
import { InitialInput } from '@/pages/contact/type';

const initialInput = {
  name: '',
  katakana: '',
  mail: '',
  phone: '',
  period: '1',
  material: '1',
  postContent: '',
};

export type ErrorState = Partial<Record<keyof InitialInput, string>>;

export default function Contact() {
  const [selected, setSelected] = useState<string[]>([]);
  const [input, setInput] = useState<InitialInput>(initialInput);
  const [errorState, setErrorState] = useState<ErrorState>({});

  const { onChange, handleChange, createOnBlur, onSubmit } = useContactHandler(
    input,
    selected,
    setInput,
    setSelected,
    setErrorState,
  );

  useEffect(() => {
    const sessionInput = sessionStorage.getItem('formInput');
    const sessionSelected = sessionStorage.getItem('size');

    if (sessionInput) {
      setInput(JSON.parse(sessionInput));
    }

    if (sessionSelected) {
      setSelected(JSON.parse(sessionSelected));
    }
  }, []);

  // useEffect(() => {
  //   sessionStorage.setItem('formInput', JSON.stringify(input));
  // }, [input]);
  //
  // useEffect(() => {
  //   sessionStorage.setItem('size', JSON.stringify(selected));
  // }, [selected]);

  // useEffect(() => {
  //   sessionStorage.setItem('formInput', JSON.stringify(input));
  //   sessionStorage.setItem('size', JSON.stringify(selected));
  // }, [input, selected]);

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
            value={input.name}
          />
          <TextField
            fieldName={'カタカナ'}
            name={'katakana'}
            errorState={errorState.katakana}
            onChange={onChange}
            onBlur={createOnBlur(katakanaValid)}
            placeholder={'ヤマダ　タロウ'}
            value={input.katakana}
          />
          <TextField
            fieldName={'メールアドレス'}
            name={'mail'}
            errorState={errorState.mail}
            onChange={onChange}
            onBlur={createOnBlur(emailValid)}
            placeholder={'react@example.com'}
            value={input.mail}
          />
          <TextField
            fieldName={'電話番号'}
            name={'phone'}
            errorState={errorState.phone}
            onChange={onChange}
            onBlur={createOnBlur(phoneValid)}
            placeholder={'08012345678'}
            value={input.phone}
          />
          <SelectedField
            selected={selected}
            onChange={handleChange}
            title={'お客様のお車のサイズを選択してください'}
            options={sizeOptions}
            value={selected}
          />
          <RadioButtonField
            onChange={onChange}
            title={'車の経過年数を選択してください'}
            option={periodOption}
            value={input.period}
          />
          <CheckBoxField
            onChange={onChange}
            title={'ご希望の液剤を選択してください'}
            options={materialOptions}
            value={input.material}
          />
          <TextAriaFiled
            onChange={onChange}
            onBlur={createOnBlur(requiredValid)}
            errorState={errorState}
            value={input.postContent}
            title={'お問い合わせ内容を入力してください'}
          />
        </form>
      </section>
    </>
  );
}
