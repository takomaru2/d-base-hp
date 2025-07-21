import styles from './index.module.scss';
import { FORM_DATA_IMG } from '@/pages/form/const/form.data';
import { ChangeEventHandler, FocusEventHandler, useState } from 'react';

type InitialInput = {
  name: string;
  katakana: string;
  mail: string;
  phone: string;
  period: string;
  material: string;
  postContent: string;
};

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
  const [errorName, setErrorName] = useState('');
  const [errorMassage, setErrorMassage] = useState('');

  const handleChange = (value: string) => {
    setSelected((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value],
    );
  };

  const onBlur: FocusEventHandler<HTMLInputElement> = (event) => {
    event.preventDefault();

    // 空文字
    const isEmpty = !input[event.target.name as keyof InitialInput].trim();
    if (isEmpty) {
      setErrorName(event.target.name);
      const nameError = 'これは必須項目でやんすねぇ';
      setErrorMassage(nameError);
      return;
    }

    // カタカナのみ入力可能
    const value = input[event.target.name as keyof InitialInput];
    const isKatakana = !/^[ァ-ン]+$/.test(value);
    if (isKatakana) {
      setErrorName(event.target.name);
      const nameError = 'カタカナのみ入力が可能です';
      setErrorMassage(nameError);
      return;
    }

    setErrorName('');
  };

  const onBlurTextAria: FocusEventHandler<HTMLTextAreaElement> = (event) => {
    event.preventDefault();
    const isInput = !input[event.target.name as keyof InitialInput].trim();
    if (isInput) {
      setErrorName(event.target.name);
      return;
    } else {
      setErrorName('');
    }
  };

  const onSubmit = (event: React.FormEvent) => {
    console.log('送信完了', input.name, event);
  };

  const onChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setInput((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  console.log(input);

  return (
    <>
      <section
        className={styles.container}
        style={{ backgroundImage: `url(${FORM_DATA_IMG})` }}
      >
        <h2 className={styles.title}>お問い合わせフォーム</h2>
        <form className={styles.form} onSubmit={onSubmit}>
          <div className={styles.inputWrapper}>
            <div className={styles.flex}>
              <label htmlFor="name" className={styles.label}>
                お名前
              </label>
              <span className={styles.required}>必須</span>
            </div>
            {errorName === 'name' && (
              <p style={{ color: 'red' }}>{errorMassage}</p>
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
            {errorName === 'katakana' && (
              <p style={{ color: 'red' }}>{errorMassage}</p>
            )}
            <input
              type="text"
              name="katakana"
              className={styles.input}
              placeholder={'ヤマダ　タロウ'}
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <label htmlFor="mail">メールアドレス</label>
              <span className={styles.required}>必須</span>
            </div>
            {errorName === 'mail' && (
              <p style={{ color: 'red' }}>{errorMassage}</p>
            )}
            <input
              type="email"
              name="mail"
              className={styles.input}
              placeholder="react@example.com"
              onChange={onChange}
              onBlur={onBlur}
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <label htmlFor="phone">電話番号</label>
              <span className={styles.required}>必須</span>
            </div>
            {errorName === 'phone' && (
              <p style={{ color: 'red' }}>{errorMassage}</p>
            )}
            <input
              type="phone"
              name="phone"
              className={styles.input}
              placeholder="080-1234-5678"
              onBlur={onBlur}
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
              <span>SSサイズ</span>
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('s')}
                onChange={() => handleChange('s')}
                className={styles.checkBox}
              />
              <span>Sサイズ</span>
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('m')}
                onChange={() => handleChange('m')}
                className={styles.checkBox}
              />
              <span>Mサイズ</span>
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('l')}
                onChange={() => handleChange('l')}
                className={styles.checkBox}
              />
              <span>Lサイズ</span>
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="checkbox"
                checked={selected.includes('ll')}
                onChange={() => handleChange('ll')}
                className={styles.checkBox}
              />
              <span>LLサイズ</span>
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
            {errorName === 'postContent' && (
              <p style={{ color: 'red' }}>{errorMassage}</p>
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
