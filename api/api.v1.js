import express from "express";

import plantsRoute from "../routes/v1/plants/plants.route.js";
import diseasesRoute from "../routes/v1/diseases/diseases.route.js";
import authRoute from "../routes/v1/auth/auth.route.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/plants", plantsRoute);
router.use("/diseases", diseasesRoute);

export default router;
