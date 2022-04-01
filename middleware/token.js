import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

import log from "../services/utils.js";

export async function generateAccessToken(data) {
  let isAdmin;
  let methods;

  if (data && data === process.env.HASH) {
    isAdmin = true;
    methods = ["GET", "POST"];
  } else {
    isAdmin = false;
    methods = ["GET"];
  }

  const token = jwt.sign(
    {
      methods,
      isAdmin,
      verified: true,
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

  if (!token)
    return res
      .status(401)
      .json({ msg: "Token header is invalid, Expected <Bearer ${token}>" });

  jwt.verify(token, process.env.JWT_SECRET, (error, user) => {
    if (error) {
      return res.status(401).json({
        msg: "There's an error with your token, it has probably expired",
      });
    }
    req.user = user;
    next();
  });
}

export async function gQLVerifyToken(ctx) {
  const authHeader = ctx.headers["x-auth-token"];
  if (!authHeader) throw new Error("No token present");

  const token = authHeader.split(" ")[1];

  if (!token) throw new Error("Token header is invalid");

  let data;
  jwt.verify(token, process.env.JWT_SECRET, (e, user) => {
    if (e) {
      throw new Error("There's an error with your token");
    }
    data = user;
  });

  return data;
}
