import { getPlantByName } from "../../../models/plants.model.js";

export async function httpGetPlant(req, res) {
  const user = req.user;

  if (user.isVerified) {
    const data = await getPlantByName(req.params.id);
    return res.status(200).json({ data });
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}

export async function httpGetPlantDiseases(req, res) {
  res.send("Get plant diseases route working");
}
