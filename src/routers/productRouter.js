import { send } from "../controllers/productControllers.js";
import { Router } from "express";

const { getOne, getMany, postOne, updateOne, deleteOne } = send;

export const productRouter = Router();

productRouter.route("/").get(getMany).post(postOne);
productRouter.route("/:id").get(getOne).patch(updateOne).delete(deleteOne);
