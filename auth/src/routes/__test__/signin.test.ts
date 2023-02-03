import request from "supertest";
import { app } from "../../app";

it("fails when an incorrect that does not exist is supplied", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "stans1@stans1.com",
      password: "stan12345",
      address: "104 sadlee",
      username: "stans1",
      phone: "6476470000",
    })
    .expect(201);

  await request(app)
    .post("/api/users/signin")
    .send({
      email: "test@test.com",
      password: "asdfsadfsdf",
    })
    .expect(400);
});

it("responds with a cookie when given valid credentials", async () => {
  await request(app)
    .post("/api/users/signup")
    .send({
      email: "stans1@stans1.com",
      password: "stan12345",
      address: "104 sadlee",
      username: "stans1",
      phone: "6476470000",
    })
    .expect(201);

  const response = await request(app)
    .post("/api/users/signin")
    .send({
      email: "stans1@stans1.com",
      password: "stan12345",
    })
    .expect(200);

  expect(response.get("Set-Cookie")).toBeDefined();
});
