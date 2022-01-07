import express from "express";

import { httpGetPlant, httpGetPlantDiseases } from "./plants.controller.js";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Okay!");
});

router.get("/plants/:id", httpGetPlant);
router.get("/plants/:id/diseases", httpGetPlantDiseases);

export default router;
