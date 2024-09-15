import mongoose from "mongoose";

const produceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  image: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  subCategory: {
    type: String,
    required: true,
  },
  size: {
    type: Array,
    required: true,
  },
  bestseller: {
    type: Boolean,
  },
  date: {
    type: Number,
    required: true,
  },
});

export const productModel =
  mongoose.models.product || mongoose.model("product", produceSchema);
