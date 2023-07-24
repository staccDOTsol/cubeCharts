import WebSocket from 'ws';
import { Root } from 'protobufjs';

const express = require('express');
const app = express();
  const root = new Root(); // Create a root object
  root.loadSync('./market_data.proto'); // Load your proto file
  const AggMessage = root.lookupType('md.AggMessage'); // Look up your message type

  const Heartbeat = root.lookupType('md.Heartbeat'); // Look up your message type

  app.set('view engine', 'ejs');
  app.listen(process.env.PORT || 3000, function() {});
var chart: any 
function updateChart(message:  any) {
    // @ts-ignore
  const tops = message
  // @ts-ignore
  return tops 
}
  let ws = new WebSocket('wss://api.cube.exchange/md/tops');
  async function doPost(req: any, res: any) {

        //console.log('name');
        res.json(chart);
}

function noop() {}

app.get('/update', (req: any, res: any) => {

    doPost(req, res)

})
var done = false 
ws.on('open', () => {
  console.log('WebSocket connection established');
  const heartbeat = setInterval(() => {
    const heartbeatMessage = Heartbeat.create({

      heartbeat: {
        heartbeat: BigInt(1),
        timestamp: BigInt(new Date().getTime() * 1000)
      }
        });
    const buffer = Heartbeat.encode(heartbeatMessage).finish();
    ws.send(buffer);
  }, 5000)
  // Create a new MdMessage instance
  const message = AggMessage.create({
    // Set the levels property to an array of AggMessage_Level instances
    // @ts-ignore

    heartbeat: {
      heartbeat: BigInt(1),
      timestamp: BigInt(new Date().getTime() * 1000)
    },

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
    chunk: BigInt(1),
    numChunks: 1
  });


  const buffer = AggMessage.encode(AggMessage.create(message)).finish(); // Encode your message to a buffer

  // Send the message to the server
  ws.send(buffer);
setInterval(async function (){


  // Create a new MdMessage instance
  const message = AggMessage.create({
    // Set the levels property to an array of AggMessage_Level instances
    // @ts-ignore
    heartbeat: {
      heartbeat: BigInt(1),
      timestamp: BigInt(new Date().getTime() * 1000)
    },

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
    chunk: BigInt(1),
    numChunks: 1
  });


  const buffer = AggMessage.encode(AggMessage.create(message)).finish(); // Encode your message to a buffer

  // Send the message to the server
  ws.send(buffer);
  
}, 1000)
});

ws.on('message', (data: WebSocket.Data) => {
try {
  // Create a new MdMessage instance
  const message = AggMessage.create({
    // Set the levels property to an array of AggMessage_Level instances
    // @ts-ignore
    heartbeat: {
      heartbeat: BigInt(1),
      timestamp: BigInt(new Date().getTime() * 1000)
    },
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
    chunk: BigInt(1),
    numChunks: 1
  });


  const buffer = AggMessage.encode(AggMessage.create(message)).finish(); // Encode your message to a buffer

  // Send the message to the server
  ws.send(buffer);
  let ctemp = (AggMessage.decode(data as Uint8Array))
  if (!Object.keys(ctemp).includes('heartbeat')) {
  chart = (AggMessage.decode(data as Uint8Array))
  }
} catch (e) {
  console.log(e)
}

});

ws.on('close', () => {
  console.log('WebSocket connection closed');
  ws = new WebSocket('wss://api.cube.exchange/md/tops');
});

app.get('/', (req: any, res: any) => {
    res.render('index');

});
