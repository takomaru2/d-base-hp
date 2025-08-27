import React, { useEffect } from 'react';
import {
  useContactHandler,
  UseContactHandlerReturn,
} from '@/pages/contact/hooks/useContactHandler';
import { ContactForm } from '@/pages/contact/components/ContactForm';
import { UserInput } from './types';
import { storageAction } from '@/pages/contact/confirm/logics/storageAction';

export default function Contact() {
  const {
    userInput,
    setUserInput,
    errorState,
    action: { handleChange, handleBlur, handleSubmit },
  } = useContactHandler();

  useLoadSessionUserInput(setUserInput);

  return (
    <ContactForm
      handleSubmit={handleSubmit}
      errorState={errorState}
      handleChange={handleChange}
      handleBlur={handleBlur}
      userInput={userInput}
    />
  );
}

function useLoadSessionUserInput(
  setUserInput: UseContactHandlerReturn['setUserInput'],
) {
  useEffect(() => {
    const result = storageAction.getItem<UserInput>('formInput');
    if (result.ok && result.data) {
      setUserInput(result.data);
    }
  }, [setUserInput]);
}
