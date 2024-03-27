import mongoose, {model, Schema} from "mongoose";
import {RAM, RAMType} from "@/app/types";


const RAMSchema = new Schema<RAM>({
  capacity: {
    type: Number,
    required: true
  },
  frequency: {
    type: Number,
    required: true
  },
  manufacture: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  type: {
    type: String,
    enum: RAMType,
    required: true
  }
})

export default mongoose.models["RAM"] || model<RAM>("RAM", RAMSchema);