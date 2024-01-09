import { User } from "@prisma/client";

export interface IAuthInteractor {
  login(body: any): Promise<User>;
  register(body: any): Promise<User>;
}
