import mongoose from "mongoose";

interface CommentAttrs{
    userId: string;
    comment: string;
    username: string;
    postId: string;
    date: Date;
}

interface CommnentDoc extends mongoose.Document{
    userId: string;
    comment: string;
    username: string;
    postId: string;
    date: Date;
}

interface CommnentModel extends mongoose.Model<CommnentDoc>{
    build(attrs: CommentAttrs): CommnentDoc;
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
},
{
    toJSON:{
        transform(doc,ret){
            ret.id = ret._id;
            delete ret._id;
        }
    }
})

commentSchema.statics.build = (attrs: CommentAttrs) => {
    return new Comment(attrs);
}

const Comment = mongoose.model<CommnentDoc,CommnentModel>('Comments',commentSchema);

export {Comment};