import { Socket, io } from 'socket.io-client';
import { nanoid } from 'nanoid';
import { SocketResponse } from './types';
import { createStore, createEvent } from 'effector';

class AppSocket {
  private pendingRequests: Record<
    string,
    (response: SocketResponse<any>) => void
  > = {};

  client: Socket;
  $isConnected = createStore(false);

  connect(url: string) {
    this.client = io(url, {
      transports: ['websocket'],
    });

    this.init();
  }
  init() {
    this.client.onAny((_, response: SocketResponse) => {
      if (response.id && this.pendingRequests[response.id]) {
        this.pendingRequests[response.id](response);
        Reflect.deleteProperty(this.pendingRequests, response.id);
      }
    });

    const socketConnected = createEvent();
    this.client.on('connect', socketConnected);
    this.$isConnected.on(socketConnected, () => true);
  }

  emitWithAnswer<T, V>(actions: string, payload: T): Promise<V> {
    const id = nanoid();
    this.client.emit(actions, { ...payload, id });

    return new Promise((resolve, reject) => {
      this.pendingRequests[id] = (response: SocketResponse<V>) => {
        Reflect.deleteProperty(response, id);
        response.error ? reject(response.error) : resolve(response.payload);
      };
    });
  }
}

export const socket = new AppSocket();
