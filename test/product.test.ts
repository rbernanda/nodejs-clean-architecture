import supertest from "supertest";
import {
  createTestProduct,
  deleteTestProduct,
  mockProduct,
} from "./test-utils";
import { getApp } from "../src/applications/app";

const app = getApp();

describe("POST /api/products", () => {
  beforeEach(async () => {
    await createTestProduct();
  });

  afterEach(async () => {
    await deleteTestProduct();
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
