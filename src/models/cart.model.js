const mongoose = require("mongoose");
mongoose.set("strictQuery", false);

const cartSchema = new mongoose.Schema(
  {
    image: { type: String, required: true },
    title: { type: String, required: true },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
