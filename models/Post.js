const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const postSchema = new Schema(
  {
    title: { type: String },
    description: { type: String },
    user: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    likes: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    share: [{ type: mongoose.Types.ObjectId, ref: "user" }],
    comments: [{ type: mongoose.Types.ObjectId, ref: "comment" }],
    mediaType: String,
    media: String,
  },
  { timestamps: true }
);

module.exports = {
  Post: model("post", postSchema),
};
