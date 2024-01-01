import { IMessageBroker } from "../interfaces/IMessageBroker";

export class MessageBroker implements IMessageBroker {
  notify(product: unknown): void {
    console.log("calling message broker");
  }
}
