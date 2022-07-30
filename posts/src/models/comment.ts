import mongoose from "mongoose";

interface CommentAttrs{
    id: string;
    userId: string;
    comment: string;
    username: string;
    postId: string;
    date: Date;
}

export interface CommentDoc extends mongoose.Document{
    userId: string;
    comment: string;
    username: string;
    postId: string;
    date: Date;
}

interface CommentModel extends mongoose.Model<CommentDoc>{
    build(attrs: CommentAttrs): CommentDoc;
}

const commentSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true,
    },
    comment:{
        type: String,
        required: true,
    },
    username:{
        type: String,
        required: true,
    },
    postId:{
        type: String,
        required: true,
    },
    date:{
        type: Date,
        required: true,
    }
},{
    toJSON: {
        transform(doc,ret){
            ret.id = ret._id;
            delete ret._id;
        }
    }
})

commentSchema.statics.build = (attrs: CommentAttrs) => {
    return new Comment({
        _id: attrs.id,
        userId: attrs.userId,
        comment: attrs.comment,
        username: attrs.username,
        postId: attrs.postId,
        date: new Date(),
    });
}

const Comment = mongoose.model<CommentDoc,CommentModel>('Comments',commentSchema);

export {Comment};

