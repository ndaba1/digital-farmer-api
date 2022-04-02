import express from "express";

import {
  httpGetAllPlants,
  httpGetPlant,
  httpGetPlantDiseases,
  httpPostPlant,
} from "./plants.controller.js";
import { verifyToken } from "../../../middleware/token.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Okay!");
});

router.get("/", verifyToken, httpGetAllPlants);

router.get("/:name", verifyToken, httpGetPlant);
router.get("/:name/diseases", verifyToken, httpGetPlantDiseases);

router.post("/", verifyToken, httpPostPlant);

export default router;
