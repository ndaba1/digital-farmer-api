import mongoose from "mongoose";

const PlantSchema = mongoose.Schema(
  {
    commonName: {
      type: String,
      required: true,
      index: true,
    },
    latinName: {
      type: String,
      required: true,
      index: true,
    },
    pests: {
      type: Array,
    },
    diseases: {
      type: Array,
      required: true,
    },
    sampleImages: {
      type: Array,
    },
    uses: {
      type: Array,
    },
    requirements: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Plant", PlantSchema);
