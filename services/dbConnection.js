import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

import log from "../services/utils.js";

function connectToDb() {
  return new Promise((resolve, reject) => {
    mongoose.connect(
      process.env.MONGO_URI,
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

export default connectToDb;
