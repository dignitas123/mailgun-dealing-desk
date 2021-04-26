"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const atlas_uri = process.env.DB_URI
    ? process.env.DB_URI
    : "mongodb+srv://dbMailapi:fATngFEApBcdwzt6@cluster0.k2vgu.mongodb.net/webhooks?retryWrites=true&w=majority";
const db_name = process.env.DB_NAME
    ? process.env.DB_NAME
    : "webhooks";
exports.default = mongoose_1.default.connect(atlas_uri, {
    dbName: db_name,
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
