import { Router } from "express"
import * as Controller from "./controller"

const LoginRouter = Router()

LoginRouter.route("/").post(Controller.findOne)

export default LoginRouter