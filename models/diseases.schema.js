import mongoose from "mongoose";

const DiseaseModel = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    targets: {
      type: Array,
    },
    sampleImages: {
      type: Array,
    },
    diseaseType: {
      type: String,
    },
    symptoms: {
      type: Array,
    },
    measures: {
      type: Array,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Disease", DiseaseModel);
