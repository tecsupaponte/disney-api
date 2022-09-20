import { Router } from "express"
import * as Controller from "./controller"

const genreRouter = Router()

genreRouter.route("/").get(Controller.findAll)
genreRouter.route("/").post(Controller.create)

export default genreRouter