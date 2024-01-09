import { User } from "@prisma/client";

export interface IAuthRepository {
  login(): Promise<User>;
  register(): Promise<User>;
}
