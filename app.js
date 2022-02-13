import express from "express";
import helmet from "helmet";
import morgan from "morgan";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";

import v1Route from "./api/api.v1.js";
import schema from "./graphql/index.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use("/v1", v1Route);

app.use(
  "/v1/query",
  graphqlHTTP({
    schema,
  })
);

export default app;
