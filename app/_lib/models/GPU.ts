import {GPU, GPUManufacture} from "@/app/types";
import mongoose, {model, Schema} from "mongoose";


const GPUSchema = new Schema<GPU>({
  cudaCores: {
    type: Number,
    required: true
  },
  frequency: {
    type: Number,
    required: true
  },
  manufacture: {
    type: String,
    enum: GPUManufacture,
    required: true
  },
  gram: {
    type: Number,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  }
})

export default mongoose.models["GPU"] || model<GPU>("GPU", GPUSchema);
