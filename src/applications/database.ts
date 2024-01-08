import { PrismaClient } from "@prisma/client";

let pool: PrismaClient;

const prismaClient = () => {
  if (!pool) {
    pool = new PrismaClient();
  }

  return pool;
};

const client = prismaClient();

export default client;
