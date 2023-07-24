import { Root } from 'protobufjs';
import WebSocket from 'ws';

const marketId = 1; // Replace with your market ID
const ws = new WebSocket(`wss://api.cube.exchange/md/book/${marketId}`);


const root = new Root(); // Create a root object
root.loadSync('./market_data.proto'); // Load your proto file
const MdMessage = root.lookupType('md.MdMessage'); // Look up your message type

import * as md from './market_data'; // Replace with your types
const config:  md.Config = {
  mbp: true, // Enable MBP feeds
  mbo: true, // Disable MBO feeds
  trades: true, // Enable recent trades
  summary: true, // Enable 24h summary
  klines: [md.KlineInterval.S1, md.KlineInterval.M1] // Enable price klines for 1 minute and 5 minutes
};



ws.on('open', () => {
  console.log(`WebSocket connection to wss://api.cube.exchange/md/book/${marketId} established`);

  const buffer = MdMessage.encode(MdMessage.create(config)).finish(); // Encode your message to a buffer

  // Send the message to the server
  ws.send(buffer);
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

