import mongoose from "mongoose";

interface CommentAttrs{
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
        type: mongoose.Schema.Types.Date,
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
    return new Comment(attrs);
}

const Comment = mongoose.model<CommentDoc,CommentModel>('Comments',commentSchema);

export {Comment};

