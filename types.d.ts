import { Event, Store } from 'effector';
import { Socket } from 'socket.io-client';

declare namespace Notification {
  type Payload = {
    message: string;
    type: AlertColor;
  };
  declare const Component: React.FC;
  declare const add: Event;
}

declare namespace socket {
  type Response<T = 'success' | 'error'> = {
    id?: string;
    error?: string;
    payload: T;
  };
  declare const connect: (url: string) => void;
  declare const client: Socket;
  declare const $isConnected: Store<boolean>;
  declare const emitWithAnswer: <T, V>(
    actions: string,
    payload: T,
  ) => Promise<V>;
}
