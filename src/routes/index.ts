import type { RequestHandler } from "@sveltejs/kit";
import prisma from "../lib/db";

export const get: RequestHandler = async (req) => {
  const start = Date.now();

  const businesses = await prisma.businesses.findMany();

  if (!businesses) {
    return { status: 400 };
  }

  return {
    headers: { "Content-Type": "application/json" },
    status: 200,
    body: { businesses, start },
  };
};
