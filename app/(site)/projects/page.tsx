import type { Metadata } from "next";
import Image from "next/image";

import { CrewSpotlight, minaHabitatSpotlightPreset } from "@/components/CrewSpotlight";
import { MaterialSymbol } from "@/components/MaterialSymbol";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated technical creations — full-stack apps, APIs, and the Digital Hearth portfolio.",
};

const cardShadow = "shadow-[0_20px_40px_rgba(55,45,36,0.06)]";

const POKEMON_CARD_IMG = "/MewTCGProjects.png";

const PORTFOLIO_SHOWCASE_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAGg3m31zK2TPR7NAozVc96HpgV97TWwUPmlyX9Yxt_AzyA1KjhA-k1gUr_Da2_7L-0EmWPOd1mG84oNEGQTigwkqcVNZgyQmkaBu2ih2lesunLHBJ1_ogHqFkx2ZOibCjwjiwhnRoTBrYJlBgFcO1SwLBl8oQ8kfzlo_auZrr3tPIIXlhKXPMx9wtRVYzHaZpuHfg3aZFz-f0RH8NfmWyRtQlVJfYcYRZ5XTicBcHq23axXByoNbSTSnHrepfcuGFvOQPuEqk1uIA";

const LINKS = {
  pokemon: {
    github: "https://github.com/DannyNguyenCode/pokemon-tradingcardgame",
    live: "https://pokemon-tradingcardgame.vercel.app",
  },
  niceGuyServices: {
    github: "https://github.com/DannyNguyenCode/niceguyservices",
    live: "https://niceguyservices.vercel.app/",
  },
  shoppingCartApi:
    "https://github.com/DannyNguyenCode/shopping-cart-api",
} as const;

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-24 md:px-8 md:pt-28 lg:pt-32">
      {/* Hero */}
      <header className="mb-16 md:mb-24">
        <div className="max-w-2xl">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            <MaterialSymbol name="deployed_code" className="text-base text-primary" filled />
            Portfolio
          </div>
          <h1 className="mb-8 font-headline text-5xl leading-none font-extrabold tracking-tighter text-on-surface md:text-7xl">
            Technical <br />
            <span className="text-primary">Creations</span>
          </h1>
          <p className="text-lg leading-relaxed text-on-surface-variant md:text-xl">
            A curated collection of digital experiences, built with intentionality
            and supported by the best crew (Nala, Mina, and Flair).
          </p>
        </div>
      </header>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Pokémon TCG — featured */}
        <div
          className={`group overflow-hidden rounded-xl bg-surface-container-lowest transition-colors duration-500 hover:bg-surface-bright md:col-span-8 ${cardShadow}`}
        >
          <div className="grid h-full md:grid-cols-2">
            <div className="flex flex-col justify-between p-8 md:p-12">
              <div>
                <div className="mb-4 flex gap-2">
                  <span className="rounded-full bg-surface-container px-3 py-1 text-[10px] font-bold tracking-wider text-on-surface-variant uppercase">
                    Full-Stack
                  </span>
                  <span className="rounded-full bg-tertiary-container px-3 py-1 text-[10px] font-bold tracking-wider text-on-tertiary-container uppercase">
                    Multiplayer
                  </span>
                </div>
                <h2 className="mb-4 font-headline text-3xl leading-tight font-bold text-on-surface">
                  Pokémon Trading Card Game
                </h2>
                <p className="mb-6 leading-relaxed text-on-surface-variant">
                  A turn-based battle simulator that brings the classic card
                  experience to the browser. Real-time gameplay powered by
                  Socket.IO.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  {["Next.js", "Socket.IO", "Python Flask"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-surface-container-high px-2 py-1 text-xs font-medium text-on-surface"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-4">
                <a
                  href={LINKS.pokemon.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  <MaterialSymbol name="code" className="text-lg" />
                  GitHub
                </a>
                <a
                  href={LINKS.pokemon.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold text-primary hover:underline"
                >
                  <MaterialSymbol name="rocket_launch" className="text-lg" />
                  Live Demo
                </a>
              </div>
            </div>
            <div className="relative min-h-[300px] overflow-hidden md:min-h-0">
              <Image
                src={POKEMON_CARD_IMG}
                alt="Mew Pokémon Trading Card Game promo card"
                fill
                className="object-cover grayscale-20 transition-transform duration-700 group-hover:scale-105"
                sizes="(min-width: 768px) 40vw, 100vw"
              />
              <div className="pointer-events-none absolute inset-0 bg-linear-to-r from-surface-container-lowest/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Nice Guy Services */}
        <div
          className={`group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-8 transition-colors duration-500 hover:bg-surface-bright md:col-span-4 ${cardShadow}`}
        >
          <div>
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-secondary-container">
              <MaterialSymbol
                name="business_center"
                className="text-on-secondary-container"
              />
            </div>
            <h2 className="mb-3 font-headline text-2xl font-bold text-on-surface">
              Nice Guy Services
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
              Professional business presence built for speed and conversion using
              modern utility-first styling and interactive components.
            </p>
            <div className="mb-6 flex flex-wrap gap-2">
              {["REACT", "TAILWIND"].map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-surface-container px-2 py-1 text-[10px] font-bold text-on-surface-variant"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between border-t border-surface-container pt-6">
            <a
              href={LINKS.niceGuyServices.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-bold text-primary hover:underline"
            >
              Demo
            </a>
            <a
              href={LINKS.niceGuyServices.live}
              target="_blank"
              rel="noopener noreferrer"
              className="text-stone-400 transition-colors hover:text-on-surface"
              aria-label="Open Nice Guy Services"
            >
              <MaterialSymbol name="arrow_outward" />
            </a>
          </div>
        </div>

        {/* Shopping Cart API */}
        <div
          className={`group flex flex-col rounded-xl bg-surface-container-high p-8 transition-colors duration-500 hover:bg-surface-container md:col-span-4 ${cardShadow}`}
        >
          <div className="mb-6">
            <MaterialSymbol name="api" className="text-4xl text-primary" />
          </div>
          <h2 className="mb-3 font-headline text-2xl font-bold text-on-surface">
            Shopping Cart API
          </h2>
          <p className="mb-8 text-sm leading-relaxed text-on-surface-variant">
            A robust RESTful backend infrastructure designed for high-concurrency
            e-commerce operations. Built with a focus on data integrity.
          </p>
          <div className="mt-auto">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-primary" />
              <span className="text-xs font-semibold text-on-surface-variant">
                FLASK • SQLALCHEMY
              </span>
            </div>
            <a
              href={LINKS.shoppingCartApi}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-on-surface px-4 py-2 text-xs font-bold text-surface transition-colors hover:bg-primary"
            >
              View Repository
              <MaterialSymbol name="arrow_forward" className="text-sm" />
            </a>
          </div>
        </div>

        {/* The Digital Hearth */}
        <div
          className={`relative w-full overflow-hidden rounded-xl p-6 shadow-[0_20px_40px_rgba(55,45,36,0.06)] sm:p-8 md:col-span-8 md:p-12`}
        >
          <div className="absolute inset-0 bg-surface-container-low opacity-50" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,#fe9f55_0%,transparent_50%)] opacity-20" />
          <div className="relative flex w-full min-w-0 flex-col gap-8 md:flex-row md:items-center">
            <div className="w-full min-w-0 md:w-1/2">
              <h2 className="mb-6 font-headline text-3xl font-bold tracking-tighter text-on-surface md:text-4xl">
                The Digital Hearth
              </h2>
              <p className="mb-8 text-base leading-relaxed text-on-surface-variant">
                This portfolio is a living testament to my philosophy. Built with
                Next.js and Vercel, it prioritizes warmth, accessibility, and
                high-performance storytelling.
              </p>
              <div className="flex flex-wrap gap-4">
                <span className="flex items-center gap-2 text-xs font-bold text-primary">
                  <MaterialSymbol name="speed" className="text-lg" />
                  Performance 100
                </span>
                <span className="flex items-center gap-2 text-xs font-bold text-primary">
                  <MaterialSymbol name="accessibility_new" className="text-lg" />
                  Accessible
                </span>
              </div>
            </div>
            <div className="w-full min-w-0 md:w-1/2">
              <div className="mx-auto w-full max-w-none rounded-xl border border-white/20 bg-white/40 p-2 shadow-xl backdrop-blur-md sm:p-3 md:mx-0">
                <div className="aspect-video min-h-50 w-full overflow-hidden rounded-lg sm:min-h-56 md:min-h-0">
                  <Image
                    src={PORTFOLIO_SHOWCASE_IMG}
                    alt="Minimal workspace with laptop and plant in soft natural light"
                    width={640}
                    height={360}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 1024px) 480px, (min-width: 768px) 45vw, min(100vw - 3rem, 720px)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Crew spotlight — Mina */}
        <CrewSpotlight
          {...minaHabitatSpotlightPreset}
          className="mt-12 md:col-span-12"
        />
      </div>
    </main>
  );
}
