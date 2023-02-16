import { NotFoundError } from "@racoonrepublic/common";
import express, { Request, Response } from "express";
import { Post } from "../models/post";
import { body } from "express-validator";

const router = express.Router();

router.put(
  "/api/posts2/:id",
  [
    body("detail")
      .trim()
      .isLength({ min: 2, max: 300 })
      .withMessage("detail must be between 4 and 20 characters"),
  ],
  async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);
    if (!post) {
      throw new NotFoundError();
    }

    const update = await Post.updateOne(
      { _id: post.id },
      { detail: req.body.detail }
    );

    res.send(update);
  }
);

export { router as updatePostRouter };
