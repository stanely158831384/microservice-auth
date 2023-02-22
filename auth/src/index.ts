import mongoose from "mongoose";
import { app } from "./app";
import cluster from "node:cluster";

if (cluster.isPrimary) {
  console.log(`Primary ${process.pid} is running`);

  cluster.fork();
  cluster.fork();

  cluster.on("exit", (worker, code, signal) => {
    console.log(`worker ${worker.process.pid} died`);
  });
} else {
  const start = async () => {
    console.log("Starting up ............");
    console.log("mode: ", process.env.NODE_ENV);
    if (!process.env.JWT_KEY) {
      throw new Error("JWT_KEY must be defined");
    }

    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI must be defined");
    }
    try {
      await mongoose.connect(process.env.MONGO_URI);
      console.log("Connected to MongoDb");
    } catch (err) {
      console.error(err);
    }
    app.listen(3000, () => {
      console.log("Listening on port 3000!!!!!!!!");
    });
  };

  start();
  console.log(`Worker ${process.pid} started`);
}
