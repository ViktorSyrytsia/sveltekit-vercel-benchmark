import type { RequestHandler } from "@sveltejs/kit";
import prisma from "../lib/db";

export const get: RequestHandler = async (req) => {
  const start = Date.now();

  return {
    headers: { "Content-Type": "application/json" },
    status: 200,
    body: { start },
  };
};
