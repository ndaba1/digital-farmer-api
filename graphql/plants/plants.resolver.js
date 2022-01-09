import { getAllPlants } from "../../models/plants.model.js";
// import { httpGetAllPlants } from "../../routes/v1/plants/plants.controller.js";

export default {
  Query: {
    plants: async () => {
      const data = await getAllPlants();
      return data;
    },
  },
};
