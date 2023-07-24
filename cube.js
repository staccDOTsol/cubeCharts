"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var ws_1 = __importDefault(require("ws"));
var protobufjs_1 = require("protobufjs");
var express = require('express');
var app = express();
var root = new protobufjs_1.Root(); // Create a root object
root.loadSync('./market_data.proto'); // Load your proto file
var AggMessage = root.lookupType('md.AggMessage'); // Look up your message type
var Heartbeat = root.lookupType('md.Heartbeat'); // Look up your message type
app.set('view engine', 'ejs');
app.listen(process.env.PORT || 3000, function () { });
var chart;
function updateChart(message) {
    // @ts-ignore
    var tops = message;
    // @ts-ignore
    return tops;
}
var ws = new ws_1.default('wss://api.cube.exchange/md/tops');
function doPost(req, res) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            //console.log('name');
            res.json(chart);
            return [2 /*return*/];
        });
    });
}
function noop() { }
app.get('/update', function (req, res) {
    doPost(req, res);
});
ws.on('open', function () {
    console.log('WebSocket connection established');
    var heartbeat = setInterval(function () {
        var heartbeatMessage = Heartbeat.create({
        // Set properties of the heartbeat object here
        });
        var buffer = Heartbeat.encode(heartbeatMessage).finish();
        ws.send(buffer);
    }, 5000);
    var heartbeatMessage = Heartbeat.create({
    // Set properties of the heartbeat object here
    });
    var buffer2 = Heartbeat.encode(heartbeatMessage).finish();
    ws.send(buffer2);
    // Create a new MdMessage instance
    var message = AggMessage.create({
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
    var buffer = AggMessage.encode(AggMessage.create(message)).finish(); // Encode your message to a buffer
    // Send the message to the server
    ws.send(buffer);
    setInterval(function () {
        return __awaiter(this, void 0, void 0, function () {
            var message, buffer;
            return __generator(this, function (_a) {
                message = AggMessage.create({
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
                buffer = AggMessage.encode(AggMessage.create(message)).finish();
                // Send the message to the server
                ws.send(buffer);
                return [2 /*return*/];
            });
        });
    }, 1000);
});
ws.on('message', function (data) {
    // Create a new MdMessage instance
    var message = AggMessage.create({
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
    var buffer = AggMessage.encode(AggMessage.create(message)).finish(); // Encode your message to a buffer
    // Send the message to the server
    ws.send(buffer);
    chart = (AggMessage.decode(data));
});
ws.on('close', function () {
    console.log('WebSocket connection closed');
    ws = new ws_1.default('wss://api.cube.exchange/md/tops');
});
app.get('/', function (req, res) {
    res.render('index');
});
