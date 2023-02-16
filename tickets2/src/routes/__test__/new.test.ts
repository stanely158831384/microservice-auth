import mongoose from "mongoose";
import request from "supertest";
import { app } from "../../app";

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

it("craete new post, and index it", async () => {
  const id = new mongoose.Types.ObjectId().toHexString();

  const post1 = await createPost(id);
  const post2 = await createPost(id);
  const post3 = await createPost(id);

  const post = await request(app).get(`/api/posts/`).expect(200);

  expect(post.body.length).toEqual(3);
});
