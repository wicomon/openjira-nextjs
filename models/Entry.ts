import mongoose, {Model, Schema} from "mongoose";
import { Entry } from "../interfaces";

export interface IEntry extends Entry {}

const entrySchema = new Schema({
  description: {
    type: String,
    required: true
  },
  status: {
    type: String,
    enum: {
      values : ['pending', 'in-progress', 'finished'],
      message: '{VALUE} no es un valor permitido'
    },
    default: 'pending'
  },
  createdAt: {
    type: Number
  }
});


const EntryModel: Model<IEntry> = mongoose.models.Entry || mongoose.model('Entry', entrySchema);


export default EntryModel;