import express, { Application } from "express";
import cors from "cors";
const app: Application = express();

// middle ware

app.use(express.json());
app.use(cors());

// server routes

export default app;
