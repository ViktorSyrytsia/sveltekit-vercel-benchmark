import type { RequestHandler } from "@sveltejs/kit";
import prisma from "../lib/db";

export const get: RequestHandler = async (req) => {
  const start = Date.now();
  const business = await prisma.businesses.findMany();

  return {
    headers: { "Content-Type": "application/json" },
    status: 200,
    body: { start, business },
  };
};
