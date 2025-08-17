import React, { FormEventHandler, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { UserInput } from '../types';
import { postContact } from '../logic/postContact';
import { formatConfirmField } from '@/pages/contact/confirm/logics/formatConfirmField';
import { useIsBoolean } from '@/hooks/useBoolean';
import { createLoadingMessage } from './components/CreateLoadingMessage';
import { ConfirmPresentation } from './components/ConfirmPresentation';
import toast from 'react-hot-toast';
import { TOAST_MESSAGES } from '@/pages/contact/const/message';
import { loadSessionData, removeSessionData } from './logics/sessionStorage';

export default function Confirm() {
  const [userInput, setUserInput] = useState<UserInput | undefined>();
  const [isSubmitting, setIsSubmitting] = useIsBoolean();
  const router = useRouter();

  useLoadUserInput(setUserInput);

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
      toast.error(TOAST_MESSAGES.LOAD_ERROR);
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

function useLoadUserInput(
  setUserInput: React.Dispatch<React.SetStateAction<UserInput | undefined>>,
) {
  useEffect(() => {
    const result = loadSessionData<UserInput>('formInput');
    if (result.ok) {
      setUserInput(result.data);
    } else {
      toast.error(TOAST_MESSAGES.PARSE_ERROR);
    }
  }, []);
}
