import request from "supertest";
import { app } from "../../app";
import { natsWrapper } from "../../nats-wrapper";
import mongoose from "mongoose";
import { Comment } from "../../models/comment";
import { Post } from "../../models/post";

it("create a comment and post first, then delete an post, and its own comments", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();
  const userOne = global.signin(id);

  const postItem = Post.build({
    userId: id,
    type: ["fashion"],
    title: "food",
    detail: "this is a food",
    date: new Date(),
  });

  await postItem.save();

  const commentItem = Comment.build({
    id: new mongoose.Types.ObjectId().toHexString(),
    userId: new mongoose.Types.ObjectId().toHexString(),
    comment: "first comment",
    username: "andy",
    postId: postItem.id,
    date: new Date(),
    seq: 1,
  });

  await commentItem.save();

  const postItemId = postItem.id;

  let deletedComments = await Comment.findOne({ postId: postItemId });
  expect(deletedComments?.postId).toEqual(postItem.id);

  await request(app)
    .delete(`/api/posts/${postItemId}`)
    .set("Cookie", global.signin(id))
    .expect(204);

  //check posts

  const postResponse = await request(app)
    .get(`/api/posts/${postItemId}`)
    .expect(404);

  //check comments

  deletedComments = await Comment.findOne({ postId: postItemId });

  expect(deletedComments).toEqual(null);
});
