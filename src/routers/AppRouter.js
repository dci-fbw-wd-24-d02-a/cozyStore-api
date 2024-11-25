import { Router } from "express";
import { designerRouter } from "./designerRouter.js";
import { productRouter } from "./productRouter.js";

export const appRouter = Router();

appRouter.use("/designer", designerRouter);
appRouter.use("/product", productRouter);
