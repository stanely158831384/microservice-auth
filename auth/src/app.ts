import express from "express";
import "express-async-errors";
import { json } from "body-parser";
import cookieSession from "cookie-session";

import { changeUserInfo } from "./routes/change-user-info";
import { currentUserRouter } from "./routes/current-user";
import { currentUserProfileRouter } from "./routes/current-user-profile";
import { signinRouter } from "./routes/signin";
import { signoutRouter } from "./routes/signout";
import { signupRouter } from "./routes/signup";
import { changePassword } from "./routes/change-password";
import { multiTest } from "./routes/multi-test";
import { multiSignupRouter } from "./routes/multi-signup";
import { errorHandler, NotFoundError } from "@racoonrepublic/common";

const app = express();
//this command is about the cookie-session
app.set("trust proxy", true);
app.use(json());
app.use(
  cookieSession({
    signed: false,
    // secure: process.env.NODE_ENV !== "test",
    secure: false,
  })
);
app.use(currentUserProfileRouter);
app.use(currentUserRouter);
app.use(changePassword);
app.use(changeUserInfo);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);
app.use(multiTest);
app.use(multiSignupRouter);

app.all("*", async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

export { app };
