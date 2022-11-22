const { Schema, model } = require("mongoose");

const memoSchema = new Schema({
  title: { type: String },
  description: String,
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

module.exports = model("Memo", memoSchema);
