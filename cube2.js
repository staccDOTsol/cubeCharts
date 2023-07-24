"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var marketId = 1; // Replace with your market ID
var ws = new ws_1.default("wss://api.cube.exchange/md/book/".concat(marketId));
ws.on('open', function () {
    console.log("WebSocket connection to wss://api.cube.exchange/md/book/".concat(marketId, " established"));
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
