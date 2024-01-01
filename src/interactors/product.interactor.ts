import { Product } from "../entities/Product";
import { IProductInteractor } from "../interfaces/IProductInteractor";
import { IProductRepository } from "../interfaces/IProductRepository";
import { IMailer } from "../interfaces/IMailer";
import { IMessageBroker } from "../interfaces/IMessageBroker";

export class ProductInteractor implements IProductInteractor {
  public readonly repository: IProductRepository;
  public readonly mailer: IMailer;
  public readonly messageBroker: IMessageBroker;

  constructor(
    repository: IProductRepository,
    mailer: IMailer,
    messageBroker: IMessageBroker
  ) {
    this.repository = repository;
    this.mailer = mailer;
    this.messageBroker = messageBroker;
  }

  async createProduct(body: any): Promise<Product> {
    const product = await this.repository.create(body);

    this.messageBroker.notify(product);

    return product;
  }

  async getProducts(limit: number, offset: number): Promise<Product[]> {
    const products = await this.repository.findMany(limit, offset);
    return products;
  }
  async getOneProduct(id: number): Promise<Product> {
    const product = await this.repository.findOne(id);
    return product;
  }
  async updateStock(id: number, stock: number): Promise<Product> {
    const updatedProduct = await this.repository.update(id, stock);
    this.mailer.sendEmail("user@mail.com", updatedProduct);
    return updatedProduct;
  }
}
