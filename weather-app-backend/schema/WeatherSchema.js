import mongoose from "mongoose";

const weatherSchema = new mongoose.Schema({
  cityCodesKey: {
    type: String,
    required: true,
    unique: true
  },
  data: {
    type: Object,
    required: true
  },
  timestamp: {
    type: Number,
    required: true
  }
});

export default mongoose.model("WeatherCache", weatherSchema);
