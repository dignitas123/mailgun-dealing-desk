import { Handler, Context } from "aws-lambda";

import { books } from "./model";
import { BooksController } from "./controller/books";
const booksController = new BooksController(books);

export const create: Handler = (event: any, context: Context) => {
  return booksController.create(event, context);
};

export const update: Handler = (event: any) => booksController.update(event);

export const find: Handler = () => booksController.find();

export const findOne: Handler = (event: any, context: Context) => {
  return booksController.findOne(event, context);
};

export const deleteOne: Handler = (event: any) =>
  booksController.deleteOne(event);
