import React, { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserInput } from '../types';
import { postContact } from '../logic/postContact';
import { formatConfirmField } from '@/pages/contact/confirm/logics/formatConfirmField';
import { useIsBoolean } from '@/hooks/useBoolean';
import { LoadingMessage } from './components/LoadingMessage';
import { ConfirmPresentation } from './components/ConfirmPresentation';
import toast from 'react-hot-toast';
import { TOAST_MESSAGES } from '@/pages/contact/const/message';
import { safeSessionStorage } from '@/pages/contact/confirm/logics/storageAction';

export default function Confirm() {
  const userInput = useLoadUserInput();
  const [isSubmitting, setIsSubmitting] = useIsBoolean();
  const router = useRouter();

  if (userInput === undefined) {
    return <LoadingMessage />;
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
    const removeResult = safeSessionStorage.removeItem('formInput');
    if (!removeResult.ok) {
      toast.error(TOAST_MESSAGES.LOAD_ERROR);
    }
    await router.push('/contact/thanks');
  };

  const handleGoBack = () => {
    router.back();
  };

  return (
    <ConfirmPresentation
      onSubmit={onSubmit}
      labels={formatConfirmField(userInput)}
      backButton={handleGoBack}
      isSubmitting={isSubmitting}
    />
  );
}

function useLoadUserInput() {
  const [userInput, setUserInput] = useState<UserInput | undefined>();
  useEffect(() => {
    const result = safeSessionStorage.getItem<UserInput>('formInput');
    if (result.ok && result.data) {
      setUserInput(result.data);
    } else {
      toast.error(TOAST_MESSAGES.PARSE_ERROR);
    }
  }, []);

  return userInput;
}
