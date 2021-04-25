import mongoose from "mongoose";

export type Hook = mongoose.Document & {
  name: string;
  id: number;
  description: string;
  createdAt: Date;
};

const hooksSchema = new mongoose.Schema({
  name: String,
  id: { type: Number, index: true, unique: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

const collection = process.env.DB_HOOKS_COLLECTION
  ? process.env.DB_HOOKS_COLLECTION
  : "hooks";

// Note: OverwriteModelError: Cannot overwrite `Books` model once compiled. error
export const hooks =
  mongoose.models.hooks ||
  mongoose.model<Hook>("hooks", hooksSchema, collection);
