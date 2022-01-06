const fs = require("fs");
const path = require("path");
const parse = require("csv-parse");

const log = require("../services/utils");

const results = [];

const readCsvData = new Promise(async (resolve, reject) => {
  await fs
    .createReadStream(path.resolve("../data/plants_data.csv"))
    .pipe(
      parse({
        comments: "#",
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
      log.debug(results);
      resolve(results);
    });
});

exports = readCsvData;
