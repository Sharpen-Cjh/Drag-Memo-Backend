const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  username: { type: String, required: true },
  googleId: {
    type: String,
    required: true,
    unique: true,
  },
  memos: [
    {
      type: Schema.Types.ObjectId,
      ref: "Memo",
    },
  ],
});

const User = model("User", userSchema);

module.exports = User;
