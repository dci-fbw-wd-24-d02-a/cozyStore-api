import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { handleError } from "./utils/handleError.js";
import { appRouter } from "./routers/AppRouter.js";
/* import { connectDb } from "../utils/connectDb.js"; */

dotenv.config();
const apiUrl = process.env.API_URL;
const port = process.env.PORT;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "*",
    methods: "GET, POST, PATCH, DELETE",
  })
);

app.use("/", appRouter);

app.use(handleError);

const startServer = async () => {
  app.listen(port, () => console.log("Server is running"));
};

startServer();

/* connectDb(apiUrl)
  .then(() => startServer())
  .catch(() => process.exit(1));
 */
