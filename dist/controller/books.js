"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksController = void 0;
const message_1 = require("../utils/message");
const books_1 = require("../service/books");
class BooksController extends books_1.BooksService {
    constructor(books) {
        super(books);
    }
    /**
     * Create book
     * @param {*} event
     */
    async create(event, context) {
        if (context)
            console.log("functionName", context.functionName);
        const params = JSON.parse(event.body);
        try {
            const result = await this.createBook({
                name: params.name,
                id: params.id,
            });
            return message_1.MessageUtil.success(result);
        }
        catch (err) {
            console.error(err);
            return message_1.MessageUtil.error(err.code, err.message);
        }
    }
    /**
     * Update a book by id
     * @param event
     */
    async update(event) {
        const id = Number(event.pathParameters.id);
        const body = JSON.parse(event.body);
        try {
            const result = await this.updateBooks(id, body);
            return message_1.MessageUtil.success(result);
        }
        catch (err) {
            console.error(err);
            return message_1.MessageUtil.error(err.code, err.message);
        }
    }
    /**
     * Find book list
     */
    async find() {
        try {
            const result = await this.findBooks();
            return message_1.MessageUtil.success(result);
        }
        catch (err) {
            console.error(err);
            return message_1.MessageUtil.error(err.code, err.message);
        }
    }
    /**
     * Query book by id
     * @param event
     */
    async findOne(event, context) {
        // The amount of memory allocated for the function
        console.log("memoryLimitInMB: ", context.memoryLimitInMB);
        const id = Number(event.pathParameters.id);
        try {
            const result = await this.findOneBookById(id);
            return message_1.MessageUtil.success(result);
        }
        catch (err) {
            console.error(err);
            return message_1.MessageUtil.error(err.code, err.message);
        }
    }
    /**
     * Delete book by id
     * @param event
     */
    async deleteOne(event) {
        const id = event.pathParameters.id;
        try {
            const result = await this.deleteOneBookById(id);
            if (result.deletedCount === 0) {
                return message_1.MessageUtil.error(1010, "The data was not found! May have been deleted!");
            }
            return message_1.MessageUtil.success(result);
        }
        catch (err) {
            console.error(err);
            return message_1.MessageUtil.error(err.code, err.message);
        }
    }
}
exports.BooksController = BooksController;
