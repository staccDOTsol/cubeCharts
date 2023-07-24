import WebSocket from 'ws';
import { Root } from 'protobufjs';

const express = require('express');
const app = express();
  const root = new Root(); // Create a root object
  root.loadSync('./market_data.proto'); // Load your proto file
  const AggMessage = root.lookupType('md.AggMessage'); // Look up your message type

var chart: any 
function updateChart(message: typeof AggMessage) {
    // @ts-ignore
  const tops = message.topOfBooks.tops;
  // @ts-ignore
  return tops 
}
  const ws = new WebSocket('wss://api.cube.exchange/md/tops');
  async function doPost(req: any, res: any) {

        //console.log('name');
        res.json(chart);
}

app.get('/update', (req: any, res: any) => {

    doPost(req, res)

})
ws.on('open', () => {
  console.log('WebSocket connection established');
  let i = 0
    setInterval(() => {
  // Create a new MdMessage instance
  const message = AggMessage.create({
    // Set the levels property to an array of AggMessage_Level instances
    // @ts-ignore
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
    chunk: 1,
    numChunks: 1
  });


  const buffer = AggMessage.encode(AggMessage.create(message)).finish(); // Encode your message to a buffer

  // Send the message to the server
  ws.send(buffer);
}, 1000)

});

ws.on('message', (data: WebSocket.Data) => {
  chart = AggMessage.decode(data as Uint8Array)
});

ws.on('close', () => {
  console.log('WebSocket connection closed');
});

app.get('/', (req: any, res: any) => {
    res.render('index');

});

app.set('view engine', 'ejs');
app.listen(process.env.PORT || 3000, function() {});
