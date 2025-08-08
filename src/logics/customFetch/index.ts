import { CustomFetchType, SendResponse } from '@/types/customFetch';

export const customFetch = async <T = unknown, TData = SendResponse>({
  resource,
  method = 'POST',
  body,
}: CustomFetchType<T>): Promise<{
  response: Response;
  data: TData | undefined;
}> => {
  const response = await fetch(resource, {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
    ...(body ? { body: JSON.stringify(body) } : {}),
  });

  let data: TData | undefined = undefined;
  const contentType = response.headers.get('content-type') ?? '';

  if (contentType.includes('application/json')) {
    try {
      data = (await response.json()) as TData;
    } catch {
      data = undefined;
    }
  }

  return { response, data };
};
