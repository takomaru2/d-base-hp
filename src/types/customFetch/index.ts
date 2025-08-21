export type CustomFetchType<T> = {
  resource: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: T;
};

export type SendResponse = {
  message?: string;
  error?: string;
};
