import { PrismaClient } from "@prisma/client";
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

export async function GET() {
  try {
    const arrivals = await prisma.arrival.findMany();
    return NextResponse.json(arrivals);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch Arrivals" },
      { status: 500 }
    );
  }
}
