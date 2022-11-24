import express, { Request, Response } from "express";
import { body } from "express-validator";
import jwt from "jsonwebtoken";
import { User } from "../models/user";
import { BadRequestError, validateRequest } from "@racoonrepublic/common";

const router = express.Router();

router.post(
  "/api/users/signup",
  [
    body("email").isEmail().withMessage("Email must be valid"),
    body("password")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("Password must be between 4 and 20 characters"),
    body("address")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("address must be between 4 and 20 characters"),
    body("username")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("username must be between 4 and 20 characters"),
    body("phone")
      .trim()
      .isLength({ min: 4, max: 20 })
      .withMessage("phone must be between 4 and 20 characters"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { email, password, address, phone, username } = req.body;
    const existingUser = await User.findOne({ email });
    const existingUserName = await User.findOne({ username });
    if (existingUser) {
      throw new BadRequestError("Email in use");
    }
    if (existingUserName) {
      throw new BadRequestError("Username in use");
    }

    const user = User.build({ email, password, address, username, phone });
    await user.save();

    const userJwt = jwt.sign(
      {
        id: user.id,
        email: user.email,
      },
      process.env.JWT_KEY!
    );

    req.session = {
      jwt: userJwt,
    };

    res.status(201).send(user);
  }
);

export { router as signupRouter };
