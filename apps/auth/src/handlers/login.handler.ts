import {NextFunction, Request, Response} from "express";
import {login} from "../services/auth.service";
import {loginValidator} from "../validators/login.validator";

export async function loginHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const {password, email} = await loginValidator.parseAsync(req.body);
        const token = await login(email, password)
        return res.status(200).cookie("token", token, {
            expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30), // 30 days
            httpOnly: true,
        }).json({
            status: 200,
            message: "Success.",
            token
        })
    } catch (err) {
        next(err)
    }
}