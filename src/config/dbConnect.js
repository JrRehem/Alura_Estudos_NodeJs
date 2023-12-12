import mongoose from "mongoose";

async function conectaNaDatabase() {
  mongoose.connect(process.env.DB_MONGODB);
  return mongoose.connection;
}

export default conectaNaDatabase;