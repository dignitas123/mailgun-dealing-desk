"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.books = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const booksSchema = new mongoose_1.default.Schema({
    name: String,
    id: { type: Number, index: true, unique: true },
    description: String,
    createdAt: { type: Date, default: Date.now },
});
// Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
exports.books = mongoose_1.default.models.books ||
    mongoose_1.default.model("books", booksSchema, process.env.DB_BOOKS_COLLECTION);
