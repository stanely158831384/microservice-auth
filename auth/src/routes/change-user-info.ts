import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { validateRequest, BadRequestError } from "@racoonrepublic/common";
import { Password } from "../services/password";
import { currentUser } from "@racoonrepublic/common";

const router = express.Router();

router.put(
  "/api/users/changeuserinfo",
  [
    body("email").isEmail().withMessage("Email must be valid"),
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
  currentUser,
  async (req: Request, res: Response) => {
    console.log("inside the changeuserinfo");
    const { email, address, username, phone } = req.body;
    console.log("this is the email:", email);
    const id = req.currentUser?.id || null;
    console.log("here is the id:", id);
    const exixtingUser = await User.findOne({ _id: id });
    if (!exixtingUser) {
      throw new BadRequestError("Invalid credentials");
    }
    const newUser = await User.updateOne(
      { _id: exixtingUser.id },
      { email: email, address: address, username: username, phone: phone }
    );

    if (!newUser.matchedCount) {
      throw new BadRequestError("Update user info failed");
    }

    req.session = null;

    res.status(200).json({ message: "Update user info Successful" });
  }
);

export { router as changeUserInfo };
