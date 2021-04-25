"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const atlas_uri = 'mongodb+srv://dbMailapi:fATngFEApBcdwzt6@cluster0.k2vgu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
exports.default = mongoose_1.default.connect(atlas_uri, {
    dbName: process.env.DB_NAME,
    useUnifiedTopology: true,
    useNewUrlParser: true,
});
//# sourceMappingURL=mongoose-db.js.map