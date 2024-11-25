import { send } from "../controllers/designerControllers.js";
import { Router } from "express";

const { getOne, getMany, postOne, updateOne, deleteOne } = send;

export const designerRouter = Router();

designerRouter.route("/").get(getMany).post(postOne);
designerRouter.route("/:id").get(getOne).patch(updateOne).delete(deleteOne);
