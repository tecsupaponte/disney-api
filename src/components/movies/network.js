import { Router } from "express"
import * as Controller from "./controller"

const movieRouter = Router()

movieRouter.route("/").get(Controller.sortQuery)
movieRouter.route("/").post(Controller.create)

export default movieRouter