import React, { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import {
  materialOptions,
  periodOption,
} from '@/pages/contact/const/contactOptions';
import { UserInput } from '@/pages/contact/type';
import { loadSessionData } from '@/pages/contact/confirm/logics/loadSession';
import { ConfirmLayout } from '@/pages/contact/confirm/components/ConfirmLayout';
import { CustomFetchType } from '@/types/customFetch';
import { contactCustomFetch } from '@/pages/contact/logic/contactCustomFetch';

export default function Confirm() {
  const [userInput, setUserInput] = useState<UserInput | undefined>();
  const router = useRouter();

  useEffect(() => {
    const { data } = loadSessionData<UserInput>({ label: 'formInput' });
    setUserInput(data);
  }, []);

  if (!userInput)
    return (
      <p>
        読み込み中です。時間がかかる場合は、リロードするか、入力しなおしてください
      </p>
    );

  const onSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();
    const options: CustomFetchType<UserInput> = {
      resource: '/api/send/route',
      method: 'POST',
      body: userInput,
    };

    const ok = await contactCustomFetch(options);
    if (!ok) return;

    await router.push('/contact/thanks');
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
    />
  );
}
