export interface IMessageBroker {
  notify(product: unknown): void;
}
