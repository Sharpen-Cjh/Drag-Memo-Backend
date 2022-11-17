const { Schema, model } = require("mongoose");

const memoSchema = new Schema({
  title: { type: String, required: true, unique: true },
  description: String,
});

module.exports = model("Memo", memoSchema);
