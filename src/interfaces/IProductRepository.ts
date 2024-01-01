import { Product } from "../entities/Product";

export interface IProductRepository {
  create(body: any): Promise<Product>;
  findMany(limit: number, offset: number): Promise<Product[]>;
  findOne(id: number): Promise<Product>;
  update(id: number, stock: number): Promise<Product>;
}
