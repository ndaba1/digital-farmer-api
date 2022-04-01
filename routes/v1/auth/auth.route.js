import express from "express";

import { generateAccessToken } from "../../../middleware/token.js";

const router = express.Router();

router.get("/token", async (req, res) => {
  const token = await generateAccessToken(req.query.pwd);

  return res.status(200).json({ token });
});

export default router;
