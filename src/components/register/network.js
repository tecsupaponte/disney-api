import { Router } from "express"
import * as Controller from "./controller"

const registerRouter = Router()

registerRouter.route("/").post(Controller.create)

export default registerRouter