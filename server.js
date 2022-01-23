import http from "http";
import dotenv from "dotenv";
dotenv.config();

import app from "./app.js";
import connectToDb from "./services/dbConnection.js";
import log from "./services/utils.js";
import { loadPlantsData } from "./models/plants.model.js";

const PORT = process.env.PORT || 9000;
const server = http.createServer(app);

async function startServer() {
  await connectToDb();
  await loadPlantsData();

  server.listen(PORT, () => {
    log.debug(`Server listening on port: ${PORT}`);
  });
}

startServer();
