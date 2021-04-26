import mongoose from "mongoose";

export type Hook = mongoose.Document & {
  ip: string;
  recipientDomain: string;
  event: string;
  timestamp: number;
  message: string;
  recipient: string;
  id: string;
};

const hooksSchema = new mongoose.Schema({
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
export const hooks =
  // mongoose.models.hooks ||
  mongoose.model<Hook>("mailgun", hooksSchema, collection);
