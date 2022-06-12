import mongoose from "mongoose"
import request from 'supertest'
import {app} from '../../app'



it('returns a 404 if the provided id doesnt exist', async()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/comments/${id}`)
        .set('Cookie', global.signin())
        .expect(404);
})

it('returns a 401 if the user is not authenticated', async ()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    await request(app)
        .delete(`/api/comments/${id}`)
        .expect(401);
})

it('returns a 401 if the user doesnt own the ticket', async ()=>{
    const id = new mongoose.Types.ObjectId().toHexString();
    const response = await request(app)
        .post('/api/comments')
        .set('Cookie', global.signin())
        .send({
            comment:'test comment',
            postId: id,
        })

    await request(app)
        .delete(`/api/comments/${response.body.id}`)
        .set('Cookie', global.signin())
        .expect(401);
    
})

it('returns a 404 if the user provide an invlaid id', async ()=>{
    const cookie = global.signin();
    const postId = new mongoose.Types.ObjectId().toHexString();
    const fakeId = new mongoose.Types.ObjectId().toHexString();

    const response =  await request(app)
        .post('/api/comments')
        .set('Cookie',cookie)
        .send({
            comment: 'test comment',
            postId
        });

    await request(app)
        .delete(`/api/comments/${fakeId}`)
        .set('Cookie',cookie)
        .expect(404);
})