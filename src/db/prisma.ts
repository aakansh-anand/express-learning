import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient();

export async function connectPostgres() {
  try {
    await prisma.$connect();
    console.log("Connected to PostgreSQL ✅");
  } catch (error) {
    console.log("Failed to connect to PostgreSQL ❌", error);
    process.exit(1);
  }
}
