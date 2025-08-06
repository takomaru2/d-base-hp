import { InitialInput } from '@/pages/contact/type';

export const loadSessionData = () => {
  try {
    const input: InitialInput = JSON.parse(
      sessionStorage.getItem('formInput') || '',
    );
    const selected = JSON.parse(sessionStorage.getItem('size') || '');
    return { input, selected };
  } catch (error) {
    console.error('パースエラー:', error);
    return {
      input: undefined,
      selected: [],
    };
  }
};
