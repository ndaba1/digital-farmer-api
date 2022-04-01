import { gQLVerifyToken } from "../../middleware/token";
import { getAllDiseases, getDiseaseByName } from "../../models/diseases.model";

export default {
  Query: {
    diseases: async (_parent, _args, ctx, _info) => {
      const user = await gQLVerifyToken(ctx);

      if (user.verified) {
        const data = await getAllDiseases();
        return data;
      }
    },
    disease: async (_parent, args, ctx, _info) => {
      const user = await gQLVerifyToken(ctx);

      if (user.verified) {
        const data = await getDiseaseByName(args.name);
        return data;
      }
    },
  },
};
