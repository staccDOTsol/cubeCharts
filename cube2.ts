import { Root } from 'protobufjs';
import WebSocket from 'ws';
let requestId = 0;
import * as md from './market_data'; // Replace with your types
const is = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]; // Replace with your market ID
function doit(i: number) {

  const ws = new WebSocket(`wss://api.cube.exchange/md/book/${i}`);
requestId++

  const root = new Root(); // Create a root object
  root.loadSync('./market_data.proto'); // Load your proto file
  const MarketByPrice = root.lookupType('md.MarketByPrice'); // Look up your message type
  const Heartbeat = root.lookupType('md.Heartbeat'); // Look up your message type
  const heartbeat = Heartbeat.create({
    heartbeat: BigInt(requestId),
    timestamp: BigInt(new Date().getTime() * 1000)
  });

  const config:  md.Config = {
    mbp: false, // Enable MBP feeds
    mbo: true, // Disable MBO feeds
    trades: true, // Enable recent trades
    summary: true, // Enable 24h summary
    klines: [md.KlineInterval.S1, md.KlineInterval.M1] // Enable price klines for 1 minute and 5 minutes
  };
  const mbp = MarketByPrice.create({
   config,
   heartbeat,
   levels: [
     {
       price: BigInt(100),
       quantity: BigInt(10)
     },
     {
       price: BigInt(100),
       quantity: BigInt(20)
     }
   ],
   chunk: (requestId),
   numChunks: 1
  });
  

  
  
  ws.on('open', () => {
    console.log(`WebSocket connection to wss://api.cube.exchange/md/book/${i} established`);
  
    var buffer = MarketByPrice.encode(MarketByPrice.create(mbp)).finish(); // Encode your message to a buffer
  
    // Send the message to the server
    ws.send(buffer);
  });
  
  ws.on('message', (data: WebSocket.Data) => {
  
    console.log(1)
    const message = JSON.parse(data.toString());
    console.log(`Received message: ${JSON.stringify(message)}`);
  });
  
  ws.on('close', () => {
    console.log(`WebSocket connection to wss://api.cube.exchange/md/book/${i} closed`);
  });
  
  ws.on('error', (error: Error) => {
    console.error(`WebSocket error: ${error.message}`);
  });
  
}
for (var i of is){
  doit(i)
}