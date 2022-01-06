import fs from "fs";
import path from "path";
import { parse } from "csv-parse";

import log from "../services/utils.js";
const __dirname = path.resolve();

const results = [];

const readCsvData = new Promise((resolve, reject) => {
  fs.createReadStream(path.resolve(__dirname, ".", "data/plants_data.csv"))
    .pipe(
      parse({
        comment: "#",
        columns: true,
      })
    )
    .on("data", (chunk) => {
      results.push(chunk);
    })
    .on("error", (err) => {
      log.error(err);
      reject(err);
    })
    .on("end", () => {
      log.debug("Done parsing CSV data...");
      resolve(results);
    });
});

export default readCsvData;
