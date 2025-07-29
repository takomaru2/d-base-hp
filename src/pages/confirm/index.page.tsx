import styles from './index.module.scss';
import { InitialInput } from '@/pages/form/index.page';
import { useEffect, useState } from 'react';

export default function Confirm() {
  const [input, setInput] = useState<InitialInput | null>();
  const [selected, setSelected] = useState<string[]>();

  useEffect(() => {
    const stored = sessionStorage.getItem('formInput');
    const size = sessionStorage.getItem('size');
    if (stored) {
      try {
        const parsed: InitialInput = JSON.parse(stored);
        setInput(parsed);
      } catch (error) {
        console.error('JSON parse error:', error);
      }
    }
    if (size) {
      try {
        const parsed = JSON.parse(size);
        setSelected(parsed);
      } catch (error) {
        console.error('JSON parse error:', error);
      }
    }
  }, []);

  if (!input || !selected) return <p>読み込み中...</p>;

  return (
    <form className={styles.container}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>以下の内容でよろしいでしょうか？</h2>
      </div>
      <div className={styles.list}>
        <ul className={styles.listKey}>
          <li className={styles.listItem}>お名前</li>
          <li className={styles.listItem}>フリガナ</li>
          <li className={styles.listItem}>メールアドレス</li>
          <li className={styles.listItem}>ご連絡先</li>
          <li className={styles.listItem}>車種・サイズ</li>
          <li className={styles.listItem}>車の年数</li>
          <li className={styles.listItem}>希望の液剤</li>
          <li className={styles.listItem}>お問い合わせ内容</li>
        </ul>
        <ul className={styles.listContent}>
          <li className={styles.listItem}>{input.name}</li>
          <li className={styles.listItem}>{input.katakana}</li>
          <li className={styles.listItem}>{input.mail}</li>
          <li className={styles.listItem}>{input.phone}</li>
          <li className={styles.listItem}>{selected.join(', ')}</li>
          <li className={styles.listItem}>
            {
              {
                '1': '1年未満',
                '2': '1年から3年',
                '3': '3年から5年',
                '4': '5年以上',
              }[input.period]
            }
          </li>
          <li className={styles.listItem}>
            {
              {
                '1': '液剤１',
                '2': '液剤２',
                '3': '液剤３',
              }[input.material]
            }
          </li>
          <li className={styles.listItem}>{input.postContent}</li>
        </ul>
      </div>

      <div className={styles.buttonWrapper}>
        <button type={'submit'}>送信する</button>
      </div>
    </form>
  );
}
