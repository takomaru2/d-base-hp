import toast from 'react-hot-toast';

type LoadSessionProps = {
  label: string;
};

type Result<T> = { data: T } | { data: undefined };

export const loadSessionData = <T>({ label }: LoadSessionProps): Result<T> => {
  try {
    const stored = sessionStorage.getItem(label);
    if (!stored) {
      toast.error('通信に失敗しました。やり直してください');
      return { data: undefined };
    }
    const data: T = JSON.parse(stored);
    return { data };
  } catch {
    toast.error('通信に失敗しました。やり直してください');
    return {
      data: undefined,
    };
  }
};
