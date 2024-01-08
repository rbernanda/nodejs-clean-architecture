import client from "../src/applications/database";
import { Product } from "../src/entities/Product";

export const mockProduct = { name: "mock", price: 10000, stock: 99 };

export const deleteTestProduct = async (id: number) => {
  const result = await client.products.delete({
    where: {
      id: id,
    },
  });

  return result;
};

export const createTestProduct = async () => {
  const { name, price, stock } = mockProduct;
  const product = await client.products.create({
    data: {
      name,
      price,
      stock,
    },
  });
  return product;
};

export const getTestProduct = async (id: number): Promise<Product> => {
  const product = await client.products.findUnique({
    where: {
      id,
    },
  });

  if (!product) throw new Error("Product not found");

  return product;
};
