import { PrismaClient } from "@prisma/client";
require("dotenv").config({ path: ".env" });

const db = new PrismaClient();

export default db;
