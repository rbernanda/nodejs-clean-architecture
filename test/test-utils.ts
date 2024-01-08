import { ProductRepository } from "../src/repositories/product.repository";
import { Product } from "../src/entities/Product";

const productRepository = new ProductRepository();

export const mockProduct = { name: "mock", price: 10000, stock: 99 };

export const deleteTestProduct = async (id: number) => {
  const result = await productRepository.delete(id);

  return result;
};

export const createTestProduct = async () => {
  const { name, price, stock } = mockProduct;
  const product = await productRepository.create({
    name,
    price,
    stock,
  });
  return product;
};

export const getTestProduct = async (id: number): Promise<Product> => {
  const product = await productRepository.findOne(id);

  if (!product) throw new Error("Product not found");

  return product;
};
