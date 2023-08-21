import dotenv from "dotenv";
dotenv.config();

export const env = {
  SERVER_PORT: process.env.SERVER_PORT ?? 3033,
  NODE_ENV: process.env.NODE_ENV ?? "dev",
};