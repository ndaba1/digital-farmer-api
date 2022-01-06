import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";

import v1Route from "./api/api.v1.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/api/v1", v1Route);

export default app;
