"use client";

import Image from "next/image";
import Link from "next/link";

import { MaterialSymbol } from "@/components/MaterialSymbol";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { PORTFOLIO_LIKES_UPDATED_EVENT } from "@/lib/portfolio-likes-events";

const nav = [
  { href: "/", label: "Home" },
  { href: "/skills", label: "Skills" },
  { href: "/employment", label: "Employment" },
  { href: "/education", label: "Education" },
  { href: "/projects", label: "Projects" },
] as const;

const AVATAR_SRC = "/AvatarPicture.png";

export function SiteHeader() {
  const pathname = usePathname();
  const [likeCount, setLikeCount] = useState<number | null>(null);

  useEffect(() => {
    let cancelled = false;
    fetch("/api/portfolio-likes")
      .then((res) => res.json())
      .then((data: { count?: number }) => {
        if (!cancelled && typeof data.count === "number") {
          setLikeCount(data.count);
        }
      })
      .catch(() => {
        if (!cancelled) setLikeCount(0);
      });

    const onLikesUpdated = (e: Event) => {
      const detail = (e as CustomEvent<{ count: number }>).detail;
      if (typeof detail?.count === "number") {
        setLikeCount(detail.count);
      }
    };
    window.addEventListener(PORTFOLIO_LIKES_UPDATED_EVENT, onLikesUpdated);
    return () => {
      cancelled = true;
      window.removeEventListener(PORTFOLIO_LIKES_UPDATED_EVENT, onLikesUpdated);
    };
  }, []);

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <Link
          href="/"
          className="font-headline text-2xl font-bold tracking-tight text-primary"
        >
          The Digital Hearth
        </Link>
        <div className="hidden items-center gap-8 md:flex">
          {nav.map(({ href, label }) => {
            const active =
              href === "/"
                ? pathname === "/"
                : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`font-headline transition-colors duration-300 ${active
                    ? "border-b-2 border-primary pb-1 font-bold text-primary"
                    : "text-on-surface-variant hover:text-primary"
                  }`}
              >
                {label}
              </Link>
            );
          })}
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-1.5">
            <MaterialSymbol name="pets" className="text-primary" />
            <span
              className="inline-flex min-w-10 justify-end font-headline text-sm font-bold tabular-nums text-primary"
              aria-live="polite"
              aria-label={
                likeCount === null
                  ? "Portfolio appreciations loading"
                  : `${likeCount} portfolio appreciations`
              }
            >
              {likeCount === null ? "…" : likeCount}
            </span>
          </div>
          <div className="relative h-10 w-10 overflow-hidden rounded-full border-2 border-surface-container-highest">
            <Image
              src={AVATAR_SRC}
              alt="Profile portrait"
              fill
              className="object-cover"
              sizes="40px"
            />
          </div>
        </div>
      </div>
    </nav>
  );
}
