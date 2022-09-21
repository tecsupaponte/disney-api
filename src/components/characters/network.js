import { Router } from "express"
import * as Controller from "./controller"

const characterRouter = Router()

characterRouter.route("/").get(Controller.sortQuery)
characterRouter.route("/").post(Controller.create)
characterRouter.route("/:id").put(Controller.update)
characterRouter.route("/:id").delete(Controller.remove)

export default characterRouter