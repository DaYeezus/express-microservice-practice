import {Router} from "express";
import {loginHandler} from "../handlers/login.handler";
import {registerHandler} from "../handlers/register.handler";
import {logoutHandler} from "../handlers/logout.handler";
import {authorizeHandler} from "../handlers/authorize.handler";

const router = Router()
router.post("/login", loginHandler)
router.post("/register", registerHandler)
router.post("/logout", logoutHandler)
router.get("/authorize", authorizeHandler)
export {
    router as AuthRouter
}