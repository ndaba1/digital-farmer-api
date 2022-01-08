import Plants from "./plants.schema.js";

import { getDisease } from "./diseases.model.js";
import readCsvData from "../services/csvParse.js";

// export async function getPlantById(id) {
//   const plant = await Plants.findById(id);
//   return plant;
// }

export async function getPlantByName(name) {
  const plant = await Plants.find({
    $or: [
      { commonName: new RegExp(name, "i") },
      { latinName: new RegExp(name, "i") },
    ],
  });

  return plant;
}

export async function getAllPlants() {
  // TODO: Implement pagination
  const plants = await Plants.find({});
  return plants;
}

export async function getPlantDiseases(id) {
  const plant = await Plants.findById(id);
  const diseaseArray = plant.diseases;

  let data = [];
  diseaseArray.forEach(async (disease) => {
    info = await getDisease(disease);
    data.push(info);
  });

  return data;
}

export async function loadPlantsData() {
  readCsvData.then((data) => {
    data.forEach(async (datum) => {
      await Plants.findOneAndUpdate({ commonName: datum.commonName }, datum, {
        upsert: true,
      });
    });
  });
}
