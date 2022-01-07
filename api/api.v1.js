import express from "express";

import plantsRoute from "../routes/v1/plants/plants.route.js";
import diseasesRoute from "../routes/v1/diseases/diseases.route.js";

const router = express.Router();

router.use("/plants", plantsRoute);
router.use("/diseases", diseasesRoute);

export default router;
