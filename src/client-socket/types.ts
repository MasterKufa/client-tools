export type SocketResponse<T = "success" | "error"> = {
  requestId?: string;
  error?: string;
  payload: T;
};

export enum SocketErrors {
  UNAUTHORIZED = "UNAUTHORIZED",
}
