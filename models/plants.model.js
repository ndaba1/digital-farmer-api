import Plants from "./plants.schema.js";

import { getDisease } from "./diseases.model.js";

export async function getPlant(id) {
  const plant = await Plants.findById(id);
  return plant;
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
