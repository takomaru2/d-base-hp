import { CustomFetchType, SendResponse } from '@/types/customFetch';

type FetchResult<T> =
  | { ok: true; data: T | undefined; response: Response }
  | { ok: false; error: Error; data?: T; response?: Response };

export const customFetch = async <TBody = unknown, TData = SendResponse>({
  resource,
  method = 'POST',
  body,
}: CustomFetchType<TBody>): Promise<FetchResult<TData>> => {
  try {
    const response = await fetch(resource, {
      method,
      headers: {
        'Content-Type': 'application/json',
      },
      ...(body === undefined ? {} : { body: JSON.stringify(body) }),
    });

    const isNoContent = response.status === 204 || response.status === 205;

    if (isNoContent) {
      return response.ok
        ? { ok: true, data: undefined, response }
        : { ok: false, error: new Error(`HTTP ${response.status}`), response };
    }

    const contentType = (
      response.headers.get('content-type') ?? ''
    ).toLowerCase();
    if (!contentType.includes('json')) {
      return {
        ok: false,
        error: new Error('Response is not JSON'),
        response,
      };
    }
    try {
      const data = (await response.json()) as TData;
      return response.ok
        ? { ok: true, data, response }
        : {
            ok: false,
            error: new Error(`HTTP ${response.status}`),
            response,
            data,
          };
    } catch {
      return {
        ok: false,
        error: new Error('Failed to parse JSON'),
        response: response,
      };
    }
  } catch (error) {
    return {
      ok: false,
      error: new Error(`Network error: ${(error as Error).message}`),
    };
  }
};
