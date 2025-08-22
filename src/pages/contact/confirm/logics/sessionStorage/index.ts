type SessionResult<T = void> =
  | { ok: true; data?: T }
  | { ok: false; data?: undefined };

export const sessionStorageData = {
  load: <T>(key: string): SessionResult<T> => {
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
