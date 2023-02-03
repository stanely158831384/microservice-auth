import mongoose from "mongoose";
import { natsWrapper } from "../../../nats-wrapper";
import { PostCancelledListener } from "../post-cancelled-listener";
import { Comment } from "../../../models/comment";
import { PostCancelledEvent } from "@racoonrepublic/common";
const setup = async () => {
  const listener = new PostCancelledListener(natsWrapper.client);
  const postId = new mongoose.Types.ObjectId().toHexString();
  const userId = new mongoose.Types.ObjectId().toHexString();

  const comment = Comment.build({
    userId,
    comment: "test comment",
    username: "username",
    postId,
    date: new Date(),
    seq: 1,
  });

  await comment.save();

  const data: PostCancelledEvent["data"] = {
    id: postId,
    commentId: [],
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { msg, data, comment, postId, userId, listener };
};

it("delete the comment, and acks the message", async () => {
  const { msg, data, comment, postId, userId, listener } = await setup();

  await listener.onMessage(data, msg);

  const deleteComment = await Comment.findById(comment.id);
  expect(msg.ack).toHaveBeenCalled();
});
