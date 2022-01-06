const http = require("http");
require("dotenv").config();

const app = require("./app");
const connectToDb = require("./services/dbConnection");

const PORT = process.env.PORT || 9000;
const server = http.createServer(app);

connectToDb.then(
  server.listen(PORT, () => {
    process.env.NODE_ENV && console.log(`Starting server on port: ${PORT}`);
  })
);
