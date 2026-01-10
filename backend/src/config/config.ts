import "dotenv/config";

import { PrismaPg } from "@prisma/adapter-pg";

import { PrismaClient } from "../../generated/prisma/client.ts";

interface Config {
  port: number;
  nodeEnv: string;
  databaseURL: string;
  corsOrigin: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  databaseURL: process.env.DATABASE_URL || "",
  corsOrigin: process.env.CORS_ORIGIN || "",
};

const adapter = new PrismaPg({
  connectionString: config.databaseURL,
});

export const prisma = new PrismaClient({ adapter });

export default config;
