import Diseases from "./diseases.schema.js";

export async function getDiseaseByName(name) {
  const disease = await Diseases.find(
    {
      $or: [
        { commonName: new RegExp(name, "i") },
        { scientificName: new RegExp(name, "i") },
      ],
    },
    { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }
  );

  return disease[0];
}

export async function getAllDiseases(pagination = { skip: 0, limit: 0 }) {
  const data = await Diseases.find(
    {},
    { __v: 0, _id: 0, createdAt: 0, updatedAt: 0 }
  )
    .skip(pagination.skip)
    .limit(pagination.limit);
  return data;
}
