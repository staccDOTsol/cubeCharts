"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var protobufjs_1 = require("protobufjs");
var ws_1 = __importDefault(require("ws"));
var marketId = 1; // Replace with your market ID
var ws = new ws_1.default("wss://api.cube.exchange/md/book/".concat(marketId));
var root = new protobufjs_1.Root(); // Create a root object
root.loadSync('./market_data.proto'); // Load your proto file
var MdMessage = root.lookupType('md.MdMessage'); // Look up your message type
var md = __importStar(require("./market_data")); // Replace with your types
var config = {
    mbp: true,
    mbo: true,
    trades: true,
    summary: true,
    klines: [md.KlineInterval.S1, md.KlineInterval.M1] // Enable price klines for 1 minute and 5 minutes
};
ws.on('open', function () {
    console.log("WebSocket connection to wss://api.cube.exchange/md/book/".concat(marketId, " established"));
    var buffer = MdMessage.encode(MdMessage.create(config)).finish(); // Encode your message to a buffer
    // Send the message to the server
    ws.send(buffer);
});
ws.on('message', function (data) {
    var message = JSON.parse(data.toString());
    console.log("Received message: ".concat(JSON.stringify(message)));
});
ws.on('close', function () {
    console.log("WebSocket connection to wss://api.cube.exchange/md/book/".concat(marketId, " closed"));
});
ws.on('error', function (error) {
    console.error("WebSocket error: ".concat(error.message));
});
