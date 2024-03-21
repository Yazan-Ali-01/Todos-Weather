/* eslint-disable @typescript-eslint/no-explicit-any */
class WebSocketService {
  private socket: WebSocket | null = null;
  private url: string;

  constructor(url: string) {
    this.url = url;
  }

  connect(
    onMessage: (data: any) => void,
    onOpen?: () => void,
    onClose?: () => void,
    onError?: (error: Event) => void
  ) {
    this.socket = new WebSocket(this.url);

    this.socket.onopen = (event) => {
      console.log('WebSocket open:', event);
      if (onOpen) onOpen();
    };

    this.socket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      onMessage(data);
    };

    this.socket.onerror = (event) => {
      console.error('WebSocket error:', event);
      if (onError) onError(event);
    };

    this.socket.onclose = (event) => {
      console.log('WebSocket closed:', event);
      if (onClose) onClose();
      // Optionally, implement reconnect logic here
    };
  }

  sendMessage(message: any) {
    if (!this.socket || this.socket.readyState !== WebSocket.OPEN) {
      console.error('WebSocket is not connected.');
      return;
    }
    this.socket.send(JSON.stringify(message));
  }

  disconnect() {
    if (this.socket) {
      this.socket.close();
      this.socket = null;
    }
  }
}

const webSocketURL = process.env.WEBSOCKET_URL as string;
export const webSocketService = new WebSocketService(webSocketURL);
