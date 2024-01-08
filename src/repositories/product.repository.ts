import { Product } from "../entities/Product";
import { IProductRepository } from "../interfaces/IProductRepository";
import prismaClient from "../applications/database";
import ResponseError from "../utilities/response-error";

export class ProductRepository implements IProductRepository {
  private client;

  constructor() {
    this.client = prismaClient;
  }

  async create({ name, price, stock }: Product): Promise<Product> {
    if (!name || !price || !stock) {
      throw new ResponseError(400, "name price and stock are required");
    }

    const product = await this.client.products.create({
      data: {
        name,
        price,
        stock,
      },
    });
    console.log({ product });
    return product;
  }

  async findMany(limit: number, offset: number): Promise<Product[]> {
    const products = await this.client.products.findMany({
      skip: offset,
      take: limit,
    });
    return products;
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.client.products.findUnique({
      where: {
        id,
      },
    });

    if (!product) throw new Error("product not found");
    return product;
  }

  async update(id: number, stock: number): Promise<Product> {
    const product = await this.client.products.update({
      where: {
        id,
      },
      data: {
        stock,
      },
    });

    return product;
  }
}
