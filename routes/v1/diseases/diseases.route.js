import express from "express";
import { verifyToken } from "../../../middleware/token";
import {
  httpGetAllDiseases,
  httpGetDisease,
  httpGetDiseaseTargets,
  httpPostDisease,
} from "./diseases.controller";

const router = express.Router();

router.get("/test", (req, res) => {
  res.send("Okay!");
});

router.get("/", verifyToken, httpGetAllDiseases);

router.get("/:name", verifyToken, httpGetDisease);
router.get("/:name/targets", verifyToken, httpGetDiseaseTargets);

router.post("/", verifyToken, httpPostDisease);

export default router;
