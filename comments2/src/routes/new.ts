import express, { Request, Response } from "express";
import { requireAuth, validateRequest } from "@racoonrepublic/common";
import { body } from "express-validator";
import { Comment } from "../models/comment";
import { CommentCreatedPublisher } from "../events/publishers/comment-created-publisher";
import { natsWrapper } from "../nats-wrapper";
const router = express.Router();

router.post(
  "/api/comments",
  requireAuth,
  [
    body("comment").not().isEmpty().withMessage("Comment is required"),
    body("postId").not().isEmpty().withMessage("postId is required"),
    body("seq").isInt().withMessage("seq must be a digit"),
  ],
  validateRequest,
  async (req: Request, res: Response) => {
    const { comment, postId, seq } = req.body;

    const commentItem = Comment.build({
      userId: req.currentUser!.id,
      comment,
      username: req.currentUser!.email,
      postId,
      date: new Date(),
      seq: seq,
    });

    await commentItem.save();

    await new CommentCreatedPublisher(natsWrapper.client).publish({
      id: commentItem.id,
      userId: commentItem.userId,
      comment: commentItem.comment,
      username: commentItem.username,
      postId: commentItem.postId,
      date: commentItem.date,
      seq: seq,
    });
    res.status(201).send(commentItem);
  }
);

export { router as createCommentRouter };
