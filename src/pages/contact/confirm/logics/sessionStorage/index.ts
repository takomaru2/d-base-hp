import { Result } from '@/pages/contact/types';

type Success<T> = { data?: T };
type Failure = { data?: undefined };

type SessionResult<T = void> = Result<Success<T>, Failure>;

export const sessionStorageAction = {
  load: <T>(key: 'formInput'): SessionResult<T> => {
    try {
      const stored = sessionStorage.getItem(key);
      if (!stored) {
        return { ok: false };
      }
      const data: T = JSON.parse(stored);
      return { ok: true, data };
    } catch {
      return { ok: false };
    }
  },
  save: (label: string, value: unknown): SessionResult => {
    try {
      sessionStorage.setItem(label, JSON.stringify(value));
      return { ok: true };
    } catch {
      return { ok: false };
    }
  },
  remove: (label: string): SessionResult => {
    try {
      sessionStorage.removeItem(label);
      return { ok: true };
    } catch {
      return { ok: false };
    }
  },
};
