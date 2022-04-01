import Plants from "./plants.schema.js";

import { getDisease, getDiseaseByName } from "./diseases.model.js";
import readCsvData from "../services/csvParse.js";
import { preprocessName } from "../services/utils.js";

// export async function getPlantById(id) {
//   const plant = await Plants.findById(id);
//   return plant;
// }

export async function getPlantByName(rawName) {
  let name = preprocessName(rawName);
  const plant = await Plants.find(
    {
      $or: [
        { commonName: new RegExp(name, "i") },
        { latinName: new RegExp(name, "i") },
        { aliases: new RegExp(name, "i") },
      ],
    },
    { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }
  );

  return plant[0];
}

export async function getAllPlants(pagination = { skip: 0, limit: 0 }) {
  const data = await Plants.find(
    {},
    { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }
  )
    .skip(pagination.skip)
    .limit(pagination.limit);
  return data;
}

export async function getPlantDiseases(name) {
  const plant = await getPlantByName(name);
  let data = [];

  if (plant) {
    const diseaseArray = plant.diseases;
    for (const dis of diseaseArray) {
      let info = await getDiseaseByName(dis);
      data.push(info);
    }
  }
  return data;
}

export async function postNewPlant(data) {
  await Plants.findOneAndUpdate({ commonName: data.commonName }, data, {
    upsert: true,
  });
}

export async function loadPlantsData() {
  return new Promise(async (resolve, reject) => {
    const data = await readCsvData("mock_data.csv");

    if (!data) reject();

    data.forEach(async (datum) => {
      await Plants.findOneAndUpdate({ commonName: datum.commonName }, datum, {
        upsert: true,
      });
    });
    resolve();
  });
}
