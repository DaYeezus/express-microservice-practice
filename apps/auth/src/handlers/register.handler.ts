import {NextFunction, Request, Response} from "express";
import {registerValidator} from "../validators/register.validator";
import {register} from "../services/auth.service";

export async function registerHandler(req: Request, res: Response, next: NextFunction) {
    try {
        const {username, password, email} = await registerValidator.parseAsync(req.body);
        await register(email, username, password)
        return res.status(200).json({
            status: 200,
            message: "Success."
        })
    } catch (err) {
        next(err)
    }
}