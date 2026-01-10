import dotenv from "dotenv";

import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "../../generated/prisma/client.ts";

dotenv.config();

interface Config {
  port: number;
  nodeEnv: string;
  databaseURL: string;
}

const config: Config = {
  port: Number(process.env.PORT) || 3000,
  nodeEnv: process.env.NODE_ENV || "development",
  databaseURL: process.env.DATABASE_URL || "",
};

const adapter = new PrismaPg({
  connectionString: config.databaseURL,
});

export const prisma = new PrismaClient({ adapter });

export default config;
