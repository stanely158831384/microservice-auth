import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";
import {
  errorHandler,
  NotFoundError,
  currentUser,
} from "@racoonrepublic/common";
import { deletePostRouter } from "./routes/delete";
import { indexPostRouter } from "./routes/index";
import { newPostRouter } from "./routes/new";
import { showPostRouter } from "./routes/show";

const app = express();
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== "test",
    secure: false,
  })
);

app.use(currentUser);

app.use(deletePostRouter);
app.use(indexPostRouter);
app.use(newPostRouter);
app.use(showPostRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
