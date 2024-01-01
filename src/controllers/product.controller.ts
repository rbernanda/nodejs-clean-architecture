import { Response, Request, NextFunction } from "express";
import { IProductInteractor } from "../interfaces/IProductInteractor";

export class ProductController {
  private interactor: IProductInteractor;

  constructor(interactor: IProductInteractor) {
    this.interactor = interactor;
  }

  async onCreateProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const body = req.body;
      const data = await this.interactor.createProduct(body);
      return res.status(201).json(data);
    } catch (error) {
      next(error);
    }
  }

  async onGetProducts(req: Request, res: Response, next: NextFunction) {
    try {
      const offset = parseInt(req.query.offset as string) || 0;
      const limit = parseInt(req.query.limit as string) || 10;

      const products = await this.interactor.getProducts(limit, offset);

      return res.status(200).json(products);
    } catch (error) {
      next(error);
    }
  }

  async onGetOneProduct(req: Request, res: Response, next: NextFunction) {
    try {
      const { id } = req.params;
      if (!id) throw Error("ID is required");

      const product = await this.interactor.getOneProduct(parseInt(id));
      return res.status(200).json(product);
    } catch (error) {
      next(error);
    }
  }

  async onUpdateStock(req: Request, res: Response, next: NextFunction) {
    try {
      const id = req.params.id;
      const stock = req.body.stock;
      if (!id || !stock) throw Error("ID and Stock are required");

      const updatedProduct = await this.interactor.updateStock(
        parseInt(id),
        parseInt(stock)
      );

      return res.status(201).json(updatedProduct);
    } catch (error) {
      next(error);
    }
  }
}
