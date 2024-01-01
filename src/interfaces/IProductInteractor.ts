import { Product } from "../entities/Product";
import { IProductRepository } from "./IProductRepository";

export interface IProductInteractor {
  createProduct(body: any): Promise<Product>;
  getProducts(limit: number, offset: number): Promise<Product[]>;
  getOneProduct(id: number): Promise<Product>;
  updateStock(id: number, stock: number): Promise<Product>;
  readonly repository: IProductRepository;
}
