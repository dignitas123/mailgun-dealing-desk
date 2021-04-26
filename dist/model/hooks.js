"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.hooks = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const hooksSchema = new mongoose_1.default.Schema({
    ip: { type: String, required: true },
    event: { type: String, required: true },
    timestamp: { type: Number, required: true },
    recipient: { type: String, required: true },
    id: { type: String, required: true },
});
const collection = process.env.DB_HOOKS_COLLECTION
    ? process.env.DB_HOOKS_COLLECTION
    : "mailgun";
// Note: OverwriteModelError: Cannot overwrite `hooks` model once compiled. error
exports.hooks = 
// mongoose.models.hooks ||
mongoose_1.default.model("mailgun", hooksSchema, collection);
