import Diseases from "./diseases.schema.js";

export async function getDisease(id) {
  const disease = Diseases.findById(id);
  return disease;
}
