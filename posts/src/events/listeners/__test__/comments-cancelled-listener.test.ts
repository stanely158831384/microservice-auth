import { natsWrapper } from "../../../nats-wrapper";
import { CommentCancelledListener } from "../comments-cancelled-listener";
import { Comment } from "../../../models/comment";
import mongoose from "mongoose";
import { CommentCancelledEvent } from "@racoonrepublic/common";

const setup = async () => {
  const listener = new CommentCancelledListener(natsWrapper.client);
  const id = new mongoose.Types.ObjectId().toHexString();
  const userId = new mongoose.Types.ObjectId().toHexString();
  const postId = new mongoose.Types.ObjectId().toHexString();
  const comment = Comment.build({
    id,
    userId,
    comment: "first comment",
    username: "andy",
    postId,
    date: new Date(),
    seq: 1,
  });

  await comment.save();

  const data: CommentCancelledEvent["data"] = {
    id: comment.id,
    postId: comment.postId,
  };
  // @ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };
  return { msg, data, comment, listener };
};

it("delete a comment by listener, and check is it already deleted", async () => {
  const { msg, data, comment, listener } = await setup();
  await listener.onMessage(data, msg);
  debugger;
  const deletedComment = await Comment.findById(comment.id);
  expect(deletedComment?.id).not.toEqual(data.id);
});

it("acks the message", async () => {
  const { msg, data, listener } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
