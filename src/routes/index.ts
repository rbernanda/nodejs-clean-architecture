import express from "express";
import productRoutes from "./product.route";

const router = express.Router();

router.use("/api", productRoutes);

export default router;
