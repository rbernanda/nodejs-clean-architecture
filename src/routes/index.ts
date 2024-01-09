import express from "express";
import productRoutes from "./product.route";
import authRoutes from "./auth.route";

const router = express.Router();

router.use(authRoutes);

router.use(productRoutes);

export default router;
