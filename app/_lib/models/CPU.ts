import mongoose, {model, Schema} from "mongoose";
import {CPU, CPUManufacture} from "@/app/types";


const CPUSchema = new Schema<CPU>({
  socket: {
    type: String,
    required: true
  },
  chipset: {
    type: String,
    required: true
  },
  frequency: {
    type: Number,
    required: true
  },
  cores: {
    type: Number,
    required: true
  },
  threads: {
    type: Number,
    required: true
  },
  hyperthreading: {
    type: Boolean,
    required: true
  },
  manufacture: {
    type: String,
    enum: CPUManufacture,
    required: true
  },
  cache: {
    l1: {
      type: Number,
      required: true
    },
    l2: {
      type: Number,
      required: true
    },
    l3: {
      type: Number,
      required: true
    }
  },
  name: {
    type: String,
    required: true
  },
  maxRam: {
    type: Number,
    require: true
  }
})

console.log(mongoose.connection.readyState)

export default mongoose.models["CPU"] || model<CPU>("CPU", CPUSchema);
