export type Response<T = 'success' | 'error'> = {
  id?: string;
  error?: string;
  payload: T;
};
