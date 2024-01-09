import express, { Express } from "express";
import dotenv from "dotenv";
import cors from "cors";

import routes from "../routes";
import { errorMiddleware } from "../middlewares/error-middleware";

dotenv.config();

let app: Express;

export const getApp = () => {
  if (!app) {
    app = express();
  }

  app.use(cors());

  app.use(express.json());
  app.use("/api", routes);
  app.use(errorMiddleware);

  return app;
};
