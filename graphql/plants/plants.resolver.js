import { gQLVerifyToken } from "../../middleware/token.js";
import { getAllPlants, getPlantByName } from "../../models/plants.model.js";

export default {
  Query: {
    plants: async (_parent, _args, ctx, _info) => {
      const res = await gQLVerifyToken(ctx);

      if (res.verified) {
        const data = await getAllPlants();
        return data;
      }
    },
    plant: async (_parent, args, ctx, _info) => {
      const res = await gQLVerifyToken(ctx);

      if (res.verified) {
        const data = await getPlantByName(args.name);
        return data;
      }
    },
  },
};
