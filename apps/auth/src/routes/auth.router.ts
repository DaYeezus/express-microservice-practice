import {Router} from "express";
import {loginHandler} from "../handlers/login/login.handler";
import {registerHandler} from "../handlers/register/register.handler";
import {logoutHandler} from "../handlers/logout/logout.handler";
import {authorizeHandler} from "../handlers/authorize/authorize.handler";

const router = Router()
router.post("/login" , loginHandler)
router.post("/register" , registerHandler)
router.post("/logout" , logoutHandler)
router.post("/authorize" , authorizeHandler)
export {
    router as AuthRouter
}