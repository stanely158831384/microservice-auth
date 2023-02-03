import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";
import { Post } from "../../models/post";

const createPost = async (id: string) => {
  const userOne = global.signin(id);
  const post = await request(app)
    .post("/api/posts")
    .set("Cookie", userOne)
    .send({
      type: ["fashion"],
      title: "food",
      detail: "this is the first post",
    });

  return post;
};

it("create a post and update a post with api", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  //create a post
  const postOne = await createPost(id);

  //check the post id
  const post2 = await request(app)
    .get(`/api/posts/${postOne.body.id}`)
    .expect(200);

  expect(post2.body.userId).toEqual(id);

  //change the detail
  const postChanging = await request(app)
    .put(`/api/posts/${postOne.body.id}`)
    .send({
      detail: "this",
    })
    .expect(200);

  const post3 = await request(app)
    .get(`/api/posts/${postOne.body.id}`)
    .expect(200);
  expect(post3.body.detail).toEqual("this");
});
