import { CommentCancelledEvent, Listener, Subjects } from "@racoonrepublic/common";
import { Message } from "node-nats-streaming";
import { queueGroupName } from "./queue-group-name";
import { Comment } from '../../models/comment';

export class CommentCancelledListener extends Listener<CommentCancelledEvent>{
    subject: Subjects.commentCancel = Subjects.commentCancel;
    queueGroupName = queueGroupName;

    async onMessage(data: CommentCancelledEvent['data'], msg: Message){
        const comment = await Comment.findById(data.id);

        if(!comment){
            throw new Error('Comment not found') 
        }
        debugger
        comment.set({postId:"delete"});
        await comment.save();

        await Comment.deleteOne({_id:data.id});
        msg.ack();
    }
}