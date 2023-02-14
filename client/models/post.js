import mongoose from "mongoose";

const PostSchema = new mongoose.Schema({
  userId: String,
  type: [String],
  title: String,
  detail: String,
  date: Date,
});

module.exports = mongoose.models.Post || mongoose.model("Post", PostSchema);
