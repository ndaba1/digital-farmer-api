// import { generateAccessToken } from "../middleware/token.js";
const { generateAccessToken } = require("../middleware/token.js");

module.exports = {
  Query: {
    auth: async () => {
      const token = await generateAccessToken();
      return { token };
    },
  },
};
