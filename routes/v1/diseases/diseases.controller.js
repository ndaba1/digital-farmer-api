import {
  getAllDiseases,
  getDiseaseByName,
} from "../../../models/diseases.model";

export async function httpGetAllDiseases(req, res) {
  const user = req.user;

  if (user.verified) {
    const data = await getAllDiseases(req.params.id);
    return res.status(200).json(data);
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}

export async function httpGetDisease(req, res) {
  const user = req.user;

  if (user.verified) {
    const data = await getDiseaseByName(req.params.id);
    return res.status(200).json(data);
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}
