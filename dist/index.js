"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteOne = exports.findOne = exports.find = exports.update = exports.create = void 0;
const model_1 = require("./model");
const books_1 = require("./controller/books");
const booksController = new books_1.BooksController(model_1.books);
const create = (event, context) => {
    return booksController.create(event, context);
};
exports.create = create;
const update = (event) => booksController.update(event);
exports.update = update;
const find = () => booksController.find();
exports.find = find;
const findOne = (event, context) => {
    return booksController.findOne(event, context);
};
exports.findOne = findOne;
const deleteOne = (event) => booksController.deleteOne(event);
exports.deleteOne = deleteOne;
