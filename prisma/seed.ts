import { PrismaClient } from "../src/generated/prisma/client";
import { PrismaBetterSqlite3 } from "@prisma/adapter-better-sqlite3";

const prisma = new PrismaClient({
  adapter: new PrismaBetterSqlite3({
    url: process.env.DATABASE_URL ?? "file:./dev.db",
  }),
});

async function main() {
  const user = await prisma.user.upsert({
    where: { email: "test@example.com" },
    update: {},
    create: {
      email: "test@example.com",
      name: "Test User",
    },
  });

  await prisma.project.createMany({
    data: [
      { name: "Genome Mapping 1", userId: user.id },
      { name: "Insertion Analysis A", userId: user.id },
    ],
  });

  console.log("Seed complete");
}

main().finally(() => prisma.$disconnect());

