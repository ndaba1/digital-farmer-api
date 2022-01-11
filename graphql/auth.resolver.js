import { generateAccessToken } from "../middleware/token.js";

export default {
  Query: {
    auth: async () => {
      const token = await generateAccessToken();
      return { token };
    },
  },
};
