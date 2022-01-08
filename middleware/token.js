import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import log from "../services/utils.js";

export async function generateAccessToken() {
  const token = jwt.sign(
    {
      methods: "GET",
      verified: true,
      isAdmin: false,
    },
    process.env.JWT_SECRET,
    { expiresIn: 3600 }
  );

  return token;
}

export async function verifyToken(req, res, next) {
  const authHeader = req.headers["x-auth-token"];
  if (!authHeader) return res.status(401).json({ msg: "No token present" });

  const token = authHeader.split(" ")[1];

  if (!token) return res.status(401).json({ msg: "Token header is invalid" });

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      log.debug(error);
      return res.status(401).json({ msg: "Token is invalid" });
    }
    req.user = user;
    next();
  });
}
