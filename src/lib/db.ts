
// there we will got it from prisma library
import { PrismaClient } from "@prisma/client";



let prisma: PrismaClient | undefined;


//there we will connection db with our project
export const db = prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") {
  prisma = db;
}
