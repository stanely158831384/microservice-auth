import { MongoMemoryServer } from "mongodb-memory-server";
import mongoose from "mongoose";
import { app } from "../app";
import request from "supertest";
import jwt from "jsonwebtoken";

declare global {
  var signin: () => string[];
}
jest.mock("../nats-wrapper");

let mongo: any;
beforeAll(async () => {
  process.env.JWT_KEY = "asdf";
  mongo = await MongoMemoryServer.create();
  const mongoUri = mongo.getUri();

  await mongoose.connect(mongoUri);
});

beforeEach(async () => {
  jest.clearAllMocks();
  const collections = await mongoose.connection.db.collections();
  for (let collection of collections) {
    await collection.deleteMany({});
  }
});
afterAll(async () => {
  await mongoose.connection.close();
  if (mongo) {
    await mongo.stop();
  }
});

global.signin = () => {
  // Build a jwt payload
  const id = new mongoose.Types.ObjectId().toHexString();
  const payload = {
    id: id,
    email: "stan@stan.com",
  };

  //Create the jwt

  const token = jwt.sign(payload, process.env.JWT_KEY!);

  //build session Object

  const session = { jwt: token };

  //Turn that session into json

  const sessionJSON = JSON.stringify(session);

  //take json and encode it as base64

  const base64 = Buffer.from(sessionJSON).toString("base64");

  //return a string thats the cookie with encoded data

  return [`session=${base64}`];
};
