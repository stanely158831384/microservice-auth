import { CommentCancelledEvent, Publisher, Subjects } from "@racoonrepublic/common";


export class CommentCancelledPublisher extends Publisher<CommentCancelledEvent>{
    subject:Subjects.commentCancel = Subjects.commentCancel;
}