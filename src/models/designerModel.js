import { model, Schema } from "mongoose";

const designerSchema = new Schema({
  firstName: String,
  lastName: String,
  presentation: String,
  portrait: String,
});

export const Designer = model("Designer", designerSchema);
