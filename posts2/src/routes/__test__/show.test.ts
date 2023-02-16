import mongoose from 'mongoose';
import request from 'supertest'
import { app } from '../../app'
import { Post } from '../../models/post';


it("create a post and use show api",async ()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    const userOne = global.signin(id);
    const post1 = await request(app)
        .post(`/api/posts`)
        .set('Cookie',userOne)
        .send({
            title: '123',
            type: ['fashion'],
            detail: 'this is the detail',
        })
        .expect(201);

    const post2 = await request(app)
        .get(`/api/posts/${post1.body.id}`)
        .expect(200);

    expect(post2.body.userId).toEqual(id);
})
