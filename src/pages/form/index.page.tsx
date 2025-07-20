import styles from './index.module.scss';
import { FORM_DATA_IMG } from '@/pages/form/const/form.data';
import { useState } from 'react';

export default function Form() {
  const [selected, setSelected] = useState<string[]>([]);

  const handleChange = (value: string) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value],
    );
  };

  return (
    <>
      <section
        className={styles.container}
        style={{ backgroundImage: `url(${FORM_DATA_IMG})` }}
      >
        <h2 className={styles.title}>お問い合わせフォーム</h2>
        <form className={styles.form}>
          <div className={styles.inputWrapper}>
            <div className={styles.flex}>
              <label htmlFor="name" className={styles.label}>
                お名前
              </label>
              <span className={styles.required}>必須</span>
            </div>
            <input
              type="text"
              id="name"
              className={styles.input}
              placeholder={'山田　太郎'}
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <label htmlFor="kanaName" className={styles.label}>
                フリガナ
              </label>
              <span className={styles.required}>必須</span>
            </div>
            <input
              type="text"
              id="kanaName"
              className={styles.input}
              placeholder={'ヤマダ　タロウ'}
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <label htmlFor="email">メールアドレス</label>
              <span className={styles.required}>必須</span>
            </div>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="react@example.com"
            />
          </div>
          <div className={`${styles.inputWrapper} ${styles.marginTop}`}>
            <div className={styles.flex}>
              <label htmlFor="email">電話番号</label>
              <span className={styles.required}>必須</span>
            </div>
            <input
              type="phone"
              id="phone"
              className={styles.input}
              placeholder="080-1234-5678"
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
                name="myRadio"
                value="1"
                className={styles.checkBox}
              />
              1年未満
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="radio"
                name="myRadio"
                value="2"
                className={styles.checkBox}
              />
              1年から3年
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="radio"
                name="myRadio"
                value="3"
                className={styles.checkBox}
              />
              3年から5年
            </label>
            <label className={styles.checkBoxLabel}>
              <input
                type="radio"
                name="myRadio"
                value="3"
                className={styles.checkBox}
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
            <textarea
              name="postContent"
              rows={4}
              cols={40}
              className={styles.textArea}
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
