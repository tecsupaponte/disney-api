import { Router } from "express"
import * as Controller from "./controller"

const movieRouter = Router()

movieRouter.route("/").get(Controller.sortQuery)
movieRouter.route("/").post(Controller.create)
movieRouter.route("/:id").put(Controller.update)
movieRouter.route("/:id").delete(Controller.remove)

export default movieRouter