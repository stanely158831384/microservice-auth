import mongoose, { mongo } from "mongoose";
import request from "supertest";
import { app } from '../../app';

const createComment = ()=>{
    return request(app)
        .post('/api/comments')
        .set('Cookie',global.signin())
        .send({
            comment: 'test comment',
            postId: new mongoose.Types.ObjectId().toHexString(),
        });
}

it('can fetch a list of tickets', async ()=>{
    await createComment();
    await createComment();
    await createComment();

    const response = await request(app).get('/api/comments').send().expect(200);
    
    expect(response.body.length).toEqual(3);
})