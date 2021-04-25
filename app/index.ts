import { Handler, Context } from "aws-lambda";

import { books } from "./model";
import { BooksController } from "./model/hooks";

const booksController = new BooksController(books);

export const handler: Handler = async (event: any, context: Context) => {
  return booksController.create(event, context);
};
