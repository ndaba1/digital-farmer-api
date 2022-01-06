import express from "express";

import plantsRoute from "../routes/plants/plants.route.js";
import diseasesRoute from "../routes/diseases/diseases.route.js";

const router = express.Router();

router.use("/plants", plantsRoute);
router.use("/diseases", diseasesRoute);

export default router;
