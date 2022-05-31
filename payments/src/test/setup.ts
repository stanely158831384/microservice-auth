import { MongoMemoryServer } from 'mongodb-memory-server';
import mongoose from 'mongoose';
import { app } from '../app';
import request from 'supertest';
import jwt from 'jsonwebtoken';

declare global {
    var signin:(id?:string)=>string[];
  }
jest.mock('../nats-wrapper');

process.env.STRIPE_KEY = 'sk_test_51L5AjNAvIBigeNSt0Qw3bMT81aSrvYJuoKlTghkhxHZGCqB1MlkEnDaD80SLQRlGKDQhhbdHDSNHpzdvvYwREGVC00bK99i9si'

let mongo:any;
beforeAll(async() =>{
    process.env.JWT_KEY = 'asdf';
    mongo = await MongoMemoryServer.create();
    const mongoUri = mongo.getUri();

    await mongoose.connect(mongoUri);
})

beforeEach(async ()=>{
    jest.clearAllMocks();
    const collections = await mongoose.connection.db.collections();
    for (let collection of collections){
        await collection.deleteMany({});
    }

})
afterAll(async () =>{
    await mongoose.connection.close();
  if (mongo) {
    await mongo.stop();
  }
})

global.signin = (id?: string) =>{
    // Build a jwt payload

    const payload = {
        id: id || new mongoose.Types.ObjectId().toHexString(),
        email: 'stan@stan.com'
    }

    //Create the jwt

    const token = jwt.sign(payload, process.env.JWT_KEY!);

    //build session Object

    const session = {jwt: token};

    //Turn that session into json

    const sessionJSON = JSON.stringify(session);

    //take json and encode it as base64

    const base64 = Buffer.from(sessionJSON).toString('base64');

    //return a string thats the cookie with encoded data

    return [`session=${base64}`]
}