import mongoose from "mongoose";

const atlas_uri: string = process.env.DB_URI
  ? process.env.DB_URI
  : "mongodb+srv://dbMailapi:fATngFEApBcdwzt6@cluster0.k2vgu.mongodb.net/webhooks?retryWrites=true&w=majority";

const db_name: string = process.env.DB_NAME
  ? process.env.DB_NAME
  : "webhooks";

export default mongoose.connect(atlas_uri, {
  dbName: db_name,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
