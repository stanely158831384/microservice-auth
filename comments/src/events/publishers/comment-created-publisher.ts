import { CommentCreatedEvent, Publisher, Subjects } from "@racoonrepublic/common";


export class CommentCreatedPublisher extends Publisher<CommentCreatedEvent>{
    subject: Subjects.commentCreated = Subjects.commentCreated;
}