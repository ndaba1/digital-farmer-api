import mongoose from "mongoose";

const PlantSchema = mongoose.Schema(
  {
    commonName: {
      type: String,
      required: true,
    },
    latinName: {
      type: String,
      required: true,
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
    uses: String,
    history: String,
    requirements: String,
  },
  { timestamps: true }
);

export default mongoose.model("Plant", PlantSchema);
