import { NextResponse } from "next/server";
import { Resend } from "resend";

import {
  buildOwnerNotificationHtml,
  buildOwnerNotificationPlainText,
} from "@/lib/email/contact-owner-notification-html";
import { getPublicSiteOrigin } from "@/lib/site-origin";

const MAX_NAME = 200;
const MAX_MESSAGE = 10_000;

function isValidEmail(s: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);
}

export async function POST(request: Request) {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const from = process.env.RESEND_FROM?.trim();
  const to = process.env.CONTACT_TO_EMAIL?.trim();

  if (!apiKey || !from || !to) {
    return NextResponse.json(
      { error: "Contact form is not configured." },
      { status: 503 },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!body || typeof body !== "object") {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;
  const nameStr =
    typeof name === "string" ? name.trim().slice(0, MAX_NAME) : "";
  const emailStr =
    typeof email === "string" ? email.trim().slice(0, 320) : "";
  const messageStr =
    typeof message === "string" ? message.trim().slice(0, MAX_MESSAGE) : "";

  if (!emailStr || !isValidEmail(emailStr)) {
    return NextResponse.json(
      { error: "A valid email address is required." },
      { status: 400 },
    );
  }
  if (!messageStr) {
    return NextResponse.json({ error: "Message is required." }, { status: 400 });
  }

  const subject = nameStr
    ? `The Digital Hearth: message from ${nameStr}`
    : "The Digital Hearth: new message";

  const origin = getPublicSiteOrigin();
  const text = buildOwnerNotificationPlainText({
    nameStr,
    emailStr,
    messageStr,
  });
  const html = buildOwnerNotificationHtml({
    nameStr,
    emailStr,
    messageStr,
    origin,
  });

  const resend = new Resend(apiKey);
  const { error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: emailStr,
    subject,
    text,
    html,
  });

  if (error) {
    console.error("[contact]", error);
    return NextResponse.json(
      { error: "Failed to send message. Please try again later." },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
