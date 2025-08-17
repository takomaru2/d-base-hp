type LoadSessionProps = {
  label: string;
};

type Result<T> = { ok: true; data?: T } | { ok: false; data?: undefined };
type OpResult = { ok: true } | { ok: false };

export const loadSessionData = <T>({ label }: LoadSessionProps): Result<T> => {
  try {
    const stored = sessionStorage.getItem(label);
    if (!stored) {
      return {
        ok: false,
        data: undefined,
      };
    }
    const data: T = JSON.parse(stored);
    return { ok: true, data };
  } catch {
    return {
      ok: false,
      data: undefined,
    };
  }
};

export const saveSessionData = (label: string, value: unknown): OpResult => {
  try {
    sessionStorage.setItem(label, JSON.stringify(value));
    return {
      ok: true,
    };
  } catch {
    return {
      ok: false,
    };
  }
};

export const removeSessionData = (label: string): OpResult => {
  try {
    sessionStorage.removeItem(label);
    return {
      ok: true,
    };
  } catch {
    return {
      ok: false,
    };
  }
};
