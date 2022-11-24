import express, { Request, Response } from "express";
import { body } from "express-validator";
import { User } from "../models/user";
import { validateRequest, BadRequestError } from "@racoonrepublic/common";
import { Password } from "../services/password";
import { currentUser } from "@racoonrepublic/common";

const router = express.Router();

router.put(
  "/api/users/change",
  [
    // body("email").trim().notEmpty().withMessage("You must supply a password"),
    body("oldPassword")
      .trim()
      .notEmpty()
      .withMessage("You must supply the original password"),
    body("newPassword")
      .trim()
      .notEmpty()
      .withMessage("You must supply a new password"),
  ],
  validateRequest,
  currentUser,
  async (req: Request, res: Response) => {
    console.log("we are in the path");
    const id = req.currentUser?.id || null;
    const { oldPassword, newPassword } = req.body;
    const exixtingUser = await User.findOne({ _id: id });
    if (!exixtingUser) {
      throw new BadRequestError("Invalid credentials");
    }

    const matchPassword = Password.compare(exixtingUser.password, oldPassword);
    if (!matchPassword) {
      throw new BadRequestError("Invalid Credenttials");
    }

    const hashed = await Password.toHash(newPassword);
    const newUser = await User.updateOne({ _id: id }, { password: hashed });
    if (!newUser.matchedCount) {
      throw new BadRequestError("Update password failed");
    }

    req.session = null;

    res.status(200).json({ message: "Update Successful" });
  }
);

export { router as changePassword };
