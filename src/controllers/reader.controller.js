"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
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
exports.readOne = exports.readerAll = void 0;
const logger_1 = __importDefault(require("../utils/logger"));
const read = __importStar(require("../service/ConnectionOPC/read.service"));
const searcher_service_1 = require("../service/searcher.service");
async function readerAll(req, res) {
    try {
        const states = await read.readAll();
        res.formatter.ok(states);
    }
    catch (error) {
        logger_1.default.error("Error responding to request: " + error);
        res.formatter.badRequest(error);
    }
}
exports.readerAll = readerAll;
async function readOne(req, res) {
    try {
        const slot = parseInt(req.params.slotid);
        const tag = (0, searcher_service_1.getReadable)(slot);
        if (tag === "undefined") {
            logger_1.default.error("slot or method not found (reader)");
            const error = "SLOT_OR_METHOD_NOT_FOUND_R";
            res.formatter.notFound(error);
        }
        else {
            const slotReaded = await read.readOnly(tag);
            const objRes = {
                slotID: slot,
                dataType: slotReaded.dataValue.value.dataType,
                Value: slotReaded.dataValue.value.value,
                Node: tag,
            };
            logger_1.default.info({ slotReaded });
            res.formatter.ok(objRes);
        }
    }
    catch (error) {
        logger_1.default.error("Error responding to request");
        res.formatter.badRequest(error);
    }
}
exports.readOne = readOne;
