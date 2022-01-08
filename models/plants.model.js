import Plants from "./plants.schema.js";

import { getDisease } from "./diseases.model.js";
import readCsvData from "../services/csvParse.js";

// export async function getPlantById(id) {
//   const plant = await Plants.findById(id);
//   return plant;
// }

export async function getPlantByName(name) {
  const plant = await Plants.find(
    {
      $or: [
        { commonName: new RegExp(name, "i") },
        { latinName: new RegExp(name, "i") },
      ],
    },
    { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }
  );

  return plant;
}

export async function getAllPlants(pagination) {
  const data = await Plants.find(
    {},
    { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }
  )
    .skip(pagination.skip)
    .limit(pagination.limit);
  return data;
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
  return new Promise(async (resolve, reject) => {
    const data = await readCsvData();

    if (!data) reject();

    data.forEach(async (datum) => {
      await Plants.findOneAndUpdate({ commonName: datum.commonName }, datum, {
        upsert: true,
      });
    });
    resolve();
  });
}
