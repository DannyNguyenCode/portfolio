/**
 * Base URL for absolute links in emails (images, portfolio button).
 * Set `NEXT_PUBLIC_SITE_URL` (e.g. https://yoursite.vercel.app) for local/dev sends.
 */
export function getPublicSiteOrigin(): string {
  const explicit = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (explicit) return explicit.replace(/\/$/, "");
  const vercel = process.env.VERCEL_URL?.trim();
  if (vercel) return `https://${vercel.replace(/^https?:\/\//, "")}`;
  return "";
}
