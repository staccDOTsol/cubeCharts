"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Config = exports.ClientMessage = exports.TopOfBooks = exports.TopOfBook = exports.AggMessage = exports.MdMessages = exports.Heartbeat = exports.Kline = exports.Summary = exports.Trades_Trade = exports.Trades = exports.MarketByOrderDiff_Diff = exports.MarketByOrderDiff = exports.MarketByOrder_Order = exports.MarketByOrder = exports.MarketByPriceDiff_Diff = exports.MarketByPriceDiff = exports.MarketByPrice_Level = exports.MarketByPrice = exports.MdMessage = exports.KlineInterval = exports.Side = exports.MarketByOrderDiff_OrderOp = exports.MarketByPriceDiff_DiffOp = void 0;
var runtime_1 = require("@protobuf-ts/runtime");
var runtime_2 = require("@protobuf-ts/runtime");
var runtime_3 = require("@protobuf-ts/runtime");
var runtime_4 = require("@protobuf-ts/runtime");
var runtime_5 = require("@protobuf-ts/runtime");
/**
 * The operation to apply for this price level. Currently, new price levels
 * are created with `REPLACE`.
 *
 * @generated from protobuf enum md.MarketByPriceDiff.DiffOp
 */
var MarketByPriceDiff_DiffOp;
(function (MarketByPriceDiff_DiffOp) {
    /**
     * @generated from protobuf enum value: ADD = 0;
     */
    MarketByPriceDiff_DiffOp[MarketByPriceDiff_DiffOp["ADD"] = 0] = "ADD";
    /**
     * @generated from protobuf enum value: REMOVE = 1;
     */
    MarketByPriceDiff_DiffOp[MarketByPriceDiff_DiffOp["REMOVE"] = 1] = "REMOVE";
    /**
     * @generated from protobuf enum value: REPLACE = 2;
     */
    MarketByPriceDiff_DiffOp[MarketByPriceDiff_DiffOp["REPLACE"] = 2] = "REPLACE";
})(MarketByPriceDiff_DiffOp || (exports.MarketByPriceDiff_DiffOp = MarketByPriceDiff_DiffOp = {}));
/**
 * @generated from protobuf enum md.MarketByOrderDiff.OrderOp
 */
var MarketByOrderDiff_OrderOp;
(function (MarketByOrderDiff_OrderOp) {
    /**
     * @generated from protobuf enum value: ADD = 0;
     */
    MarketByOrderDiff_OrderOp[MarketByOrderDiff_OrderOp["ADD"] = 0] = "ADD";
    /**
     * @generated from protobuf enum value: REMOVE = 1;
     */
    MarketByOrderDiff_OrderOp[MarketByOrderDiff_OrderOp["REMOVE"] = 1] = "REMOVE";
    /**
     * @generated from protobuf enum value: REPLACE = 2;
     */
    MarketByOrderDiff_OrderOp[MarketByOrderDiff_OrderOp["REPLACE"] = 2] = "REPLACE";
})(MarketByOrderDiff_OrderOp || (exports.MarketByOrderDiff_OrderOp = MarketByOrderDiff_OrderOp = {}));
/**
 * Side specifies whether the level, order, or diff, is for buying or selling
 * the base asset.
 *
 * @generated from protobuf enum md.Side
 */
var Side;
(function (Side) {
    /**
     * Bids buy the base asset with the quote asset.
     *
     * @generated from protobuf enum value: BID = 0;
     */
    Side[Side["BID"] = 0] = "BID";
    /**
     * Asks (or offers) sell the base asset and get the quote asset.
     *
     * @generated from protobuf enum value: ASK = 1;
     */
    Side[Side["ASK"] = 1] = "ASK";
})(Side || (exports.Side = Side = {}));
/**
 * The candlestick interval.
 *
 * @generated from protobuf enum md.KlineInterval
 */
