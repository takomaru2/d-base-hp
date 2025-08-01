import styles from './index.module.scss';
import React, { FormEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { judgmentErrorState } from '@/pages/contact/logic/judgmentErrorState';
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
  Valid,
} from '@/pages/contact/logic/validation';

export type InitialInput = {
  name: string;
  katakana: string;
  mail: string;
  phone: string;
  period: string;
  material: string;
  postContent: string;
};

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

  const router = useRouter();

  useEffect(() => {
    sessionStorage.setItem('formInput', JSON.stringify(input));
    sessionStorage.setItem('size', JSON.stringify(selected));
  }, [input, selected]);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors = judgmentErrorState(input);

    // エラーがあるなら送信せず、エラーをセット
    if (Object.keys(newErrors).length > 0) {
      setErrorState(newErrors);
      return;
    }
    await router.push('/contact/confirm');
  }

  const onChange = (
    event: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    const { name, value } = event.target;
    setInput((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleChange = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const onBlur =
    (valid: Valid) =>
    (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      event.preventDefault();
      const fieldName = event.target.name as keyof InitialInput;
      const value = input[fieldName];

      const error = valid(value, fieldName);
      if (error) {
        setErrorState((prev) => ({
          ...prev,
          [fieldName]: error,
        }));
      } else {
        setErrorState((prev) => {
          const newState = { ...prev };
          delete newState[fieldName];
          return newState;
        });
      }
    };

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
            onBlur={onBlur(requiredValid)}
            placeholder={'山田　太郎'}
            value={input.name}
          />
          <TextField
            fieldName={'カタカナ'}
            name={'katakana'}
            errorState={errorState.katakana}
            onChange={onChange}
            onBlur={onBlur(katakanaValid)}
            placeholder={'ヤマダ　タロウ'}
            value={input.katakana}
          />
          <TextField
            fieldName={'メールアドレス'}
            name={'mail'}
            errorState={errorState.mail}
            onChange={onChange}
            onBlur={onBlur(emailValid)}
            placeholder={'react@example.com'}
            value={input.mail}
          />
          <TextField
            fieldName={'電話番号'}
            name={'phone'}
            errorState={errorState.phone}
            onChange={onChange}
            onBlur={onBlur(phoneValid)}
            placeholder={'08012345678'}
            value={input.phone}
          />
          <SelectedField selected={selected} onChange={handleChange} />
          <RadioButtonField onChange={onChange} />
          <CheckBoxField onChange={onChange} />
          <TextAriaFiled
            onChange={onChange}
            onBlur={onBlur(requiredValid)}
            errorState={errorState}
          />
        </form>
      </section>
    </>
  );
}
