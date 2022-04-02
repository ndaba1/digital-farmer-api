import {
  getAllPlants,
  getPlantByName,
  getPlantDiseases,
  postNewPlant,
} from "../../../models/plants.model.js";
import getPagination from "../../../services/pagination.js";

export async function httpGetPlant(req, res) {
  const user = req.user;

  if (user.verified) {
    const data = await getPlantByName(req.params.name);
    if (data) return res.status(200).json(data);
    return res.status(404).json({ msg: "The requested plant was not found" });
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}

export async function httpGetAllPlants(req, res) {
  const user = req.user;
  const pagination = getPagination(req.query);
  if (user.verified) {
    const data = await getAllPlants(pagination);
    return res.status(200).json(data);
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}

export async function httpGetPlantDiseases(req, res) {
  const user = req.user;

  if (user.verified && req.params.name) {
    const data = await getPlantDiseases(req.params.name);
    if (data) return res.status(200).json(data);

    return res.status(404).json({ msg: "The requested plant was not found" });
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}

export async function httpPostPlant(req, res) {
  const user = req.user;

  if (user.verified && user.isAdmin) {
    await postNewPlant(req.body.data);

    return res.status(200).json({ msg: "Success" });
  } else {
    return res.status(401).json({ msg: "That's unauthorized kemosabe" });
  }
}
