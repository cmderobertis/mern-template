const mongoose = require("mongoose")
const uniqueValidator = require("mongoose-unique-validator")
const ProductSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      minlength: [3, "Title must be at least 3 characters"],
      unique: "Title taken",
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price must be a positive number"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
      minlength: [3, "Description must be at least 3 characters"],
    },
  },
  { timestamps: true }
)
ProductSchema.plugin(uniqueValidator)
module.exports = mongoose.model("Product", ProductSchema)
