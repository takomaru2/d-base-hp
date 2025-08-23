import React, { useEffect } from 'react';
import {
  useContactHandler,
  UseContactHandlerReturn,
} from '@/pages/contact/hooks/useContactHandler';
import { ContactForm } from '@/pages/contact/components/ContactForm';
import { UserInput } from './types';
import { sessionStorageAction } from '@/pages/contact/confirm/logics/sessionStorage';

export default function Contact() {
  const {
    userInput,
    setUserInput,
    errorState,
    action: { handleChange, createOnBlur, handleSubmit },
  } = useContactHandler();

  useLoadSessionUserInput(setUserInput);

  return (
    <ContactForm
      handleSubmit={handleSubmit}
      errorState={errorState}
      handleChange={handleChange}
      createOnBlur={createOnBlur}
      userInput={userInput}
    />
  );
}

function useLoadSessionUserInput(
  setUserInput: UseContactHandlerReturn['setUserInput'],
) {
  useEffect(() => {
    const result = sessionStorageAction.load<UserInput>('formInput');
    if (result.ok && result.data) {
      setUserInput(result.data);
    }
  }, [setUserInput]);
}
