import React, { useEffect } from 'react';
import { useContactHandler } from '@/pages/contact/hooks/useContactHandler';
import { ContactForm } from '@/pages/contact/components/ContactForm';
import { UserInput } from './types';
import { loadSessionData } from './confirm/logics/sessionStorage';

export default function Contact() {
  const {
    userInput,
    setUserInput,
    errorState,
    action: { handleChange, createOnBlur, handleSubmit },
  } = useContactHandler();

  useEffect(() => {
    const result = loadSessionData<UserInput>('formInput');
    if (result.ok && result.data) {
      setUserInput(result.data);
    }
  }, []);

  return (
    <ContactForm
      handleSubmit={handleSubmit}
      errorState={errorState}
      handleChange={handleChange}
      createOnBlur={createOnBlur}
      contactForm={userInput}
      selectedSize={userInput.size}
    />
  );
}
