import { NextResponse } from "next/server";

import { getPortfolioLikesCount } from "@/lib/portfolio-likes";

export async function GET() {
  const count = await getPortfolioLikesCount();
  return NextResponse.json({ count });
}
