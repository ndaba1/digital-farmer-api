import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import log from "../services/utils.js";

function connectToDb() {
  const DB_URI =
    process.env.PRODUCTION == true || process.env.CI == true
      ? process.env.MONGO_URI
      : process.env.LOCAL_MONGO_URI;
  return new Promise((resolve, reject) => {
    mongoose.connect(
      DB_URI,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        autoIndex: false,
      },
      (err) => {
        if (err) reject(err);
        else {
          log.debug("Connected to DB");
          resolve();
        }
      }
    );
  });
}

export async function disconnectFromDB() {
  await mongoose.disconnect();
}

export default connectToDb;
