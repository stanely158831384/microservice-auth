import mongoose, { mongo } from "mongoose";
import request from "supertest";
import { app } from '../../app';
import { Comment } from '../../models/comment';

const createComment = async ()=>{
    // return request(app)
    //     .post('/api/comments')
    //     .set('Cookie',global.signin())
    //     .send({
    //         comment: 'test comment',
    //         postId: new mongoose.Types.ObjectId().toHexString(),
    //     });

    const comment = Comment.build({
        userId: new mongoose.Types.ObjectId().toHexString(),
        comment: 'test comment',
        username: '123',
        postId: new mongoose.Types.ObjectId().toHexString(),
        date: new Date(),
    })

    await comment.save();

    return comment;
}

it('can fetch a list of tickets', async ()=>{
    await createComment();
    await createComment();
    await createComment();

    // const response = await Comment.find({});

    const commentItem = await request(app).get('/api/comments').send().expect(200);
    console.log(commentItem);
    expect(commentItem.body.length).toEqual(3);
})