import mongoose from "mongoose";

const DiseaseModel = mongoose.Schema(
  {
    commonName: {
      type: String,
      required: true,
      index: true,
    },
    scientificName: {
      type: String,
      index: true,
    },
    aliases: Array,
    description: String,
    vector: String,
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
