import {NextFunction, Request, Response} from "express";

export function NotfoundHandler(req: Request, res: Response, next: NextFunction) {
    return res.status(404).json({status: 404, message: "Route you looking for does not exist"})
}

export function ServerErrorHandler(error: any, req: Request, res: Response, next: NextFunction) {
    const status = error?.status || error?.statusCode || 500
    const message = error?.message || "Server Internal Error"
    return res.status(status).json({
        status,
        message
    })
}