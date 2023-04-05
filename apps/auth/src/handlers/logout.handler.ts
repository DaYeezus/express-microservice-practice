import {NextFunction, Request, Response} from "express";

export async function logoutHandler(req: Request, res: Response, next: NextFunction) {
    try {
        return res.status(200).clearCookie("token").json({
            status: 200,
            message: "Success"
        })
    } catch (err) {
        next(err)
    }
}