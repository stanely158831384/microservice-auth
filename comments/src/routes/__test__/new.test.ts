import mongoose from 'mongoose';
import request from 'supertest';
import {app} from '../../app';
import { Comment } from '../../models/comment'
import { natsWrapper }from '../../nats-wrapper';

it('has a route handler listenning to /api/comments for post request', async ()=>{
    const response = await request(app)
        .post('/api/comments')
        .send({});
    expect(response.status).not.toEqual(404);
})

it('can only be accessed if the user is signed in', async ()=>{
    await request(app)
        .post('/api/comments')
        .send({})
        .expect(401);
})

it('return a status other than 401 if the user is signed in', async ()=>{
    const response = await request(app).post('/api/comments')
        .set('Cookie', global.signin())
        .send({});

    expect(response.status).not.toEqual(401);
})

it('returns an error if an invalid comment is provided', async()=>{
    await request(app)
        .post('/api/comments')
        .set('Cookie', global.signin())
        .send({
            comment: '',
            postId: new mongoose.Types.ObjectId().toHexString(),
        })
        .expect(400);

        await request(app)
            .post('/api/comments')
            .set('Cookie',global.signin())
            .send({
                postId: new mongoose.Types.ObjectId().toHexString(),
            })
            .expect(400);
});

it('returns an error if an invalid postId is provided', async()=>{
    await request(app)
        .post('/api/comments')
        .set('Cookie', global.signin())
        .send({
            comment: 'fasdfsd',
            postId: '',
        })
        .expect(400);

    await request(app)
            .post('/api/comments')
            .set('Cookie',global.signin())
            .send({
                comment: 'fasdfsd',
            })
            .expect(400);

    const comment = await request(app)
            .post('/api/comments')
            .set('Cookie',global.signin())
            .send({
                comment: 'fasdfsd',
                postId: "1234"
            })
            .expect(201);

    console.log(comment.body);

    const sum = await request(app).get('/api/comments').send().expect(200);

    console.log(sum.body);
})

it('creates a comment with valid inputs', async ()=>{
    let commentItem = await Comment.find({});
    expect(commentItem.length).toEqual(0);
    const comment = 'test comment';
    const postId = new mongoose.Types.ObjectId().toHexString();

    await request(app)
        .post('/api/comments')
        .set('Cookie',global.signin())
        .send({
            comment,
            postId,
        })
        .expect(201);

    commentItem =  await Comment.find({});

    expect(commentItem.length).toEqual(1);

})

it('publishes an event', async ()=>{
    const comment='test comment';
    const postId = new mongoose.Types.ObjectId().toHexString();

    await request(app)
        .post('/api/comments')
        .set('Cookie', global.signin())
        .send({
            comment,
            postId,
        })
        .expect(201);

    expect(natsWrapper.client.publish).toHaveBeenCalled();
})