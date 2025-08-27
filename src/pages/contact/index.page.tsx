import React from 'react';
import { useContactHandler } from '@/pages/contact/hooks/useContactHandler';
import { ContactForm } from '@/pages/contact/components/ContactForm';

export default function Contact() {
  const { userInput, errorState, action } = useContactHandler();

  action.useLoadStorage();

  return (
    <ContactForm
      handleSubmit={action.handleSubmit}
      errorState={errorState}
      handleChange={action.handleChange}
      handleBlur={action.handleBlur}
      userInput={userInput}
    />
  );
}
