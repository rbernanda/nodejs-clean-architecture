import { pgClient } from "../src/applications/database";
import { Product } from "../src/entities/Product";

export const mockProduct = { name: "mock", price: 10000, stock: 99 };

const client = pgClient();

export const deleteTestProduct = async (productName = "mock") => {
  const result = await client.query(
    "DELETE FROM products WHERE name = $1 RETURNING *",
    [productName]
  );

  return result.rows[0];
};

export const createTestProduct = async () => {
  const { name, price, stock } = mockProduct;
  const product = await client.query(
    `INSERT INTO products (name,price,stock) VALUES ($1,$2,$3) RETURNING *`,
    [name, price, stock]
  );
  return product.rows[0];
};

export const getTestProduct = async (id: number): Promise<Product> => {
  const product = await client.query(
    `SELECT * FROM products WHERE id = $1 LIMIT 1`,
    [id]
  );
  return product.rows[0];
};
