type Result<T = void> =
  | { ok: true; data?: T }
  | { ok: false; data?: undefined };

export const loadSessionData = <T>(key: string): Result<T> => {
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
};

export const saveSessionData = (label: string, value: unknown): Result => {
  try {
    sessionStorage.setItem(label, JSON.stringify(value));
    return { ok: true };
  } catch {
    return { ok: false };
  }
};

export const removeSessionData = (label: string): Result => {
  try {
    sessionStorage.removeItem(label);
    return { ok: true };
  } catch {
    return { ok: false };
  }
};
