import express, { Request, Response } from "express";
import { currentUser } from "@racoonrepublic/common";
import { User } from "../models/user";
import { validateRequest, BadRequestError } from "@racoonrepublic/common";

const router = express.Router();

router.get(
  "/api/users/currentuser/profile",
  currentUser,
  async (req: Request, res: Response) => {
    const data = req.currentUser || null;
    let result = null;
    if (data) {
      const email = data.email;
      const id = data.id;
      result = await User.findOne({ email });
    }
    if (!result) {
      throw new BadRequestError("Invalid credentials");
    }
    res.json({ user: result });
  }
);

export { router as currentUserProfileRouter };
