const mongoose = require("mongoose");
const { Schema, model } = mongoose;

const commentSchema = new Schema(
  {
    content: { type: String },
    postId: mongoose.Types.ObjectId,
    postUserId: mongoose.Types.ObjectId,
    replies: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    likes: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
    user: [
      {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  { timestamps: true }
);

module.exports = {
  Comment: model("comment", commentSchema),
};
