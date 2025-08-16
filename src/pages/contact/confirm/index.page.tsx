import React, { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserInput } from '@/pages/contact/type';
import { loadSessionData } from '@/pages/contact/confirm/logics/loadSession';
import { ConfirmLayout } from '@/pages/contact/confirm/components/ConfirmLayout';
import { postContact } from '../logic/postContact';
import { formatConfirmField } from '@/pages/contact/confirm/logics/formatConfirmField';
import { useIsBoolean } from '@/hooks/useBoolean';
import { createLoadingMessage } from './components/CreateLoadingMessage';

export default function Confirm() {
  const [userInput, setUserInput] = useState<UserInput | undefined>();
  const [isSubmitting, setIsSubmitting] = useIsBoolean();
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
    if (isSubmitting) return;
    setIsSubmitting.on();

    const ok = await postContact(userInput);
    if (!ok) {
      setIsSubmitting.off();
      return;
    }
    sessionStorage.removeItem('formInput');
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
      isSubmitting={isSubmitting}
    />
  );
}
