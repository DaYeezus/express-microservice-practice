
import express, {  Request, Response } from "express";
import cors from "cors";
import { config } from "dotenv";
import morgan from "morgan"
import cookieParser from "cookie-parser"
import router from "./routes/router";
import {NotfoundHandler, ServerErrorHandler} from "./handlers/error-handlers";
config();
const app =  express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan("dev"))
app.use(cookieParser("secretKey"))
app.use("/api" , router)
const server = app.listen(process.env.PORT, () => {
  console.log("Auth service running.");
});
app.use(ServerErrorHandler)
app.use("*" , NotfoundHandler)

process.on('SIGINT', () => {
  console.info('SIGINT signal received.');
  server.close(() => {
    console.log('Server closed.');
    process.exit(0);
  });
});