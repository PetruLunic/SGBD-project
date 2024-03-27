import {FormFactor, PC} from "@/app/types";
import mongoose, {model, Schema} from "mongoose";


const PCSchema = new Schema<PC>({
  motherboard: {
    type: Schema.ObjectId,
    ref: "Motherboard"
  },
  cpu: {
    type: Schema.ObjectId,
    ref: "CPU"
  },
  storage: [{
    type: Schema.ObjectId,
    ref: "Storage"
  }],
  ram: [{
    type: Schema.ObjectId,
    ref: "RAM"
  }],
  gpu: {
    type: Schema.ObjectId,
    ref: "GPU"
  },
  color: {
    type: String,
    required: true
  },
  formFactor: {
    type: String,
    enum: FormFactor,
    required: true
  },
  psu: {
    type: String,
    required: true
  }
})

export default mongoose.models["PC"] || model<PC>("PC", PCSchema);