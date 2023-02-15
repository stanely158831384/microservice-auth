import express, { Request, Response } from "express";
import { Post } from "../models/post";
import { validateRequest, BadRequestError } from "@racoonrepublic/common";

const router = express.Router();

router.get("/api/posts", async (req: Request, res: Response) => {
  console.log("in the /api/posts");
  const post = await Post.find({
    _id: undefined,
  });
  if (!post) {
    console.log("post", post);
    throw new BadRequestError("post find error");
  }
  res.status(200).send(post);
});

export { router as indexPostRouter };
