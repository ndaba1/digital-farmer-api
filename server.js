import http from "http";
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectToDb from "./services/dbConnection.js";
import readCsvData from "./services/dbConnection.js";
import log from "./services/utils.js";

const PORT = process.env.PORT || 9000;
const server = http.createServer(app);

connectToDb.then(() => {
  readCsvData.then(() => {
    server.listen(PORT, () => {
      log.debug(`Server listening on port: ${PORT}`);
    });
  });
});
