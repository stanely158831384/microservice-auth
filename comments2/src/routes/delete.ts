import {
  NotAuthorizedError,
  NotFoundError,
  requireAuth,
} from "@racoonrepublic/common";
import express, { Request, Response } from "express";
import { CommentCancelledPublisher } from "../events/publishers/comment-cancelled-publisher";
import { Comment } from "../models/comment";
import { natsWrapper } from "../nats-wrapper";

const router = express.Router();

router.delete(
  "/api/comments2/:id",
  requireAuth,
  async (req: Request, res: Response) => {
    const CommentItem = await Comment.findById(req.params.id);

    if (!CommentItem) {
      throw new NotFoundError();
    }

    if (CommentItem.userId !== req.currentUser!.id) {
      throw new NotAuthorizedError();
    }

    await new CommentCancelledPublisher(natsWrapper.client).publish({
      id: req.params.id,
      postId: CommentItem.userId,
    });

    await Comment.deleteOne({ id: req.params!.id });

    res.send(
      `comment: ${req.params.id} has been deleted in the comments component`
    );
  }
);

export { router as deleteCommentRouter };
