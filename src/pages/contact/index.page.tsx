import React, { useEffect } from 'react';
import {
  useContactHandler,
  UseContactHandlerReturn,
} from '@/pages/contact/hooks/useContactHandler';
import { ContactForm } from '@/pages/contact/components/ContactForm';
import { UserInput } from './types';
import { loadSessionData } from './confirm/logics/sessionStorage';

export default function Contact() {
  const {
    userInput,
    changeUserInput,
    errorState,
    action: { handleChange, createOnBlur, handleSubmit },
  } = useContactHandler();

  useLoadSessionUserInput(changeUserInput);

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
  changeUserInput: UseContactHandlerReturn['changeUserInput'],
) {
  useEffect(() => {
    const result = loadSessionData<UserInput>('formInput');
    if (result.ok && result.data) {
      changeUserInput(result.data);
    }
  }, [changeUserInput]);
}
