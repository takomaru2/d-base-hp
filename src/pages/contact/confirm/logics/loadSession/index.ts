import { UserInput } from '@/pages/contact/type';

export const loadSessionData = () => {
  try {
    const input: UserInput = JSON.parse(
      sessionStorage.getItem('formInput') || '',
    );
    return { input };
  } catch (error) {
    console.error('パースエラー:', error);
    return {
      input: undefined,
    };
  }
};
