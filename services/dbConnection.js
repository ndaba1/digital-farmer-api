const mongoose = require("mongoose");
require("dotenv").config();

const connectToDb = new Promise((resolve, reject) => {
  mongoose.connect(
    process.env.NEW_MONGO_URI,
    { useNewUrlParser: true, useUnifiedTopology: true, autoIndex: false },
    (err) => {
      if (err) reject(err);
      else {
        console.log("Connected to DB");
        resolve();
      }
    }
  );
});

exports = connectToDb;
