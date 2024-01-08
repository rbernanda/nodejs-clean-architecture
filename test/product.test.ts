import supertest from "supertest";
import {
  createTestProduct,
  deleteTestProduct,
  mockProduct,
} from "./test-utils";
import { getApp } from "../src/applications/app";
import { Product } from "../src/entities/Product";

const app = getApp();

describe("POST /api/products", () => {
  let product: Product;

  beforeEach(async () => {
    product = await createTestProduct();
  });

  afterEach(async () => {
    await deleteTestProduct(product.id!);
  });

  it("should can create product", async () => {
    const res = await supertest(app)
      .post("/api/products")
      .send({ ...mockProduct });

    expect(res.status).toBe(201);
    expect(res.body.name).toBe(mockProduct.name);
    expect(res.body.price).toBe(mockProduct.price);
    expect(res.body.stock).toBe(mockProduct.stock);
  });
});
