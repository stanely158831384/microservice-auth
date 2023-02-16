import { CommentCreatedEvent, Listener,PostCancelledEvent, Subjects } from "@racoonrepublic/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Comment } from "../../models/comment";

export class PostCancelledListener extends Listener<PostCancelledEvent>{
    subject: Subjects.PostCancelled = Subjects.PostCancelled;
    queueGroupName = queueGroupName;

    async onMessage(data:PostCancelledEvent['data'], msg: Message){
        const comment = await Comment.deleteMany({postId: data.id});

        if(!comment){
            throw new Error('Comment not found');
        }
        msg.ack();
    }
}