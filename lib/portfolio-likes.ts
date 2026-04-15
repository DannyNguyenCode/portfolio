import { readFile, writeFile } from "fs/promises";
import path from "path";

const KEY = "portfolio_likes";
const LOCAL_FILE = path.join(process.cwd(), "data", "portfolio-hearts.json");

function envSeed(): number {
  const n = parseInt(process.env.NEXT_PUBLIC_PORTFOLIO_HEARTS ?? "0", 10);
  return Number.isFinite(n) && n >= 0 ? n : 0;
}

async function upstashGet(): Promise<number | null> {
  const base = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, "");
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!base || !token) return null;

  const res = await fetch(`${base}/get/${KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  const body = (await res.json()) as { result: string | null };
  if (body.result == null) return 0;
  const n = parseInt(String(body.result), 10);
  return Number.isFinite(n) ? n : 0;
}

async function upstashIncr(): Promise<number | null> {
  const base = process.env.UPSTASH_REDIS_REST_URL?.replace(/\/$/, "");
  const token = process.env.UPSTASH_REDIS_REST_TOKEN;
  if (!base || !token) return null;

  const res = await fetch(`${base}/incr/${KEY}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) return null;
  const body = (await res.json()) as { result: number };
  return typeof body.result === "number" ? body.result : null;
}

async function readLocalFile(): Promise<number | null> {
  try {
    const raw = await readFile(LOCAL_FILE, "utf-8");
    const n = JSON.parse(raw) as { count?: unknown };
    const c = typeof n.count === "number" && n.count >= 0 ? n.count : 0;
    return c;
  } catch {
    return null;
  }
}

async function writeLocalFile(count: number): Promise<boolean> {
  try {
    await writeFile(
      LOCAL_FILE,
      `${JSON.stringify({ count }, null, 2)}\n`,
      "utf-8",
    );
    return true;
  } catch {
    return false;
  }
}

export async function getPortfolioLikesCount(): Promise<number> {
  const fromRedis = await upstashGet();
  if (fromRedis !== null) return fromRedis;

  const fromFile = await readLocalFile();
  if (fromFile !== null) return fromFile;

  return envSeed();
}

export async function incrementPortfolioLikesCount(): Promise<number> {
  const fromIncr = await upstashIncr();
  if (fromIncr !== null) return fromIncr;

  const current = (await readLocalFile()) ?? envSeed();
  const next = current + 1;
  const ok = await writeLocalFile(next);
  if (ok) return next;

  return current;
}
