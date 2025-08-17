import { customFetch } from '@/logics/customFetch';
import { UserInput } from '@/pages/contact/type';
import { SendResponse } from '@/types/customFetch';
import toast from 'react-hot-toast';
import { TOAST_MESSAGES } from '@/pages/contact/const/message';

export const postContact = async (userInput: UserInput): Promise<boolean> => {
  const result = await customFetch<UserInput, SendResponse>({
    resource: '/api/send/route',
    method: 'POST',
    body: userInput,
  });

  if (!result.ok) {
    const status = result.response?.status;

    switch (status) {
      case 400:
      case 422: {
        toast.error(TOAST_MESSAGES.NETWORK_ERROR);
        break;
      }
      case 429: {
        toast.error(TOAST_MESSAGES.TOO_MANY_REQUESTS);
        break;
      }
      default: {
        toast.error(TOAST_MESSAGES.SERVER_ERROR);
        break;
      }
    }
    return false;
  }

  if (result.data?.error) {
    toast.error(TOAST_MESSAGES.INPUT_ERROR);
    return false;
  }
  return true;
};
