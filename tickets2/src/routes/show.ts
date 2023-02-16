import express, { Request, Response } from "express";
import { Ticket } from "../models/tickets";
import { NotFoundError } from "@racoonrepublic/common";

const router = express.Router();

router.get("/api/tickets2/:id", async (req: Request, res: Response) => {
  const ticket = await Ticket.findById(req.params.id);
  if (!ticket) {
    throw new NotFoundError();
  }
  res.send(ticket);
});

export { router as showTicketRouter };