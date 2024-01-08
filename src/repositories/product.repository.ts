import { Pool } from "pg";
import { Product } from "../entities/Product";
import { IProductRepository } from "../interfaces/IProductRepository";
import { pgClient } from "../applications/database";

export class ProductRepository implements IProductRepository {
  private client: Pool;

  constructor() {
    this.client = pgClient();
  }

  async create({ name, price, stock }: Product): Promise<Product> {
    const product = await this.client.query(
      `INSERT INTO products (name,price,stock) VALUES ($1,$2,$3) RETURNING *`,
      [name, price, stock]
    );
    return product.rows[0];
  }

  async findMany(limit: number, offset: number): Promise<Product[]> {
    const products = await this.client.query(
      `SELECT * FROM products OFFSET $1 LIMIT $2`,
      [offset, limit]
    );
    return products.rows;
  }

  async findOne(id: number): Promise<Product> {
    const product = await this.client.query(
      `SELECT * FROM products WHERE id = $1 LIMIT 1`,
      [id]
    );
    return product.rows[0];
  }

  async update(id: number, stock: number): Promise<Product> {
    const product = await this.client.query(
      `UPDATE products SET stock=$1 WHERE id=$2 RETURNING *`,
      [stock, id]
    );
    return product.rows[0];
  }
}
