import React, { useEffect } from 'react';
import { useContactHandler } from '@/pages/contact/hooks/useContactHandler';
import { ContactForm } from '@/pages/contact/components/ContactForm';

export default function Contact() {
  const {
    userInput,
    setUserInput,
    errorState,
    action: { handleChange, createOnBlur, handleSubmit },
  } = useContactHandler();

  useEffect(() => {
    const sessionInput = sessionStorage.getItem('formInput');
    if (sessionInput) {
      setUserInput(JSON.parse(sessionInput));
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
