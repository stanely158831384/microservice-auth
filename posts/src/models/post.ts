import mongoose from "mongoose";

interface PostAttrs{
    userId: string;
    type: string[];
    title: string;
    detail: string;
    date: Date;
}

interface PostDoc extends mongoose.Document{
    userId: string;
    type: string[];
    title: string;
    detail: string;
    date: Date;
}

interface PostModel extends mongoose.Model<PostDoc>{
    build(attrs: PostAttrs): PostDoc;
}

const postSchema = new mongoose.Schema({
    userId:{
        type: String,
        required: true
    },
    type:[{
        type: String,
    }],
    title:{
        type: String,
        required: true,
    },
    detail:{
        type: String,
        required: true,
    },
    date:{
        type: mongoose.Schema.Types.Date,
        required: true,
    },
    commentId:[{
        type: String,
    }]
},{
    toJSON:{
        transform(doc, ret){
            ret.id = ret._id;
            delete ret._id
        }
    }
})

postSchema.statics.build = (attrs: PostAttrs) => {
    return new Post(attrs); 
}

const Post = mongoose.model<PostDoc,PostModel>('Posts',postSchema);

export {Post};