import React, { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserInput } from '@/pages/contact/type';
import {
  loadSessionData,
  removeSessionData,
} from '@/pages/contact/confirm/logics/loadSession';
import { postContact } from '../logic/postContact';
import { formatConfirmField } from '@/pages/contact/confirm/logics/formatConfirmField';
import { useIsBoolean } from '@/hooks/useBoolean';
import { createLoadingMessage } from './components/CreateLoadingMessage';
import { ConfirmPresentation } from './components/ConfirmPresentation';
import toast from 'react-hot-toast';

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
    const removeResult = removeSessionData('formInput');
    if (!removeResult.ok) {
      toast.error('通信障害が発生しました。再度やり直してください');
    }
    await router.push('/contact/thanks');
  };

  const handleBackButton = () => {
    router.back();
  };

  return (
    <ConfirmPresentation
      onSubmit={onSubmit}
      labels={formatConfirmField(userInput)}
      backButton={handleBackButton}
      isSubmitting={isSubmitting}
    />
  );
}
