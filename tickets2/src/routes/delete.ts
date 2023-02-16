import express, { Request, Response } from "express";
import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
} from "@racoonrepublic/common";
import { natsWrapper } from "../nats-wrapper";
import { Post } from "../models/post";
import { PostCancelledPublisher } from "../events/publishers/post-cancelled-publisher";
import { Comment } from "../models/comment";

const router = express.Router();

router.delete(
  "/api/posts2/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const post = await Post.findById(req.params.id);

    if (!post) {
      throw new NotFoundError();
    }

    if (post.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }
    await Post.deleteOne({ _id: req.params.id });
    await Comment.deleteMany({ postId: req.params.id });

    await new PostCancelledPublisher(natsWrapper.client).publish({
      id: req.params.id,
      commentId: [],
    });

    res.status(204).send("delete successfully");
  }
);

export { router as deletePostRouter };
