import mongoose, {model, Schema} from "mongoose";
import {RAM, Storage, StorageType} from "@/app/types";


const StorageSchema = new Schema<Storage>({
  type: {
    type: String,
    enum: StorageType,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  readSpeed: {
    type: Number,
    required: true
  },
  writeSpeed: {
    type: Number,
    required: true
  }
})

export default mongoose.models["Storage"] || model<Storage>("Storage", StorageSchema);
