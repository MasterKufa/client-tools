export type SocketResponse<T = 'success' | 'error'> = {
  id?: string;
  error?: string;
  payload: T;
};
