import {NextFunction, Request, Response} from "express";
import {jwtRegex} from "../config/constants";
import {JwtPayload, verify} from "jsonwebtoken";
import {getUserById} from "../database/repositories/user.repository";


export async function authorizeHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization || req.cookies['token']
        console.log(req.cookies['token'])
        console.log(req.headers.authorization)
        if (!token || !jwtRegex.test(token)) {
            throw  {status: 401, message: "Invalid token,login again"}
        }
        const result = verify(token, "secretKey") as JwtPayload
        if (!result || !result.exp || !result.id) {
            throw  {status: 401, message: "Invalid token,login again"}
        }
        const currentTime = Date.now() / 1000;
        if (result.exp < currentTime) {
            throw  {status: 401, message: "Invalid token,login again"}
        }
        const user = await getUserById(result.id)
        return res.status(200).json({
            status: 200,
            user
        })

    } catch (err) {
        next(err)
    }
}