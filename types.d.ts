import { Event, Store } from 'effector';
import { Socket } from 'socket.io-client';
import { socket, SocketResponse } from './src/client-socket';
import * as Notification from './src/notification';

declare namespace Notification {
  type PayloadType = Notification.PayloadType;
  declare const Component: typeof Notification.Component;
  declare const add: typeof Notification.add;
}

declare namespace socket {
  type Response = SocketResponse;

  declare const client: typeof socket.client;
  declare const $isConnected: typeof socket.$isConnected;
  declare const emitWithAnswer: typeof socket.emitWithAnswer;
}
