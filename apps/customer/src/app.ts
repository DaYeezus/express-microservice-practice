import express, { Express, Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import  "reflect-metadata";
config();
const app: Express = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.get("/", (request: Request, response: Response) => {
  return response.status(200).json({
    msg: "Customer route"
  });
});

app.listen(process.env.PORT, () => {
  console.log("Customer service running.");
});