import { Post } from "../../models/post";
import request from 'supertest'
import { app } from '../../app'
import mongoose from 'mongoose'


const buildPost = async ()=>{
    const post = Post.build({
        userId: new mongoose.Types.ObjectId().toHexString(),
        type: ['fashion'],
        title: 'food',
        detail: 'this is the first post',
        date: new Date(),
    })

    await post.save();

    return post;
}

it('fetches posts', async ()=>{
    const postOne = await buildPost();
    const postTwo = await buildPost();

    const post = await request(app)
        .get('/api/posts')
        .expect(200);

    console.log(post);

    expect(post.body.length).toEqual(2);
})