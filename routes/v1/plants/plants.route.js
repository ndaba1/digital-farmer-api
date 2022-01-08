import express from "express";

import { httpGetPlant, httpGetPlantDiseases } from "./plants.controller.js";
import { verifyToken } from "../../../middleware/token.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Okay!");
});

router.get("/");

router.get("/:id", verifyToken, httpGetPlant);
router.get("/:id/diseases", verifyToken, httpGetPlantDiseases);

export default router;
