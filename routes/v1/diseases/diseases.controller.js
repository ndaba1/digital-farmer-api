import {
  getAllDiseases,
  getDiseaseByName,
  getDiseaseTargets,
  postNewDisease,
} from "../../../models/diseases.model";

export async function httpGetAllDiseases(req, res) {
  const user = req.user;

  if (user.verified) {
    const data = await getAllDiseases();
    return res.status(200).json(data);
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}

export async function httpGetDisease(req, res) {
  const user = req.user;

  if (user.verified && req.params.name) {
    const data = await getDiseaseByName(req.params.name);
    if (data) return res.status(200).json(data);

    return res.status(404).json({ msg: "The requested disease was not found" });
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}

export async function httpGetDiseaseTargets(req, res) {
  const user = req.user;

  if (user.verified && req.params.name) {
    const data = await getDiseaseTargets(req.params.name);
    if (data) return res.status(200).json(data);

    return res.status(404).json({ msg: "The requested disease was not found" });
  } else {
    return res.status(400).json({ msg: "That's a bad request kemosabe" });
  }
}

export async function httpPostDisease(req, res) {
  const user = req.user;

  if (user.verified && user.isAdmin) {
    if (req.body.data) {
      await postNewDisease(req.body.data);
      return res.status(200).json({ msg: "Success" });
    } else {
      return res.status(400).json({ msg: "Payload cannot be empty" });
    }
  } else {
    return res.status(401).json({ msg: "That's unauthorized kemosabe" });
  }
}
