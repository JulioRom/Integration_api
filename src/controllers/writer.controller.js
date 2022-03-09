"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writer = void 0;
const searcher_service_1 = require("../service/searcher.service");
const logger_1 = __importDefault(require("../utils/logger"));
const write_service_1 = __importDefault(require("../service/ConnectionOPC/write.service"));
async function writer(req, res) {
    const rack = parseInt(req.params.rackid);
    const side = parseInt(req.params.side);
    const slot = parseInt(req.params.slotid);
    const method = parseInt(req.params.methodid);
    const value = parseInt(req.params.value);
    const tag = (0, searcher_service_1.getTags)(rack, side, slot, method);
    try {
        if (tag === "undefined") {
            logger_1.default.error("slot or method not found (writer)");
            const error = "RACK_SIDE_SLOT_OR_METHOD_NOT_FOUND_W";
            res.formatter.notFound(error);
        }
        else {
            const changeOPC = await (0, write_service_1.default)(tag, value);
            logger_1.default.info("Change OPC executed successfully");
            const success = "SUCCESSFULLY_EXECUTED_METHOD";
            res.formatter.ok(success, changeOPC);
        }
    }
    catch (error) {
        logger_1.default.error("Error responding to request: " + error);
        res.formatter.badRequest(error);
    }
}
exports.writer = writer;
