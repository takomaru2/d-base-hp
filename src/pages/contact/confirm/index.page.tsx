import React, { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  materialOptions,
  periodOption,
} from '@/pages/contact/const/contactOptions';
import { UserInput } from '@/pages/contact/type';
import { loadSessionData } from '@/pages/contact/confirm/logics/loadSession';
import { ConfirmLayout } from '@/pages/contact/confirm/components/ConfirmLayout';

export default function Confirm() {
  const [userInput, setUserInput] = useState<UserInput | undefined>();
  const [isErrorResult, setIsErrorResult] = useState<boolean>(false);
  const router = useRouter();

  useEffect(() => {
    const { input } = loadSessionData();
    setUserInput(input);
  }, []);

  if (!userInput)
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
        body: JSON.stringify(userInput),
      });

      const data = await response.json();
      if (response.ok) {
        await router.push('/contact/thanks');
      } else {
        console.error(data.error);
        setIsErrorResult(true);
      }
    } catch (error) {
      console.error('通信エラー:', error);
      setIsErrorResult(true);
    }
  };

  const handleBackButton = () => {
    router.back();
  };

  const confirmFields = [
    { id: 'name', label: 'お名前', value: userInput.name },
    { id: 'katakana', label: 'フリガナ', value: userInput.katakana },
    { id: 'mail', label: 'メールアドレス', value: userInput.mail },
    { id: 'phone', label: 'ご連絡先', value: userInput.phone },
    {
      id: 'size',
      label: '車種・サイズ',
      value:
        userInput['size'].length > 0 ? userInput['size'].join(', ') : '未選択',
    },
    {
      id: 'period',
      label: '車の年数',
      value:
        periodOption.find((option) => option.value === userInput.period)
          ?.label ?? '未選択',
    },
    {
      id: 'material',
      label: '希望の液剤',
      value:
        materialOptions.find((option) => option.value === userInput.material)
          ?.label ?? materialOptions[0].label,
    },
    {
      id: 'postContent',
      label: 'お問い合わせ内容',
      value: userInput.postContent,
    },
  ];

  return (
    <ConfirmLayout
      onSubmit={onSubmit}
      labels={confirmFields}
      backButton={handleBackButton}
      isErrorResult={isErrorResult}
    />
  );
}
