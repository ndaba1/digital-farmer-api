const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const cors = require("cors");

const v1Router = require("./api/api.v1");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/v1", v1Router);

exports = app;
