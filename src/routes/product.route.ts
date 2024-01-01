import express from "express";
import { ProductController } from "../controllers/product.controller";
import { ProductInteractor } from "../interactors/product.interactor";
import { ProductRepository } from "../repositories/product.repository";
import { Mailer } from "../libs/mailer";
import { MessageBroker } from "../libs/messageBroker";

const repository = new ProductRepository();
const mailer = new Mailer();
const messageBroker = new MessageBroker();

const interactor = new ProductInteractor(repository, mailer, messageBroker);
const controller = new ProductController(interactor);

const router = express.Router();

// https://stackoverflow.com/a/70933036
// ways to reload and compile node js and typescript
router.get("/products", controller.onGetProducts.bind(controller));
router.get("/products/:id", controller.onGetOneProduct.bind(controller));
router.post("/products", controller.onCreateProduct.bind(controller));
router.patch("/products/:id", controller.onUpdateStock.bind(controller));

export default router;
