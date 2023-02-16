import { PostCancelledEvent, Publisher, Subjects } from "@racoonrepublic/common";
import { Message } from "node-nats-streaming";
import { Post } from "../../models/post";
import { queueGroupName } from "../listeners/queue-group-name";

export class PostCancelledPublisher extends Publisher<PostCancelledEvent>{
    subject: Subjects.PostCancelled = Subjects.PostCancelled;
}