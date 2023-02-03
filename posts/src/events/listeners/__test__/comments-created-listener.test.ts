import { CommentCreatedEvent } from "@racoonrepublic/common";
import mongoose from "mongoose";
import { natsWrapper } from "../../../nats-wrapper";
import { CommentsCreatedListener } from "../comments-created-listener";
import { Comment } from "../../../models/comment";

const setup = async () => {
  const listener = new CommentsCreatedListener(natsWrapper.client);
  const id = new mongoose.Types.ObjectId().toHexString();
  const userId = new mongoose.Types.ObjectId().toHexString();
  const postId = new mongoose.Types.ObjectId().toHexString();

  const data: CommentCreatedEvent["data"] = {
    id,
    userId,
    comment: "first comment",
    username: "andy",
    postId,
    date: new Date(),
    seq: 1,
  };

  //@ts-ignore
  const msg: Message = {
    ack: jest.fn(),
  };

  return { listener, data, msg };
};

it("create and save a comment", async () => {
  const { listener, data, msg } = await setup();
  console.log(data.id);
  await listener.onMessage(data, msg);

  const comment = await Comment.findOne({});
  console.log(comment);
  expect(comment).toBeDefined();
  expect(comment?.comment).toEqual(data.comment);
  expect(comment?.username).toEqual(data.username);
});

it("acks the message", async () => {
  const { data, listener, msg } = await setup();

  await listener.onMessage(data, msg);

  expect(msg.ack).toHaveBeenCalled();
});
