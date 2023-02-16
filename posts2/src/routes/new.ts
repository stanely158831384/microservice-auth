import {
  requireAuth,
  validateRequest,
  BadRequestError,
  NotAuthorizedError,
  NotFoundError,
  OrderStatus,
} from "@racoonrepublic/common";
import express, { Request, Response } from "express";
import { body } from "express-validator";
import { Post } from "../models/post";

const router = express.Router();

router.post(
  "/api/posts2",
  requireAuth,
  [
    body("title").not().isEmpty(),
    body("detail").not().isEmpty(),
    body("type").isArray({ min: 1, max: 10 }),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { title, detail, type } = req.body;

    const post = Post.build({
      userId: req.currentUser!.id,
      type,
      title,
      detail,
      date: new Date(),
    });

    await post.save();

    res.status(201).send(post);
  }
);

export { router as newPostRouter };
