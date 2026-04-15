import { NextResponse } from "next/server";

import { incrementPortfolioLikesCount } from "@/lib/portfolio-likes";

/**
 * POST — increments the public like counter; optional Resend email ping.
 * Counter persistence:
 *   - Production: set UPSTASH_REDIS_REST_URL + UPSTASH_REDIS_REST_TOKEN (Upstash Redis REST)
 *   - Local dev: data/portfolio-hearts.json (writable)
 *   - Fallback display seed: NEXT_PUBLIC_PORTFOLIO_HEARTS
 *
 * Email (.env.local):
 *   RESEND_API_KEY=re_...
 *   PORTFOLIO_LIKE_NOTIFY_EMAIL=you@example.com
 *   RESEND_FROM_EMAIL=Portfolio <onboarding@resend.dev>
 */
export async function POST() {
  const count = await incrementPortfolioLikesCount();

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.PORTFOLIO_LIKE_NOTIFY_EMAIL;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    return NextResponse.json({ notified: false, count });
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject: "Someone liked your portfolio",
        html: "<p>Your portfolio heart button was used — no personal details were collected.</p>",
      }),
    });

    if (!res.ok) {
      return NextResponse.json({ notified: false, count });
    }

    return NextResponse.json({ notified: true, count });
  } catch {
    return NextResponse.json({ notified: false, count });
  }
}
