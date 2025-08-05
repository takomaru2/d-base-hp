import styles from './index.module.scss';
import { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { materialOptions, periodOption } from '@/pages/contact/const/form.data';
import { InitialInput } from '@/pages/contact/type';
import { loadSessionData } from '@/pages/contact/confirm/logics/loadSession';

export default function Confirm() {
  const [confirmedInput, setConfirmedInput] = useState<
    InitialInput | undefined
  >();
  const [confirmedSelected, setConfirmedSelected] = useState<string[]>();
  const [submitResult, setSubmitResult] = useState('');
  const router = useRouter();

  useEffect(() => {
    const { input, size } = loadSessionData();
    setConfirmedInput(input);
    setConfirmedSelected(size);
  }, []);

  if (!confirmedInput || !confirmedSelected)
    return (
      <p>
        読み込み中です。時間がかかる場合は、リロードするか、入力しなおしてください
      </p>
    );

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/send/route', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...confirmedInput,
          selected: confirmedSelected,
        }),
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

  const handleBackButton = async () => {
    await router.push('/contact');
  };

  const periodItem = periodOption.find(
    (option) => option.value === confirmedInput.period,
  );

  const materialLabel =
    materialOptions.find((option) => option.value === confirmedInput.material)
      ?.label ?? materialOptions[0]['label'];

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

  const fieldRenderers: Record<string, string> = {
    name: confirmedInput.name,
    katakana: confirmedInput.katakana,
    mail: confirmedInput.mail,
    phone: confirmedInput.phone,
    size:
      Array.isArray(confirmedSelected) && confirmedSelected.length > 0
        ? confirmedSelected.join(', ')
        : '未選択',
    period: periodItem?.label ?? '未選択',
    material: materialLabel,
    postContent: confirmedInput.postContent,
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
        <button
          type={'button'}
          onClick={handleBackButton}
          className={styles.button}
        >
          戻る
        </button>
        <button type={'submit'} className={styles.button}>
          送信する
        </button>
      </div>
      {submitResult === 'error' && (
        <p style={{ color: 'red' }}>
          送信中にエラーが発生しました。再度お試しください。
        </p>
      )}
    </form>
  );
}
