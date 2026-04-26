"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { MaterialSymbol } from "@/components/MaterialSymbol";

const nav = [
  { href: "/", label: "The Lounge" },
  { href: "/skills", label: "The Craftmanship" },
  { href: "/employment", label: "Professional Journey" },
  { href: "/projects", label: "Technical Creations" },
  { href: "/education", label: "Academic Foundation" },
  { href: "/contact", label: "Connect" },
] as const;

function linkActive(pathname: string, href: string) {
  return href === "/" ? pathname === "/" : pathname.startsWith(href);
}

function desktopLinkClass(active: boolean) {
  return `font-headline text-sm tracking-tight whitespace-nowrap transition-colors duration-300 lg:text-[0.9375rem] ${active
    ? "border-b-2 border-primary pb-1 font-bold text-primary"
    : "text-on-surface-variant hover:text-primary"
    }`;
}

function mobileLinkClass(active: boolean) {
  return `font-headline block rounded-lg px-3 py-3.5 text-base transition-colors ${active
    ? "bg-primary-container/25 font-bold text-primary"
    : "text-on-surface-variant hover:bg-surface-container-high/80 hover:text-on-surface"
    }`;
}

export function SiteHeader() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    queueMicrotask(() => {
      setMenuOpen(false);
    });
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    window.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [menuOpen]);

  return (
    <nav className="glass-nav sticky top-0 z-50 w-full">
      <button
        type="button"
        className={`fixed inset-0 z-40 cursor-default bg-on-surface/20 backdrop-blur-[2px] transition-opacity duration-300 ease-out md:hidden ${menuOpen ? "opacity-100" : "pointer-events-none opacity-0"}`}
        aria-hidden={!menuOpen}
        aria-label="Close navigation menu"
        tabIndex={-1}
        onClick={() => setMenuOpen(false)}
      />

      <div className="relative z-50 flex w-full items-center justify-between px-4 py-4 sm:px-6 sm:py-5 md:px-8 lg:px-12 lg:pr-10">
        <button
          type="button"
          className="relative z-20 inline-flex size-11 shrink-0 items-center justify-center rounded-lg text-on-surface transition-colors hover:bg-surface-container-high/80 md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-primary-nav"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <MaterialSymbol
            name={menuOpen ? "close" : "menu"}
            className="text-2xl"
          />
          <span className="sr-only">
            {menuOpen ? "Close navigation menu" : "Open navigation menu"}
          </span>
        </button>

        <Link
          href="/"
          className="absolute left-1/2 top-1/2 z-15 max-w-[min(100%,calc(100vw-6.5rem))] -translate-x-1/2 -translate-y-1/2 text-center font-headline text-lg font-bold tracking-tight text-primary sm:text-xl md:static md:left-auto md:top-auto md:z-20 md:max-w-none md:translate-x-0 md:translate-y-0 md:text-left md:text-2xl"
          onClick={() => setMenuOpen(false)}
        >
          <span className="wrap-break-word leading-tight">
            The Web Design Lounge
          </span>
        </Link>

        <div
          className="size-11 shrink-0 md:hidden"
          aria-hidden
        />

        <div className="pointer-events-none absolute inset-0 z-0 hidden md:flex md:items-center md:justify-center">
          <div className="pointer-events-auto flex items-center gap-4 lg:gap-5 xl:gap-6">
            {nav.map(({ href, label }) => {
              const active = linkActive(pathname, href);
              return (
                <Link
                  key={href}
                  href={href}
                  className={desktopLinkClass(active)}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </div>
      </div>

      <div
        id="mobile-primary-nav"
        className={`relative z-50 grid border-t border-outline-variant/15 bg-surface/95 shadow-md backdrop-blur-md transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none md:hidden ${menuOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        aria-hidden={!menuOpen}
      >
        <div className="min-h-0 overflow-hidden" inert={!menuOpen}>
          <ul className="flex max-h-[min(70vh,28rem)] flex-col overflow-y-auto px-3 py-2 sm:px-5 sm:py-3">
            {nav.map(({ href, label }) => {
              const active = linkActive(pathname, href);
              return (
                <li key={href}>
                  <Link
                    href={href}
                    className={mobileLinkClass(active)}
                    onClick={() => setMenuOpen(false)}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}
