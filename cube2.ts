import WebSocket from 'ws';

const marketId = 1; // Replace with your market ID
const ws = new WebSocket(`wss://api.cube.exchange/md/book/${marketId}`);

ws.on('open', () => {
  console.log(`WebSocket connection to wss://api.cube.exchange/md/book/${marketId} established`);
});

ws.on('message', (data: WebSocket.Data) => {
  const message = JSON.parse(data.toString());
  console.log(`Received message: ${JSON.stringify(message)}`);
});

ws.on('close', () => {
  console.log(`WebSocket connection to wss://api.cube.exchange/md/book/${marketId} closed`);
});

ws.on('error', (error: Error) => {
  console.error(`WebSocket error: ${error.message}`);
});