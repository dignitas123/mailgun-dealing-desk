"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.findOne = exports.find = exports.update = exports.create = void 0;
const model_1 = require("./model");
const books_1 = require("./controller/books");
const booksController = new books_1.BooksController(model_1.books);
exports.create = (event, context) => {
    return booksController.create(event, context);
};
exports.update = (event) => booksController.update(event);
exports.find = () => booksController.find();
exports.findOne = (event, context) => {
    return booksController.findOne(event, context);
};
exports.deleteOne = (event) => booksController.deleteOne(event);
//# sourceMappingURL=index.js.map