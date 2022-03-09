"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllReadable = exports.getReadable = exports.getTags = void 0;
//import dataTags from "../db/nodeTags.json"; // for opc.tcp://10.115.43.26:4840
//import dataTags from "../db/nodeTagsOPCsiemens.json"; // for opc.tcp://10.115.42.241:4840
const logger_1 = __importDefault(require("../utils/logger"));
const nodeTagsUpdate_json_1 = __importDefault(require("../db/nodeTagsUpdate.json"));
// OBTAIN TAG REQUESTED TO WRITE
function getTags(rackid, side, slotid, method) {
    const rackId = rackid;
    const sideRack = side;
    const slotId = slotid;
    const methodId = method;
    const racks = nodeTagsUpdate_json_1.default.writableTags;
    const verifyRack = racks.find((racks) => racks.rackId === rackId);
    if (sideRack === 0) {
        var verifySide = verifyRack === null || verifyRack === void 0 ? void 0 : verifyRack.frontSlots;
    }
    else if (sideRack === 1) {
        var verifySide = verifyRack === null || verifyRack === void 0 ? void 0 : verifyRack.backSlots;
    }
    else {
        return "undefined";
    }
    const verifySlot = verifySide === null || verifySide === void 0 ? void 0 : verifySide.find((verifySide) => verifySide.slotId === slotId);
    const verifyMethod = verifySlot === null || verifySlot === void 0 ? void 0 : verifySlot.tagsId[methodId];
    if (!verifyRack || !verifySlot || !verifyMethod) {
        return "undefined";
    }
    logger_1.default.info(`Request Tag: ${JSON.stringify(verifySlot.slotId)}, ${JSON.stringify(verifySlot.meta)}`);
    return verifyMethod;
}
exports.getTags = getTags;
// OBTAIN TAG REQUESTED TO READ
function getReadable(slotid) {
    const slotId = slotid;
    const slots = nodeTagsUpdate_json_1.default.readableTags;
    const verifySlot = slots.find((slots) => slots.slotId === slotId);
    const verifyMethod = verifySlot === null || verifySlot === void 0 ? void 0 : verifySlot.tagsId;
    if (!verifySlot || !verifyMethod) {
        return "undefined";
    }
    return verifyMethod;
}
exports.getReadable = getReadable;
// OBTAIN ALL TAGS TO READ
function getAllReadable() {
    const slots = nodeTagsUpdate_json_1.default.readableTags;
    return slots;
}
exports.getAllReadable = getAllReadable;
