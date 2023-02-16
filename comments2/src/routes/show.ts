import { NotFoundError } from "@racoonrepublic/common";
import express, { Request, Response } from "express";
import { Comment } from "../models/comment";

const router = express.Router();

router.get("/comments2/:id", async (req: Request, res: Response) => {
  const commentItem = await Comment.findById(req.params.id);
  if (!commentItem) {
    throw new NotFoundError();
  }
  res.send(commentItem);
});

export { router as showCommentRouter };
