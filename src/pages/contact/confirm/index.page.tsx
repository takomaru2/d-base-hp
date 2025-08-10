import React, { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserInput } from '@/pages/contact/type';
import { loadSessionData } from '@/pages/contact/confirm/logics/loadSession';
import { ConfirmLayout } from '@/pages/contact/confirm/components/ConfirmLayout';
import { CustomFetchType } from '@/types/customFetch';
import { contactCustomFetch } from '@/pages/contact/logic/contactCustomFetch';
import { formatConfirmField } from '@/pages/contact/confirm/logics/formatConfirmField';
import { createLoadingMessage } from '@/pages/contact/confirm/logics/createLoadingMessage';

export default function Confirm() {
  const [userInput, setUserInput] = useState<UserInput | undefined>();
  const router = useRouter();

  useEffect(() => {
    const { data } = loadSessionData<UserInput>({ label: 'formInput' });
    setUserInput(data);
  }, []);

  if (userInput === undefined) {
    return createLoadingMessage();
  }

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

  return (
    <ConfirmLayout
      onSubmit={onSubmit}
      labels={formatConfirmField(userInput)}
      backButton={handleBackButton}
    />
  );
}
