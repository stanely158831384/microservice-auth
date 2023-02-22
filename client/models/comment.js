// userId: string;
// comment: string;
// username: string;
// postId: string;
// date: Date;
// seq: number;

import mongoose from "mongoose";

const CommentSchema = new mongoose.Schema({
  userId: String,
  comment: String,
  username: String,
  postId: String,
  date: Date,
  seq: Number,
});

module.exports =
  mongoose.models.Comment || mongoose.model("Comment", CommentSchema);