var KlineInterval;
(function (KlineInterval) {
    /**
     * 1 second
     *
     * @generated from protobuf enum value: S1 = 0;
     */
    KlineInterval[KlineInterval["S1"] = 0] = "S1";
    /**
     * 1 minute
     *
     * @generated from protobuf enum value: M1 = 1;
     */
    KlineInterval[KlineInterval["M1"] = 1] = "M1";
    /**
     * 15 minutes
     *
     * @generated from protobuf enum value: M15 = 2;
     */
    KlineInterval[KlineInterval["M15"] = 2] = "M15";
    /**
     * 1 hour
     *
     * @generated from protobuf enum value: H1 = 3;
     */
    KlineInterval[KlineInterval["H1"] = 3] = "H1";
    /**
     * 4 hours
     *
     * @generated from protobuf enum value: H4 = 4;
     */
    KlineInterval[KlineInterval["H4"] = 4] = "H4";
    /**
     * 1 day
     *
     * @generated from protobuf enum value: D1 = 5;
     */
    KlineInterval[KlineInterval["D1"] = 5] = "D1";
})(KlineInterval || (exports.KlineInterval = KlineInterval = {}));
// @generated message type with reflection information, may provide speed optimized methods
var MdMessage$Type = /** @class */ (function (_super) {
    __extends(MdMessage$Type, _super);
    function MdMessage$Type() {
        return _super.call(this, "md.MdMessage", [
            { no: 1, name: "heartbeat", kind: "message", oneof: "inner", T: function () { return exports.Heartbeat; } },
            { no: 2, name: "summary", kind: "message", oneof: "inner", T: function () { return exports.Summary; } },
            { no: 3, name: "trades", kind: "message", oneof: "inner", T: function () { return exports.Trades; } },
            { no: 4, name: "mboSnapshot", kind: "message", oneof: "inner", T: function () { return exports.MarketByOrder; } },
            { no: 5, name: "mboDiff", kind: "message", oneof: "inner", T: function () { return exports.MarketByOrderDiff; } },
            { no: 6, name: "mbpSnapshot", kind: "message", oneof: "inner", T: function () { return exports.MarketByPrice; } },
            { no: 7, name: "mbpDiff", kind: "message", oneof: "inner", T: function () { return exports.MarketByPriceDiff; } },
            { no: 8, name: "kline", kind: "message", oneof: "inner", T: function () { return exports.Kline; } }
        ]) || this;
    }
    MdMessage$Type.prototype.create = function (value) {
        var message = { inner: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MdMessage$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* md.Heartbeat heartbeat */ 1:
                    message.inner = {
                        oneofKind: "heartbeat",
                        heartbeat: exports.Heartbeat.internalBinaryRead(reader, reader.uint32(), options, message.inner.heartbeat)
                    };
                    break;
                case /* md.Summary summary */ 2:
                    message.inner = {
                        oneofKind: "summary",
                        summary: exports.Summary.internalBinaryRead(reader, reader.uint32(), options, message.inner.summary)
                    };
                    break;
                case /* md.Trades trades */ 3:
                    message.inner = {
                        oneofKind: "trades",
                        trades: exports.Trades.internalBinaryRead(reader, reader.uint32(), options, message.inner.trades)
                    };
                    break;
                case /* md.MarketByOrder mboSnapshot */ 4:
                    message.inner = {
                        oneofKind: "mboSnapshot",
                        mboSnapshot: exports.MarketByOrder.internalBinaryRead(reader, reader.uint32(), options, message.inner.mboSnapshot)
                    };
                    break;
                case /* md.MarketByOrderDiff mboDiff */ 5:
                    message.inner = {
                        oneofKind: "mboDiff",
                        mboDiff: exports.MarketByOrderDiff.internalBinaryRead(reader, reader.uint32(), options, message.inner.mboDiff)
                    };
                    break;
                case /* md.MarketByPrice mbpSnapshot */ 6:
                    message.inner = {
                        oneofKind: "mbpSnapshot",
                        mbpSnapshot: exports.MarketByPrice.internalBinaryRead(reader, reader.uint32(), options, message.inner.mbpSnapshot)
                    };
                    break;
                case /* md.MarketByPriceDiff mbpDiff */ 7:
                    message.inner = {
                        oneofKind: "mbpDiff",
                        mbpDiff: exports.MarketByPriceDiff.internalBinaryRead(reader, reader.uint32(), options, message.inner.mbpDiff)
                    };
                    break;
                case /* md.Kline kline */ 8:
                    message.inner = {
                        oneofKind: "kline",
                        kline: exports.Kline.internalBinaryRead(reader, reader.uint32(), options, message.inner.kline)
                    };
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MdMessage$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* md.Heartbeat heartbeat = 1; */
        if (message.inner.oneofKind === "heartbeat")
            exports.Heartbeat.internalBinaryWrite(message.inner.heartbeat, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.Summary summary = 2; */
        if (message.inner.oneofKind === "summary")
            exports.Summary.internalBinaryWrite(message.inner.summary, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.Trades trades = 3; */
        if (message.inner.oneofKind === "trades")
            exports.Trades.internalBinaryWrite(message.inner.trades, writer.tag(3, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.MarketByOrder mboSnapshot = 4; */
        if (message.inner.oneofKind === "mboSnapshot")
            exports.MarketByOrder.internalBinaryWrite(message.inner.mboSnapshot, writer.tag(4, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.MarketByOrderDiff mboDiff = 5; */
        if (message.inner.oneofKind === "mboDiff")
            exports.MarketByOrderDiff.internalBinaryWrite(message.inner.mboDiff, writer.tag(5, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.MarketByPrice mbpSnapshot = 6; */
        if (message.inner.oneofKind === "mbpSnapshot")
            exports.MarketByPrice.internalBinaryWrite(message.inner.mbpSnapshot, writer.tag(6, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.MarketByPriceDiff mbpDiff = 7; */
        if (message.inner.oneofKind === "mbpDiff")
            exports.MarketByPriceDiff.internalBinaryWrite(message.inner.mbpDiff, writer.tag(7, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.Kline kline = 8; */
        if (message.inner.oneofKind === "kline")
            exports.Kline.internalBinaryWrite(message.inner.kline, writer.tag(8, runtime_1.WireType.LengthDelimited).fork(), options).join();
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MdMessage$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MdMessage
 */
exports.MdMessage = new MdMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MarketByPrice$Type = /** @class */ (function (_super) {
    __extends(MarketByPrice$Type, _super);
    function MarketByPrice$Type() {
        return _super.call(this, "md.MarketByPrice", [
            { no: 1, name: "levels", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: function () { return exports.MarketByPrice_Level; } },
            { no: 2, name: "chunk", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "numChunks", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]) || this;
    }
    MarketByPrice$Type.prototype.create = function (value) {
        var message = { levels: [], chunk: 0, numChunks: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MarketByPrice$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* repeated md.MarketByPrice.Level levels */ 1:
                    message.levels.push(exports.MarketByPrice_Level.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 chunk */ 2:
                    message.chunk = reader.uint32();
                    break;
                case /* uint32 numChunks */ 3:
                    message.numChunks = reader.uint32();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MarketByPrice$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* repeated md.MarketByPrice.Level levels = 1; */
        for (var i = 0; i < message.levels.length; i++)
            exports.MarketByPrice_Level.internalBinaryWrite(message.levels[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 chunk = 2; */
        if (message.chunk !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.chunk);
        /* uint32 numChunks = 3; */
        if (message.numChunks !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.numChunks);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MarketByPrice$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MarketByPrice
 */
exports.MarketByPrice = new MarketByPrice$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MarketByPrice_Level$Type = /** @class */ (function (_super) {
    __extends(MarketByPrice_Level$Type, _super);
    function MarketByPrice_Level$Type() {
        return _super.call(this, "md.MarketByPrice.Level", [
            { no: 1, name: "price", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "quantity", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "side", kind: "enum", T: function () { return ["md.Side", Side]; } }
        ]) || this;
    }
    MarketByPrice_Level$Type.prototype.create = function (value) {
        var message = { price: 0n, quantity: 0n, side: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MarketByPrice_Level$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* uint64 price */ 1:
                    message.price = reader.uint64().toBigInt();
                    break;
                case /* uint64 quantity */ 2:
                    message.quantity = reader.uint64().toBigInt();
                    break;
                case /* md.Side side */ 3:
                    message.side = reader.int32();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MarketByPrice_Level$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* uint64 price = 1; */
        if (message.price !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.price);
        /* uint64 quantity = 2; */
        if (message.quantity !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.quantity);
        /* md.Side side = 3; */
        if (message.side !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.side);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MarketByPrice_Level$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MarketByPrice.Level
 */
exports.MarketByPrice_Level = new MarketByPrice_Level$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MarketByPriceDiff$Type = /** @class */ (function (_super) {
    __extends(MarketByPriceDiff$Type, _super);
    function MarketByPriceDiff$Type() {
        return _super.call(this, "md.MarketByPriceDiff", [
            { no: 1, name: "diffs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: function () { return exports.MarketByPriceDiff_Diff; } },
            { no: 2, name: "totalBidLevels", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "totalAskLevels", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]) || this;
    }
    MarketByPriceDiff$Type.prototype.create = function (value) {
        var message = { diffs: [], totalBidLevels: 0, totalAskLevels: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MarketByPriceDiff$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* repeated md.MarketByPriceDiff.Diff diffs */ 1:
                    message.diffs.push(exports.MarketByPriceDiff_Diff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 totalBidLevels */ 2:
                    message.totalBidLevels = reader.uint32();
                    break;
                case /* uint32 totalAskLevels */ 3:
                    message.totalAskLevels = reader.uint32();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MarketByPriceDiff$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* repeated md.MarketByPriceDiff.Diff diffs = 1; */
        for (var i = 0; i < message.diffs.length; i++)
            exports.MarketByPriceDiff_Diff.internalBinaryWrite(message.diffs[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 totalBidLevels = 2; */
        if (message.totalBidLevels !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.totalBidLevels);
        /* uint32 totalAskLevels = 3; */
        if (message.totalAskLevels !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.totalAskLevels);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MarketByPriceDiff$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MarketByPriceDiff
 */
exports.MarketByPriceDiff = new MarketByPriceDiff$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MarketByPriceDiff_Diff$Type = /** @class */ (function (_super) {
    __extends(MarketByPriceDiff_Diff$Type, _super);
    function MarketByPriceDiff_Diff$Type() {
        return _super.call(this, "md.MarketByPriceDiff.Diff", [
            { no: 1, name: "price", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "quantity", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "side", kind: "enum", T: function () { return ["md.Side", Side]; } },
            { no: 4, name: "op", kind: "enum", T: function () { return ["md.MarketByPriceDiff.DiffOp", MarketByPriceDiff_DiffOp]; } }
        ]) || this;
    }
    MarketByPriceDiff_Diff$Type.prototype.create = function (value) {
        var message = { price: 0n, quantity: 0n, side: 0, op: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MarketByPriceDiff_Diff$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* uint64 price */ 1:
                    message.price = reader.uint64().toBigInt();
                    break;
                case /* uint64 quantity */ 2:
                    message.quantity = reader.uint64().toBigInt();
                    break;
                case /* md.Side side */ 3:
                    message.side = reader.int32();
                    break;
                case /* md.MarketByPriceDiff.DiffOp op */ 4:
                    message.op = reader.int32();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MarketByPriceDiff_Diff$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* uint64 price = 1; */
        if (message.price !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.price);
        /* uint64 quantity = 2; */
        if (message.quantity !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.quantity);
        /* md.Side side = 3; */
        if (message.side !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.side);
        /* md.MarketByPriceDiff.DiffOp op = 4; */
        if (message.op !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.op);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MarketByPriceDiff_Diff$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MarketByPriceDiff.Diff
 */
exports.MarketByPriceDiff_Diff = new MarketByPriceDiff_Diff$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MarketByOrder$Type = /** @class */ (function (_super) {
    __extends(MarketByOrder$Type, _super);
    function MarketByOrder$Type() {
        return _super.call(this, "md.MarketByOrder", [
            { no: 1, name: "orders", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: function () { return exports.MarketByOrder_Order; } },
            { no: 2, name: "chunk", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "numChunks", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]) || this;
    }
    MarketByOrder$Type.prototype.create = function (value) {
        var message = { orders: [], chunk: 0, numChunks: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MarketByOrder$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* repeated md.MarketByOrder.Order orders */ 1:
                    message.orders.push(exports.MarketByOrder_Order.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 chunk */ 2:
                    message.chunk = reader.uint32();
                    break;
                case /* uint32 numChunks */ 3:
                    message.numChunks = reader.uint32();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MarketByOrder$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* repeated md.MarketByOrder.Order orders = 1; */
        for (var i = 0; i < message.orders.length; i++)
            exports.MarketByOrder_Order.internalBinaryWrite(message.orders[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 chunk = 2; */
        if (message.chunk !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.chunk);
        /* uint32 numChunks = 3; */
        if (message.numChunks !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.numChunks);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MarketByOrder$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MarketByOrder
 */
exports.MarketByOrder = new MarketByOrder$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MarketByOrder_Order$Type = /** @class */ (function (_super) {
    __extends(MarketByOrder_Order$Type, _super);
    function MarketByOrder_Order$Type() {
        return _super.call(this, "md.MarketByOrder.Order", [
            { no: 1, name: "price", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "quantity", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "exchangeOrderId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "side", kind: "enum", T: function () { return ["md.Side", Side]; } }
        ]) || this;
    }
    MarketByOrder_Order$Type.prototype.create = function (value) {
        var message = { price: 0n, quantity: 0n, exchangeOrderId: 0n, side: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MarketByOrder_Order$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* uint64 price */ 1:
                    message.price = reader.uint64().toBigInt();
                    break;
                case /* uint64 quantity */ 2:
                    message.quantity = reader.uint64().toBigInt();
                    break;
                case /* uint64 exchangeOrderId */ 3:
                    message.exchangeOrderId = reader.uint64().toBigInt();
                    break;
                case /* md.Side side */ 4:
                    message.side = reader.int32();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MarketByOrder_Order$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* uint64 price = 1; */
        if (message.price !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.price);
        /* uint64 quantity = 2; */
        if (message.quantity !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.quantity);
        /* uint64 exchangeOrderId = 3; */
        if (message.exchangeOrderId !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.exchangeOrderId);
        /* md.Side side = 4; */
        if (message.side !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.side);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MarketByOrder_Order$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MarketByOrder.Order
 */
exports.MarketByOrder_Order = new MarketByOrder_Order$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MarketByOrderDiff$Type = /** @class */ (function (_super) {
    __extends(MarketByOrderDiff$Type, _super);
    function MarketByOrderDiff$Type() {
        return _super.call(this, "md.MarketByOrderDiff", [
            { no: 1, name: "diffs", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: function () { return exports.MarketByOrderDiff_Diff; } },
            { no: 2, name: "totalBidLevels", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 3, name: "totalAskLevels", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 4, name: "totalBidOrders", kind: "scalar", T: 13 /*ScalarType.UINT32*/ },
            { no: 5, name: "totalAskOrders", kind: "scalar", T: 13 /*ScalarType.UINT32*/ }
        ]) || this;
    }
    MarketByOrderDiff$Type.prototype.create = function (value) {
        var message = { diffs: [], totalBidLevels: 0, totalAskLevels: 0, totalBidOrders: 0, totalAskOrders: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MarketByOrderDiff$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* repeated md.MarketByOrderDiff.Diff diffs */ 1:
                    message.diffs.push(exports.MarketByOrderDiff_Diff.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                case /* uint32 totalBidLevels */ 2:
                    message.totalBidLevels = reader.uint32();
                    break;
                case /* uint32 totalAskLevels */ 3:
                    message.totalAskLevels = reader.uint32();
                    break;
                case /* uint32 totalBidOrders */ 4:
                    message.totalBidOrders = reader.uint32();
                    break;
                case /* uint32 totalAskOrders */ 5:
                    message.totalAskOrders = reader.uint32();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MarketByOrderDiff$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* repeated md.MarketByOrderDiff.Diff diffs = 1; */
        for (var i = 0; i < message.diffs.length; i++)
            exports.MarketByOrderDiff_Diff.internalBinaryWrite(message.diffs[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* uint32 totalBidLevels = 2; */
        if (message.totalBidLevels !== 0)
            writer.tag(2, runtime_1.WireType.Varint).uint32(message.totalBidLevels);
        /* uint32 totalAskLevels = 3; */
        if (message.totalAskLevels !== 0)
            writer.tag(3, runtime_1.WireType.Varint).uint32(message.totalAskLevels);
        /* uint32 totalBidOrders = 4; */
        if (message.totalBidOrders !== 0)
            writer.tag(4, runtime_1.WireType.Varint).uint32(message.totalBidOrders);
        /* uint32 totalAskOrders = 5; */
        if (message.totalAskOrders !== 0)
            writer.tag(5, runtime_1.WireType.Varint).uint32(message.totalAskOrders);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MarketByOrderDiff$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MarketByOrderDiff
 */
exports.MarketByOrderDiff = new MarketByOrderDiff$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MarketByOrderDiff_Diff$Type = /** @class */ (function (_super) {
    __extends(MarketByOrderDiff_Diff$Type, _super);
    function MarketByOrderDiff_Diff$Type() {
        return _super.call(this, "md.MarketByOrderDiff.Diff", [
            { no: 1, name: "price", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "quantity", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "exchangeOrderId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "side", kind: "enum", T: function () { return ["md.Side", Side]; } },
            { no: 5, name: "op", kind: "enum", T: function () { return ["md.MarketByOrderDiff.OrderOp", MarketByOrderDiff_OrderOp]; } }
        ]) || this;
    }
    MarketByOrderDiff_Diff$Type.prototype.create = function (value) {
        var message = { price: 0n, quantity: 0n, exchangeOrderId: 0n, side: 0, op: 0 };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MarketByOrderDiff_Diff$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* uint64 price */ 1:
                    message.price = reader.uint64().toBigInt();
                    break;
                case /* uint64 quantity */ 2:
                    message.quantity = reader.uint64().toBigInt();
                    break;
                case /* uint64 exchangeOrderId */ 3:
                    message.exchangeOrderId = reader.uint64().toBigInt();
                    break;
                case /* md.Side side */ 4:
                    message.side = reader.int32();
                    break;
                case /* md.MarketByOrderDiff.OrderOp op */ 5:
                    message.op = reader.int32();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MarketByOrderDiff_Diff$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* uint64 price = 1; */
        if (message.price !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.price);
        /* uint64 quantity = 2; */
        if (message.quantity !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.quantity);
        /* uint64 exchangeOrderId = 3; */
        if (message.exchangeOrderId !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.exchangeOrderId);
        /* md.Side side = 4; */
        if (message.side !== 0)
            writer.tag(4, runtime_1.WireType.Varint).int32(message.side);
        /* md.MarketByOrderDiff.OrderOp op = 5; */
        if (message.op !== 0)
            writer.tag(5, runtime_1.WireType.Varint).int32(message.op);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MarketByOrderDiff_Diff$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MarketByOrderDiff.Diff
 */
exports.MarketByOrderDiff_Diff = new MarketByOrderDiff_Diff$Type();
// @generated message type with reflection information, may provide speed optimized methods
var Trades$Type = /** @class */ (function (_super) {
    __extends(Trades$Type, _super);
    function Trades$Type() {
        return _super.call(this, "md.Trades", [
            { no: 1, name: "trades", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: function () { return exports.Trades_Trade; } }
        ]) || this;
    }
    Trades$Type.prototype.create = function (value) {
        var message = { trades: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    Trades$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* repeated md.Trades.Trade trades */ 1:
                    message.trades.push(exports.Trades_Trade.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    Trades$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* repeated md.Trades.Trade trades = 1; */
        for (var i = 0; i < message.trades.length; i++)
            exports.Trades_Trade.internalBinaryWrite(message.trades[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return Trades$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.Trades
 */
exports.Trades = new Trades$Type();
// @generated message type with reflection information, may provide speed optimized methods
var Trades_Trade$Type = /** @class */ (function (_super) {
    __extends(Trades_Trade$Type, _super);
    function Trades_Trade$Type() {
        return _super.call(this, "md.Trades.Trade", [
            { no: 1, name: "tradeId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "price", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "aggressingSide", kind: "enum", T: function () { return ["md.Side", Side]; } },
            { no: 4, name: "restingExchangeOrderId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "fillQuantity", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "transactTime", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "aggressingExchangeOrderId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]) || this;
    }
    Trades_Trade$Type.prototype.create = function (value) {
        var message = { tradeId: 0n, price: 0n, aggressingSide: 0, restingExchangeOrderId: 0n, fillQuantity: 0n, transactTime: 0n, aggressingExchangeOrderId: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    Trades_Trade$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* uint64 tradeId */ 1:
                    message.tradeId = reader.uint64().toBigInt();
                    break;
                case /* uint64 price */ 2:
                    message.price = reader.uint64().toBigInt();
                    break;
                case /* md.Side aggressingSide */ 3:
                    message.aggressingSide = reader.int32();
                    break;
                case /* uint64 restingExchangeOrderId */ 4:
                    message.restingExchangeOrderId = reader.uint64().toBigInt();
                    break;
                case /* uint64 fillQuantity */ 5:
                    message.fillQuantity = reader.uint64().toBigInt();
                    break;
                case /* uint64 transactTime */ 6:
                    message.transactTime = reader.uint64().toBigInt();
                    break;
                case /* uint64 aggressingExchangeOrderId */ 7:
                    message.aggressingExchangeOrderId = reader.uint64().toBigInt();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    Trades_Trade$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* uint64 tradeId = 1; */
        if (message.tradeId !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.tradeId);
        /* uint64 price = 2; */
        if (message.price !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.price);
        /* md.Side aggressingSide = 3; */
        if (message.aggressingSide !== 0)
            writer.tag(3, runtime_1.WireType.Varint).int32(message.aggressingSide);
        /* uint64 restingExchangeOrderId = 4; */
        if (message.restingExchangeOrderId !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.restingExchangeOrderId);
        /* uint64 fillQuantity = 5; */
        if (message.fillQuantity !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.fillQuantity);
        /* uint64 transactTime = 6; */
        if (message.transactTime !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.transactTime);
        /* uint64 aggressingExchangeOrderId = 7; */
        if (message.aggressingExchangeOrderId !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.aggressingExchangeOrderId);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return Trades_Trade$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.Trades.Trade
 */
exports.Trades_Trade = new Trades_Trade$Type();
// @generated message type with reflection information, may provide speed optimized methods
var Summary$Type = /** @class */ (function (_super) {
    __extends(Summary$Type, _super);
    function Summary$Type() {
        return _super.call(this, "md.Summary", [
            { no: 1, name: "low", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "high", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "baseVolumeLo", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "baseVolumeHi", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "quoteVolumeLo", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "quoteVolumeHi", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]) || this;
    }
    Summary$Type.prototype.create = function (value) {
        var message = { low: 0n, high: 0n, baseVolumeLo: 0n, baseVolumeHi: 0n, quoteVolumeLo: 0n, quoteVolumeHi: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    Summary$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* uint64 low */ 1:
                    message.low = reader.uint64().toBigInt();
                    break;
                case /* uint64 high */ 2:
                    message.high = reader.uint64().toBigInt();
                    break;
                case /* uint64 baseVolumeLo */ 3:
                    message.baseVolumeLo = reader.uint64().toBigInt();
                    break;
                case /* uint64 baseVolumeHi */ 4:
                    message.baseVolumeHi = reader.uint64().toBigInt();
                    break;
                case /* uint64 quoteVolumeLo */ 5:
                    message.quoteVolumeLo = reader.uint64().toBigInt();
                    break;
                case /* uint64 quoteVolumeHi */ 6:
                    message.quoteVolumeHi = reader.uint64().toBigInt();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    Summary$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* uint64 low = 1; */
        if (message.low !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.low);
        /* uint64 high = 2; */
        if (message.high !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.high);
        /* uint64 baseVolumeLo = 3; */
        if (message.baseVolumeLo !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.baseVolumeLo);
        /* uint64 baseVolumeHi = 4; */
        if (message.baseVolumeHi !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.baseVolumeHi);
        /* uint64 quoteVolumeLo = 5; */
        if (message.quoteVolumeLo !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.quoteVolumeLo);
        /* uint64 quoteVolumeHi = 6; */
        if (message.quoteVolumeHi !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.quoteVolumeHi);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return Summary$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.Summary
 */
exports.Summary = new Summary$Type();
// @generated message type with reflection information, may provide speed optimized methods
var Kline$Type = /** @class */ (function (_super) {
    __extends(Kline$Type, _super);
    function Kline$Type() {
        return _super.call(this, "md.Kline", [
            { no: 1, name: "interval", kind: "enum", T: function () { return ["md.KlineInterval", KlineInterval]; } },
            { no: 2, name: "startTime", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "open", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "close", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "high", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "low", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "volumeLo", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 8, name: "volumeHi", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]) || this;
    }
    Kline$Type.prototype.create = function (value) {
        var message = { interval: 0, startTime: 0n, open: 0n, close: 0n, high: 0n, low: 0n, volumeLo: 0n, volumeHi: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    Kline$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* md.KlineInterval interval */ 1:
                    message.interval = reader.int32();
                    break;
                case /* uint64 startTime */ 2:
                    message.startTime = reader.uint64().toBigInt();
                    break;
                case /* uint64 open */ 3:
                    message.open = reader.uint64().toBigInt();
                    break;
                case /* uint64 close */ 4:
                    message.close = reader.uint64().toBigInt();
                    break;
                case /* uint64 high */ 5:
                    message.high = reader.uint64().toBigInt();
                    break;
                case /* uint64 low */ 6:
                    message.low = reader.uint64().toBigInt();
                    break;
                case /* uint64 volumeLo */ 7:
                    message.volumeLo = reader.uint64().toBigInt();
                    break;
                case /* uint64 volumeHi */ 8:
                    message.volumeHi = reader.uint64().toBigInt();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    Kline$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* md.KlineInterval interval = 1; */
        if (message.interval !== 0)
            writer.tag(1, runtime_1.WireType.Varint).int32(message.interval);
        /* uint64 startTime = 2; */
        if (message.startTime !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.startTime);
        /* uint64 open = 3; */
        if (message.open !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.open);
        /* uint64 close = 4; */
        if (message.close !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.close);
        /* uint64 high = 5; */
        if (message.high !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.high);
        /* uint64 low = 6; */
        if (message.low !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.low);
        /* uint64 volumeLo = 7; */
        if (message.volumeLo !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.volumeLo);
        /* uint64 volumeHi = 8; */
        if (message.volumeHi !== 0n)
            writer.tag(8, runtime_1.WireType.Varint).uint64(message.volumeHi);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return Kline$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.Kline
 */
exports.Kline = new Kline$Type();
// @generated message type with reflection information, may provide speed optimized methods
var Heartbeat$Type = /** @class */ (function (_super) {
    __extends(Heartbeat$Type, _super);
    function Heartbeat$Type() {
        return _super.call(this, "md.Heartbeat", [
            { no: 1, name: "requestId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "timestamp", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]) || this;
    }
    Heartbeat$Type.prototype.create = function (value) {
        var message = { requestId: 0n, timestamp: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    Heartbeat$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* uint64 requestId */ 1:
                    message.requestId = reader.uint64().toBigInt();
                    break;
                case /* uint64 timestamp */ 2:
                    message.timestamp = reader.uint64().toBigInt();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    Heartbeat$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* uint64 requestId = 1; */
        if (message.requestId !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.requestId);
        /* uint64 timestamp = 2; */
        if (message.timestamp !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.timestamp);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return Heartbeat$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.Heartbeat
 */
exports.Heartbeat = new Heartbeat$Type();
// @generated message type with reflection information, may provide speed optimized methods
var MdMessages$Type = /** @class */ (function (_super) {
    __extends(MdMessages$Type, _super);
    function MdMessages$Type() {
        return _super.call(this, "md.MdMessages", [
            { no: 1, name: "messages", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: function () { return exports.MdMessage; } }
        ]) || this;
    }
    MdMessages$Type.prototype.create = function (value) {
        var message = { messages: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    MdMessages$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* repeated md.MdMessage messages */ 1:
                    message.messages.push(exports.MdMessage.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    MdMessages$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* repeated md.MdMessage messages = 1; */
        for (var i = 0; i < message.messages.length; i++)
            exports.MdMessage.internalBinaryWrite(message.messages[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return MdMessages$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.MdMessages
 */
exports.MdMessages = new MdMessages$Type();
// @generated message type with reflection information, may provide speed optimized methods
var AggMessage$Type = /** @class */ (function (_super) {
    __extends(AggMessage$Type, _super);
    function AggMessage$Type() {
        return _super.call(this, "md.AggMessage", [
            { no: 1, name: "heartbeat", kind: "message", oneof: "inner", T: function () { return exports.Heartbeat; } },
            { no: 2, name: "topOfBooks", kind: "message", oneof: "inner", T: function () { return exports.TopOfBooks; } }
        ]) || this;
    }
    AggMessage$Type.prototype.create = function (value) {
        var message = { inner: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    AggMessage$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* md.Heartbeat heartbeat */ 1:
                    message.inner = {
                        oneofKind: "heartbeat",
                        heartbeat: exports.Heartbeat.internalBinaryRead(reader, reader.uint32(), options, message.inner.heartbeat)
                    };
                    break;
                case /* md.TopOfBooks topOfBooks */ 2:
                    message.inner = {
                        oneofKind: "topOfBooks",
                        topOfBooks: exports.TopOfBooks.internalBinaryRead(reader, reader.uint32(), options, message.inner.topOfBooks)
                    };
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    AggMessage$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* md.Heartbeat heartbeat = 1; */
        if (message.inner.oneofKind === "heartbeat")
            exports.Heartbeat.internalBinaryWrite(message.inner.heartbeat, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.TopOfBooks topOfBooks = 2; */
        if (message.inner.oneofKind === "topOfBooks")
            exports.TopOfBooks.internalBinaryWrite(message.inner.topOfBooks, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return AggMessage$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.AggMessage
 */
exports.AggMessage = new AggMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
var TopOfBook$Type = /** @class */ (function (_super) {
    __extends(TopOfBook$Type, _super);
    function TopOfBook$Type() {
        return _super.call(this, "md.TopOfBook", [
            { no: 1, name: "marketId", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 2, name: "transactTime", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 3, name: "bidPrice", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 4, name: "bidQuantity", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 5, name: "askPrice", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 6, name: "askQuantity", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ },
            { no: 7, name: "lastPrice", kind: "scalar", T: 4 /*ScalarType.UINT64*/, L: 0 /*LongType.BIGINT*/ }
        ]) || this;
    }
    TopOfBook$Type.prototype.create = function (value) {
        var message = { marketId: 0n, transactTime: 0n, bidPrice: 0n, bidQuantity: 0n, askPrice: 0n, askQuantity: 0n, lastPrice: 0n };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    TopOfBook$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* uint64 marketId */ 1:
                    message.marketId = reader.uint64().toBigInt();
                    break;
                case /* uint64 transactTime */ 2:
                    message.transactTime = reader.uint64().toBigInt();
                    break;
                case /* uint64 bidPrice */ 3:
                    message.bidPrice = reader.uint64().toBigInt();
                    break;
                case /* uint64 bidQuantity */ 4:
                    message.bidQuantity = reader.uint64().toBigInt();
                    break;
                case /* uint64 askPrice */ 5:
                    message.askPrice = reader.uint64().toBigInt();
                    break;
                case /* uint64 askQuantity */ 6:
                    message.askQuantity = reader.uint64().toBigInt();
                    break;
                case /* uint64 lastPrice */ 7:
                    message.lastPrice = reader.uint64().toBigInt();
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    TopOfBook$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* uint64 marketId = 1; */
        if (message.marketId !== 0n)
            writer.tag(1, runtime_1.WireType.Varint).uint64(message.marketId);
        /* uint64 transactTime = 2; */
        if (message.transactTime !== 0n)
            writer.tag(2, runtime_1.WireType.Varint).uint64(message.transactTime);
        /* uint64 bidPrice = 3; */
        if (message.bidPrice !== 0n)
            writer.tag(3, runtime_1.WireType.Varint).uint64(message.bidPrice);
        /* uint64 bidQuantity = 4; */
        if (message.bidQuantity !== 0n)
            writer.tag(4, runtime_1.WireType.Varint).uint64(message.bidQuantity);
        /* uint64 askPrice = 5; */
        if (message.askPrice !== 0n)
            writer.tag(5, runtime_1.WireType.Varint).uint64(message.askPrice);
        /* uint64 askQuantity = 6; */
        if (message.askQuantity !== 0n)
            writer.tag(6, runtime_1.WireType.Varint).uint64(message.askQuantity);
        /* uint64 lastPrice = 7; */
        if (message.lastPrice !== 0n)
            writer.tag(7, runtime_1.WireType.Varint).uint64(message.lastPrice);
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return TopOfBook$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.TopOfBook
 */
exports.TopOfBook = new TopOfBook$Type();
// @generated message type with reflection information, may provide speed optimized methods
var TopOfBooks$Type = /** @class */ (function (_super) {
    __extends(TopOfBooks$Type, _super);
    function TopOfBooks$Type() {
        return _super.call(this, "md.TopOfBooks", [
            { no: 1, name: "tops", kind: "message", repeat: 1 /*RepeatType.PACKED*/, T: function () { return exports.TopOfBook; } }
        ]) || this;
    }
    TopOfBooks$Type.prototype.create = function (value) {
        var message = { tops: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    TopOfBooks$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* repeated md.TopOfBook tops */ 1:
                    message.tops.push(exports.TopOfBook.internalBinaryRead(reader, reader.uint32(), options));
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    TopOfBooks$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* repeated md.TopOfBook tops = 1; */
        for (var i = 0; i < message.tops.length; i++)
            exports.TopOfBook.internalBinaryWrite(message.tops[i], writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return TopOfBooks$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.TopOfBooks
 */
exports.TopOfBooks = new TopOfBooks$Type();
// @generated message type with reflection information, may provide speed optimized methods
var ClientMessage$Type = /** @class */ (function (_super) {
    __extends(ClientMessage$Type, _super);
    function ClientMessage$Type() {
        return _super.call(this, "md.ClientMessage", [
            { no: 1, name: "heartbeat", kind: "message", oneof: "inner", T: function () { return exports.Heartbeat; } },
            { no: 2, name: "config", kind: "message", oneof: "inner", T: function () { return exports.Config; } }
        ]) || this;
    }
    ClientMessage$Type.prototype.create = function (value) {
        var message = { inner: { oneofKind: undefined } };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    ClientMessage$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* md.Heartbeat heartbeat */ 1:
                    message.inner = {
                        oneofKind: "heartbeat",
                        heartbeat: exports.Heartbeat.internalBinaryRead(reader, reader.uint32(), options, message.inner.heartbeat)
                    };
                    break;
                case /* md.Config config */ 2:
                    message.inner = {
                        oneofKind: "config",
                        config: exports.Config.internalBinaryRead(reader, reader.uint32(), options, message.inner.config)
                    };
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    ClientMessage$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* md.Heartbeat heartbeat = 1; */
        if (message.inner.oneofKind === "heartbeat")
            exports.Heartbeat.internalBinaryWrite(message.inner.heartbeat, writer.tag(1, runtime_1.WireType.LengthDelimited).fork(), options).join();
        /* md.Config config = 2; */
        if (message.inner.oneofKind === "config")
            exports.Config.internalBinaryWrite(message.inner.config, writer.tag(2, runtime_1.WireType.LengthDelimited).fork(), options).join();
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return ClientMessage$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.ClientMessage
 */
exports.ClientMessage = new ClientMessage$Type();
// @generated message type with reflection information, may provide speed optimized methods
var Config$Type = /** @class */ (function (_super) {
    __extends(Config$Type, _super);
    function Config$Type() {
        return _super.call(this, "md.Config", [
            { no: 1, name: "mbp", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 2, name: "mbo", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 3, name: "trades", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 4, name: "summary", kind: "scalar", T: 8 /*ScalarType.BOOL*/ },
            { no: 5, name: "klines", kind: "enum", repeat: 1 /*RepeatType.PACKED*/, T: function () { return ["md.KlineInterval", KlineInterval]; } }
        ]) || this;
    }
    Config$Type.prototype.create = function (value) {
        var message = { mbp: false, mbo: false, trades: false, summary: false, klines: [] };
        globalThis.Object.defineProperty(message, runtime_4.MESSAGE_TYPE, { enumerable: false, value: this });
        if (value !== undefined)
            (0, runtime_3.reflectionMergePartial)(this, message, value);
        return message;
    };
    Config$Type.prototype.internalBinaryRead = function (reader, length, options, target) {
        var message = target !== null && target !== void 0 ? target : this.create(), end = reader.pos + length;
        while (reader.pos < end) {
            var _a = reader.tag(), fieldNo = _a[0], wireType = _a[1];
            switch (fieldNo) {
                case /* bool mbp */ 1:
                    message.mbp = reader.bool();
                    break;
                case /* bool mbo */ 2:
                    message.mbo = reader.bool();
                    break;
                case /* bool trades */ 3:
                    message.trades = reader.bool();
                    break;
                case /* bool summary */ 4:
                    message.summary = reader.bool();
                    break;
                case /* repeated md.KlineInterval klines */ 5:
                    if (wireType === runtime_1.WireType.LengthDelimited)
                        for (var e = reader.int32() + reader.pos; reader.pos < e;)
                            message.klines.push(reader.int32());
                    else
                        message.klines.push(reader.int32());
                    break;
                default:
                    var u = options.readUnknownField;
                    if (u === "throw")
                        throw new globalThis.Error("Unknown field ".concat(fieldNo, " (wire type ").concat(wireType, ") for ").concat(this.typeName));
                    var d = reader.skip(wireType);
                    if (u !== false)
                        (u === true ? runtime_2.UnknownFieldHandler.onRead : u)(this.typeName, message, fieldNo, wireType, d);
            }
        }
        return message;
    };
    Config$Type.prototype.internalBinaryWrite = function (message, writer, options) {
        /* bool mbp = 1; */
        if (message.mbp !== false)
            writer.tag(1, runtime_1.WireType.Varint).bool(message.mbp);
        /* bool mbo = 2; */
        if (message.mbo !== false)
            writer.tag(2, runtime_1.WireType.Varint).bool(message.mbo);
        /* bool trades = 3; */
        if (message.trades !== false)
            writer.tag(3, runtime_1.WireType.Varint).bool(message.trades);
        /* bool summary = 4; */
        if (message.summary !== false)
            writer.tag(4, runtime_1.WireType.Varint).bool(message.summary);
        /* repeated md.KlineInterval klines = 5; */
        if (message.klines.length) {
            writer.tag(5, runtime_1.WireType.LengthDelimited).fork();
            for (var i = 0; i < message.klines.length; i++)
                writer.int32(message.klines[i]);
            writer.join();
        }
        var u = options.writeUnknownFields;
        if (u !== false)
            (u == true ? runtime_2.UnknownFieldHandler.onWrite : u)(this.typeName, message, writer);
        return writer;
    };
    return Config$Type;
}(runtime_5.MessageType));
/**
 * @generated MessageType for protobuf message md.Config
 */
exports.Config = new Config$Type();
