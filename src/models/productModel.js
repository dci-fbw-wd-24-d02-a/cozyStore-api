import { Schema, model } from "mongoose";

export const productSchema = new Schema({
  colors: [String],
  description: String,
  images: [String],
  name: String,
  price: Number,
  ratings: {
    amount: Number,
    average: Number,
  },
});

export const Product = model("Product", productSchema);
