import styles from './index.module.scss';
import React, {
  FocusEventHandler,
  FormEvent,
  useEffect,
  useState,
} from 'react';
import { useRouter } from 'next/router';
import { judgmentErrorState } from '@/pages/contact/logic/judgmentErrorState';
import { SelectedField } from '@/pages/contact/comonents/SelectedField';
import { RadioButtonField } from '@/pages/contact/comonents/RadioButtonField';
import { CheckBoxField } from '@/pages/contact/comonents/CheckBoxField';
import { TextAriaFiled } from '@/pages/contact/comonents/TextAriaFiled';
import { TextField } from '@/pages/contact/comonents/TextField';

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
  const router = useRouter();

  const [input, setInput] = useState<InitialInput>(initialInput);

  useEffect(() => {
    sessionStorage.setItem('formInput', JSON.stringify(input));
    sessionStorage.setItem('size', JSON.stringify(selected));
  }, [input, selected]);

  const [errorState, setErrorState] = useState<ErrorState>({});

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

  const onBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const fieldName = event.target.name as keyof InitialInput;
    const value = input[fieldName];

    if (!value.trim()) {
      setErrorState((prev) => ({
        ...prev,
        [fieldName]: 'これは必須項目でやんすねぇ',
      }));
      return;
    }

    setErrorState((prev) => {
      const newState = { ...prev };
      delete newState[fieldName];
      return newState;
    });
  };

  const katakanaOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const fieldName = event.target.name as keyof InitialInput;
    const value = input[fieldName];

    const isEmpty = !value.trim();
    if (isEmpty) {
      setErrorState((prev) => ({
        ...prev,
        [fieldName]: 'これは必須項目でやんすねぇ',
      }));
    } else if (fieldName === 'katakana' && !/^[ァ-ン　]+$/.test(value)) {
      setErrorState((prev) => ({
        ...prev,
        [fieldName]: 'カタカナのみで入力してください',
      }));
    } else {
      setErrorState((prev) => {
        const newState = { ...prev };
        delete newState[fieldName];
        return newState;
      });
    }
  };

  const onBlurTextAria: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault();
    const field = event.target.name as keyof InitialInput;
    const isInput = !input[field].trim();

    if (isInput) {
      setErrorState((prev) => ({
        ...prev,
        [field]: 'これは必須です',
      }));
    } else {
      setErrorState((prev) => {
        const newState = { ...prev };
        delete newState[field];
        return newState;
      });
    }
  };

  const emailOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const field = event.target.name as keyof InitialInput;
    const value = input[field];
    const isEmailPath = !(/^[a-zA-Z0-9@.,]+$/.test(value) && /@/.test(value));

    // 空文字
    const isEmpty = !value.trim();
    if (isEmpty) {
      setErrorState((prev) => ({
        ...prev,
        [field]: 'これは必須です。',
      }));
    } else if (isEmailPath) {
      // 英数字のみで@があるか確認
      setErrorState((prev) => ({
        ...prev,
        [field]: '英数字のみで入力して必ず@を使ってください',
      }));
    } else {
      setErrorState((prev) => {
        const newState = { ...prev };
        delete newState[field];
        return newState;
      });
    }
  };

  const phoneOnBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();
    const field = event.target.name as keyof InitialInput;
    const value = input[field];
    const isNumber = !/^[0-9]+$/.test(value);
    const isUnderTwenty = value.length >= 20;

    // 空文字
    const isEmpty = !value.trim();
    if (isEmpty) {
      setErrorState((prev) => ({
        ...prev,
        [field]: 'これは必須です',
      }));
    } else if (isNumber) {
      // 数字のみ
      setErrorState((prev) => ({
        ...prev,
        [field]: '半角英数字のみで入力してください',
      }));
    } else if (isUnderTwenty) {
      // 20文字以下
      setErrorState((prev) => ({
        ...prev,
        [field]: '入力されている数字が多い可能性があります。いや、多いです。',
      }));
    } else {
      setErrorState((prev) => {
        const newState = { ...prev };
        delete newState.phone;
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
            onBlur={onBlur}
            placeholder={'山田　太郎'}
            value={input.name}
          />
          <TextField
            fieldName={'カタカナ'}
            name={'katakana'}
            errorState={errorState.katakana}
            onChange={onChange}
            onBlur={katakanaOnBlur}
            placeholder={'ヤマダ　タロウ'}
            value={input.katakana}
          />
          <TextField
            fieldName={'メールアドレス'}
            name={'mail'}
            errorState={errorState.mail}
            onChange={onChange}
            onBlur={emailOnBlur}
            placeholder={'react@example.com'}
            value={input.mail}
          />
          <TextField
            fieldName={'電話番号'}
            name={'phone'}
            errorState={errorState.phone}
            onChange={onChange}
            onBlur={phoneOnBlur}
            placeholder={'08012345678'}
            value={input.phone}
          />
          <SelectedField selected={selected} onChange={handleChange} />
          <RadioButtonField onChange={onChange} />
          <CheckBoxField onChange={onChange} />
          <TextAriaFiled
            onChange={onChange}
            onBlur={onBlurTextAria}
            errorState={errorState}
          />
        </form>
      </section>
    </>
  );
}
