import express, { Express } from "express";
import routes from "../routes";

let app: Express;

export const getApp = () => {
  if (!app) {
    app = express();
  }

  app.use(express.json());
  app.use(routes);

  return app;
};
