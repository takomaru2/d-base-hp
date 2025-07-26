import styles from './index.module.scss';
import {
  ChangeEventHandler,
  FocusEventHandler,
  FormEvent,
  useState,
} from 'react';

type InitialInput = {
  name: string;
  katakana: string;
  mail: string;
  phone: string;
  period: string;
  material: string;
  postContent: string;
};

type ErrorState = Partial<Record<keyof InitialInput, string>>;

export default function Form() {
  const [selected, setSelected] = useState<string[]>([]);

  const initialInput = {
    name: '',
    katakana: '',
    mail: '',
    phone: '',
    period: '',
    material: '1',
    postContent: '',
  };

  const [input, setInput] = useState<InitialInput>(initialInput);

  const [errorState, setErrorState] = useState<ErrorState>({});

  // const [result, setResult] = useState('');

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const newErrors: ErrorState = {};

    // 必須項目チェック（空文字チェック）
    for (const [key, value] of Object.entries(input)) {
      if (!value.trim()) {
        newErrors[key as keyof InitialInput] = 'これは必須項目でやんすねぇ';
      }

      // カタカナだけ特別なチェック（空でなくても）
      if (key === 'katakana' && value && !/^[ァ-ン]+$/.test(value)) {
        newErrors.katakana = 'カタカナ入力でスペースを入れないでください';
      }

      // メール形式チェック
      if (
        key === 'mail' &&
        value &&
        !(/^[a-zA-Z0-9@.,]+$/.test(value) && /@/.test(value))
      ) {
        newErrors.mail = '英数字のみで入力して必ず@を使ってください';
      }

      // 電話番号チェック
      if (key === 'phone' && value) {
        if (!/^[0-9]+$/.test(value)) {
          newErrors.phone = '半角数字のみで入力してください';
        } else if (value.length >= 20) {
          newErrors.phone =
            '入力されている数字が多い可能性があります。いや、多いです。';
        }
      }
    }

    // エラーがあるなら送信せず、エラーをセット
    if (Object.keys(newErrors).length > 0) {
      setErrorState(newErrors);
      return;
    }

    const response = await fetch('/api/sample/route', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(input),
    });

    const data = await response.json();
    console.log(data);
  }

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
    } else if (fieldName === 'katakana' && !/^[ァ-ン]+$/.test(value)) {
      setErrorState((prev) => ({
        ...prev,
        [fieldName]: 'カタカナ入力でスペースを入れないでください',
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

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
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

  // console.log(input);

  return (
    <>
      <section className={styles.container}>
        <h2 className={styles.title}>お問い合わせフォーム</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputWrapper}>
            <div className={styles.flex}>
              <label htmlFor="name" className={styles.label}>
                お名前
              </label>
              <span className={styles.required}>必須</span>
            </div>
            {errorState.name && (
              <p style={{ color: 'red' }}>{errorState.name}</p>
            )}
            <input
              type="text"
              name="name"
              className={styles.input}
              placeholder={'山田　太郎'}
              value={input.name}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <label htmlFor="katakana" className={styles.label}>
                フリガナ
              </label>
              <span className={styles.required}>必須</span>
            </div>
            {errorState.katakana && (
              <p style={{ color: 'red' }}>{errorState.katakana}</p>
            )}
            <input
              type="text"
              name="katakana"
              className={styles.input}
              placeholder={'ヤマダ　タロウ'}
              onChange={onChange}
              onBlur={katakanaOnBlur}
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <label htmlFor="mail">メールアドレス</label>
              <span className={styles.required}>必須</span>
            </div>
            {errorState.mail && (
              <p style={{ color: 'red' }}>{errorState.mail}</p>
            )}
            <input
              type="email"
              name="mail"
              className={styles.input}
              placeholder="react@example.com"
              onChange={onChange}
              onBlur={emailOnBlur}
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <label htmlFor="phone">電話番号</label>
              <span className={styles.required}>必須</span>
            </div>
            {errorState.phone && (
              <p style={{ color: 'red' }}>{errorState.phone}</p>
            )}
            <input
              type="phone"
              name="phone"
              className={styles.input}
              placeholder="08012345678"
              onBlur={phoneOnBlur}
              onChange={onChange}
            />
          </div>
          <div className={styles.checkBoxContainer}>
            <span>お客様のお車のサイズを選択してください</span>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('ss')}
                onChange={() => handleChange('ss')}
                className={styles.checkBox}
              />
              <span className={styles.size}>SSサイズ</span>
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('s')}
                onChange={() => handleChange('s')}
                className={styles.checkBox}
              />
              <span className={styles.size}>Sサイズ</span>
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('m')}
                onChange={() => handleChange('m')}
                className={styles.checkBox}
              />
              <span className={styles.size}>Mサイズ</span>
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('l')}
                onChange={() => handleChange('l')}
                className={styles.checkBox}
              />
              <span className={styles.size}>Lサイズ</span>
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('ll')}
                onChange={() => handleChange('ll')}
                className={styles.checkBox}
              />
              <span className={styles.size}>LLサイズ</span>
            </label>
          </div>
          <div className={styles.checkBoxContainer}>
            車の経過年数を選択してください 任意
            <label className={styles.checkBoxLabel}>
              <input
                type="radio"
                name="period"
                value="1"
                className={styles.checkBox}
                onChange={onChange}
              />
              1年未満
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="radio"
                name="period"
                value="2"
                className={styles.checkBox}
                onChange={onChange}
              />
              1年から3年
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="radio"
                name="period"
                value="3"
                className={styles.checkBox}
                onChange={onChange}
              />
              3年から5年
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="radio"
                name="period"
                value="3"
                className={styles.checkBox}
                onChange={onChange}
              />
              5年以上
            </label>
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <span>選択</span>
              <span className={styles.required}>必須</span>
            </div>
            <select name="selectedMaterial" className={styles.selected}>
              <option value="1">液剤１</option>
              <option value="2">液剤２</option>
              <option value="3">液剤３</option>
            </select>
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <span>お問い合わせ内容</span>
            {errorState.postContent && (
              <p style={{ color: 'red' }}>{errorState.postContent}</p>
            )}
            <textarea
              name="postContent"
              rows={4}
              cols={40}
              className={styles.textArea}
              onChange={(event) =>
                setInput((prev) => ({
                  ...prev,
                  postContent: event.target.value,
                }))
              }
              onBlur={onBlurTextAria}
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <button type={'submit'} className={styles.submit}>
              送信する
            </button>
          </div>
        </form>
      </section>
    </>
  );
}
