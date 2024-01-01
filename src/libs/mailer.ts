import { IMailer } from "../interfaces/IMailer";

export class Mailer implements IMailer {
  sendEmail(to: string, product: unknown): void {
    console.log(`Sending email to ${to} for ${product}`);
  }
}
