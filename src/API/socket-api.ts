import { io, Socket } from 'socket.io-client';

class SocketApi {
  static socket: null | Socket = null;

  static createConnection() {
    this.socket = io(import.meta.env.VITE_API_WS_URL);

    this.socket.on('connect', () => {
      console.log('connected');
    });

    this.socket.on('disconnect', () => {
      console.log('disconnected');
    });
  }
}

export default SocketApi;
