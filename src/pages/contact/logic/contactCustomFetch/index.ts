import { customFetch } from '@/logics/customFetch';
import { UserInput } from '@/pages/contact/type';
import { CustomFetchType, SendResponse } from '@/types/customFetch';
import toast from 'react-hot-toast';

export const contactCustomFetch = async (
  options: CustomFetchType<UserInput>,
): Promise<boolean> => {
  const result = await customFetch<UserInput, SendResponse>(options);

  if (!result.ok) {
    const status = result.response?.status;
    console.error(result.error, result.response?.status);
    // setIsErrorResult(true);

    switch (status) {
      case 400:
      case 422: {
        toast.error('通信に失敗しました。もう一度お試しください。');
        break;
      }
      case 429: {
        toast.error('リクエストが多すぎます。しばらくしてからお試しください。');
        break;
      }

      default: {
        toast.error(
          'サーバーでエラーが発生しました。時間をおいて再度お試しください。',
        );
        break;
      }
    }
    return false;
  }

  if (result.data?.error) {
    console.error(result.data.error, result.data.message);
    toast.error('入力に問題がありました。時間をおいて再度お試しください');
    return false;
  }
  return true;
};
