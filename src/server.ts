import { Request, Response } from "express";
import { Server } from "http";
import app from "./app";
import dbConnected from "./app/dbConnect";
import config from "./app/config";
const port = config.port;

// database connect
dbConnected();
app.get("/", (req: Request, res: Response) => {
  res.send("server running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});

let server: Server;
process.on("unhandledRejection", (error) => {
  if (server) {
    server.close(() => {
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
  console.log(error);
});
process.on("uncaughtException", (error) => {
  console.log(error);
  process.exit(1);
});
