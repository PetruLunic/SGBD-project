import mongoose, {model, Model, Schema} from "mongoose";
import {FormFactor, Motherboard} from "@/app/types";

interface MotherboardModel extends Model<Motherboard>{}

const MotherboardSchema = new Schema<Motherboard>({
  name: {
    type:String,
    required: true
  },
  chipset: {
    type: String,
    required: true
  },
  bios: {
    type: String,
    required: true
  },
  manufacture: {
    type: String,
    required: true
  },
  sataSlots: {
    type: Number,
    required: true
  },
  maxRam: {
    type: Number,
    required: true
  },
  ramSlots: {
    type: Number,
    required: true
  },
  formFactor: {
    type: String,
    enum: FormFactor,
    required: true
  },

})

export default mongoose.models["Motherboard"] as MotherboardModel || model<Motherboard, MotherboardModel>("Motherboard", MotherboardSchema);