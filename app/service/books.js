"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BooksService = void 0;
class BooksService {
    constructor(books) {
        this.books = books;
    }
    /**
     * Create book
     * @param params
     */
    async createBook(params) {
        try {
            const result = await this.books.create({
                name: params.name,
                id: params.id,
            });
            return result;
        }
        catch (err) {
            console.error(err);
            throw err;
        }
    }
    /**
     * Update a book by id
     * @param id
     * @param data
     */
    updateBooks(id, data) {
        return this.books.findOneAndUpdate({ id }, { $set: data }, { new: true });
    }
    /**
     * Find books
     */
    findBooks() {
        return this.books.find();
    }
    /**
     * Query book by id
     * @param id
     */
    findOneBookById(id) {
        return this.books.findOne({ id });
    }
    /**
     * Delete book by id
     * @param id
     */
    deleteOneBookById(id) {
        return this.books.deleteOne({ id });
    }
}
exports.BooksService = BooksService;
//# sourceMappingURL=books.js.map