import React, { useEffect } from 'react';
import { useContactHandler } from '@/pages/contact/hooks/useContactHandler';
import { ContactForm } from '@/pages/contact/components/ContactForm';
import { loadSessionData } from '@/pages/contact/confirm/logics/loadSession';
import { UserInput } from '@/pages/contact/type';

export default function Contact() {
  const {
    userInput,
    setUserInput,
    errorState,
    action: { handleChange, createOnBlur, handleSubmit },
  } = useContactHandler();

  useEffect(() => {
    const result = loadSessionData<UserInput>({ label: 'formInput' });
    if (result.data !== undefined) {
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
