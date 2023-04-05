import express, {Request, Response} from "express";
import cors from "cors";
import {config} from "dotenv";

config();
const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get("/", (request: Request, response: Response) => {
    return response.status(200).json({
        msg: "User route"
    });
});

app.listen(process.env.PORT, () => {
    console.log("User service running.");
});