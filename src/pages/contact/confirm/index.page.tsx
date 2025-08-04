import styles from './index.module.scss';
import { InitialInput } from '@/pages/contact/index.page';
import { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

export default function Confirm() {
  const [input, setInput] = useState<InitialInput | undefined>();
  const [selected, setSelected] = useState<string[]>();
  const [submitResult, setSubmitResult] = useState('');
  const router = useRouter();

  const loadSessionData = () => {
    try {
      const input: InitialInput = JSON.parse(
        sessionStorage.getItem('formInput') || '',
      );
      const size = JSON.parse(sessionStorage.getItem('size') || '');
      return { input, size };
    } catch (error) {
      console.error('パースエラー:', error);
      return { input: undefined, size: [] };
    }
  };

  useEffect(() => {
    const { input, size } = loadSessionData();
    setInput(input);
    setSelected(size);
  }, []);

  if (!input || !selected) return <p>読み込み中...</p>;

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await router.push('/contact/thanks');
    try {
      const response = await fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...input, selected }),
      });

      const data = await response.json();
      if (response.ok) {
        setSubmitResult('success');
        await router.push('/contact/thanks');
      } else {
        console.error(data.error);
        setSubmitResult('error');
      }
    } catch (error) {
      console.error('通信エラー:', error);
      setSubmitResult('error');
    }
  };

  const fieldLabels = [
    { id: 'name', label: 'お名前' },
    { id: 'katakana', label: 'フリガナ' },
    { id: 'mail', label: 'メールアドレス' },
    { id: 'phone', label: 'ご連絡先' },
    { id: 'size', label: '車種・サイズ' },
    { id: 'period', label: '車の年数' },
    { id: 'material', label: '希望の液剤' },
    { id: 'postContent', label: 'お問い合わせ内容' },
  ];

  const period: string = ['1年未満', '1年から3年', '3年から5年', '5年以上'][
    Number(input.period) - 1
  ];
  const material: string = ['液剤１', '液剤２', '液剤３'][
    Number(input.material) - 1
  ];

  const fieldRenderers: Record<string, string> = {
    name: input.name,
    katakana: input.katakana,
    mail: input.mail,
    phone: input.phone,
    size: selected.length === 0 ? '未選択' : selected.join(', '),
    period: period,
    material: material,
    postContent: input.postContent,
  };

  return (
    <form className={styles.container} onSubmit={onSubmit}>
      <div className={styles.titleWrapper}>
        <h2 className={styles.title}>以下の内容でよろしいでしょうか？</h2>
      </div>
      <div className={styles.list}>
        <ul className={styles.listKey}>
          {fieldLabels.map(({ id, label }) => (
            <li key={id} className={styles.listItem}>
              {label}
            </li>
          ))}
        </ul>
        <ul className={styles.listContent}>
          {fieldLabels.map(({ id }) => (
            <li key={id} className={styles.listItem}>
              {fieldRenderers[id]}
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.buttonWrapper}>
        <button type={'submit'} className={styles.button}>
          送信する
        </button>
        {submitResult === 'error' && (
          <p style={{ color: 'red' }}>
            送信中にエラーが発生しました。再度お試しください。
          </p>
        )}
      </div>
    </form>
  );
}
