import { parentPort, workerData } from "worker_threads";

parentPort?.postMessage(doWork(workerData.num));

function doWork(duration: number): string {
  const start = Date.now();
  while (Date.now() - start < duration) {}
  return "successful";
}
