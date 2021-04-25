import mongoose from "mongoose";

const atlas_uri: string = 'mongodb+srv://dbMailapi:fATngFEApBcdwzt6@cluster0.k2vgu.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

export default mongoose.connect(atlas_uri, {
  dbName: process.env.DB_NAME,
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
