import mongoose, { mongo } from "mongoose";
import request from "supertest";
import { app } from "../../app";
import { Comment } from "../../models/comment";

const postId = new mongoose.Types.ObjectId().toHexString();

const createComment = async () => {
  // return request(app)
  //     .post('/api/comments')
  //     .set('Cookie',global.signin())
  //     .send({
  //         comment: 'test comment',
  //         postId: new mongoose.Types.ObjectId().toHexString(),
  //     });

  const comment = Comment.build({
    userId: new mongoose.Types.ObjectId().toHexString(),
    comment: "test comment",
    username: "123",
    postId: postId,
    date: new Date(),
    seq: 1,
  });

  await comment.save();

  return comment;
};

it("can fetch a list of tickets", async () => {
  await createComment();
  await createComment();
  await createComment();

  // const response = await Comment.find({});

  const commentItem = await request(app)
    .get(`/api/comments/${postId}`)
    .send()
    .expect(200);
  expect(commentItem.body.length).toEqual(3);
});
