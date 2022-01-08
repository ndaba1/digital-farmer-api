import fs from "fs";
import path from "path";
import { parse } from "csv-parse";

import log from "../services/utils.js";
const __dirname = path.resolve();

const results = [];

const readCsvData = new Promise((resolve, reject) => {
  fs.createReadStream(path.resolve(__dirname, ".", "data/book_one_fixed.csv"))
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
      // log.debug(results);
      log.debug(parseCSV(results));
      resolve(results);
    });
});

function parseCSV(arr) {
  let parsedData = [];

  arr.forEach((obj) => {
    const { latinName, family, about, habitat, taxonomicTree } = obj;
    const parsedObject = {
      commonName: obj["commonName"],
      latinName,
      family,
      aliases: obj.aliases.split(","),
      about,
      pests: obj.pests.split(","),
      diseases: obj.diseases.split(","),
      sampleImages: obj.sampleImages.split(","),
      uses: obj.uses.split(","),
      requirements: obj.requirements.split(","),
      habitat,
      taxonomicTree,
    };
    parsedData.push(parsedObject);
  });

  return parsedData;
}

export default readCsvData;
