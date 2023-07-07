import { Socket, io } from "socket.io-client";
import { nanoid } from "nanoid";
import { SocketResponse } from "./types";
import { createStore, createEvent } from "effector";

class AppSocket {
  private pendingRequests: Record<
    string,
    (response: SocketResponse<any>) => void
  > = {};

  client: Socket;
  $isConnected = createStore(false);

  connect(url: string) {
    this.client = io(url, {
      transports: ["websocket"],
    });

    this.init();
  }
  private init() {
    this.client.onAny((_, response: SocketResponse) => {
      if (response.requestId && this.pendingRequests[response.requestId]) {
        this.pendingRequests[response.requestId](response);
        Reflect.deleteProperty(this.pendingRequests, response.requestId);
      }
    });

    const socketConnected = createEvent();
    this.client.on("connect", socketConnected);
    this.$isConnected.on(socketConnected, () => true);
  }

  emitWithAnswer<T, V>(actions: string, payload: T): Promise<V> {
    const requestId = nanoid();
    this.client.emit(actions, { ...payload, requestId });

    return new Promise((resolve, reject) => {
      this.pendingRequests[requestId] = (response: SocketResponse<V>) => {
        Reflect.deleteProperty(response, requestId);
        response.error ? reject(response.error) : resolve(response.payload);
      };
    });
  }
}

export const socket = new AppSocket();
