import express from "express";

import { generateAccessToken } from "../../../middleware/token.js";

const router = express.Router();

router.get("/token", async (_req, res) => {
  const token = await generateAccessToken();

  return res.status(200).json({ token });
});

export default router;
