import express, { Request, Response } from "express";
import { Worker, isMainThread } from "worker_threads";
import path, { dirname } from "path";

const router = express.Router();

router.get("/api/multi/test", (req: Request, res: Response) => {
  const digit: number = 10;
  // path.resolve(__dirname, "./multi_task/multi_task.ts")
  const w1 = new Worker("/app/src/multi_task/multi_task.ts", {
    workerData: { num: digit },
  });
  w1.once("message", (result) => {
    console.log(`${result}`);
    res.status(201).send("successful");
  });
  w1.on("error", (error) => {
    console.log(error);
  });
  w1.on("exit", (exitCode) => {
    // console.log(`It exited with code ${exitCode}`);
  });
  // res.status(201).send("successful");
});

export { router as multiTest };
