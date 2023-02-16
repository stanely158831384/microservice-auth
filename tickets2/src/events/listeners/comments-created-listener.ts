import {
  Listener,
  CommentCreatedEvent,
  Subjects,
  TicketCreatedEvent,
} from "@racoonrepublic/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Comment } from "../../models/comment";

export class CommentsCreatedListener extends Listener<CommentCreatedEvent> {
  subject: Subjects.commentCreated = Subjects.commentCreated;
  queueGroupName = queueGroupName;

  async onMessage(data: CommentCreatedEvent["data"], msg: Message) {
    const { id, userId, comment, username, postId, date, seq } = data;
    const commentItem = Comment.build({
      id,
      userId,
      comment,
      username,
      postId,
      date,
      seq,
    });

    await commentItem.save();

    msg.ack();
  }
}
