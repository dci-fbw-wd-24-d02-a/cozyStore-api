import { Router } from "express";

export const appRouter = Router();

appRouter.use("/", async (req, res) => {
  res.send("Hello There");
});
