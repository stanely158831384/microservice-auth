import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { User } from "../../models/user";
import { BadRequestError, validateRequest } from "@racoonrepublic/common";
import { Worker, isMainThread } from "worker_threads";
import { parentPort, workerData } from "worker_threads";
import "../../app.ts";
import mongoose from "mongoose";

console.log(mongoose.connection.readyState);

console.log(process.env.MONGO_URI);
multi_signup(workerData.body);
async function multi_signup(body: any): Promise<void> {
  await mongoose.connect("mongodb://auth-mongo-srv:27017/auth");

  console.log(mongoose.connection.readyState);
  console.log("inside");
  const { email, password, address, phone, username } = body;
  console.log("inside");

  const existingUser = await User.findOne({ email });
  console.log("inside");
  const existingUserName = await User.findOne({ username });
  console.log("1");

  if (existingUser) {
    console.log("email existed");
  }
  if (existingUserName) {
    console.log("username exist");
  }

  const user = User.build({ email, password, address, username, phone });
  await user.save();
  console.log("2");

  const userJwt = jwt.sign(
    {
      id: user.id,
      email: user.email,
    },
    process.env.JWT_KEY!
  );

  //   req.session = {
  //     jwt: userJwt,
  //   };

  //   res.status(201).send(user);
  const result = JSON.stringify({
    jwt: userJwt,
    user: user,
  });

  parentPort?.postMessage(result);
}
