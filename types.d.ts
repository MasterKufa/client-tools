import { Event, Store } from 'effector';
import { Socket } from 'socket.io-client';
import { Response } from './src/client-socket';
import { PayloadType } from './src/notification';
import { appSocket } from './src/client-socket/socket';

declare namespace Notification {
  type Payload = PayloadType;
  declare const Component: React.FC;
  declare const add: Event;
}

declare namespace socket {
  type Response = Response;

  declare const client: typeof appSocket.client;
  declare const $isConnected: typeof appSocket.$isConnected;
  declare const emitWithAnswer: typeof appSocket.emitWithAnswer;
}
