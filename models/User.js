const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const userSchema = new Schema(
  {
    username: { type: String },
    password: { type: String },
    email: { type: String },
    gender: { type: String },
    avatar: { type: String },
    secretToken: { type: String },
    confirmed: { type: Boolean, default: false },
  },
  { timestamps: true }
);

module.exports = {
  User: model("user", userSchema),
};
