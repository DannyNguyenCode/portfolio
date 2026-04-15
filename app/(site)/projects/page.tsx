import type { Metadata } from "next";
import type { CSSProperties, ReactNode } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Curated technical creations — full-stack apps, APIs, and the Digital Hearth portfolio.",
};

const cardShadow = "shadow-[0_20px_40px_rgba(55,45,36,0.06)]";

const filled: CSSProperties = {
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
};

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuD4Gk97MwtFxy-ZGRsGVU-C6MFPZGYy-QFB2ZulsfzUJvSTyz2U6-mcMgpx9vRdeqPqaM1XUB3_eloUIrbxyDIAw_8miiMGZrjteWqrC9lRL58-BLtIyvEh7rkvqwmNOhwfev3YWvycwglwdIrZRESL7s0nuu0cNkAOVTcL-NF3kS_6F3PZtb1Kq0lUtQr-DQ2-Vjl6p7JRDE5O1RAPS0Dl6ZoGPClg1stGqcCewBAOZoIe1Uo7qBPfvpdhNJINxUVAc3bafsq7V7Q";

const POKEMON_CARD_IMG = "/MewTCGProjects.png";

const NICE_GUY_SERVICES_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCFRvyPSer-I34M68NP-HrXRh6atADwGC7ELpin_Kx3p8j3bls48zZumIx1laRSXHPCzDRDYI2Qw80WvY9-5FejgMC930dbsd2AqW9czWzTtGZuER4neOgbwDBaUY0PSVxmNqS9q_WLt146qD8aU1NfUwiQs4_s5U7hyYD-jnKHLB6SuNfpvaaudtFj6PZtqrAxgxNoYf3N1JVcxhzS1pNnhF7r97bGPsBdpkLFWG21k3FIWX81-WQrfW7hRmR6tPruuYB2d-Y5Wpg";

const LINKS = {
  pokemon: {
    github: "https://github.com/DannyNguyenCode/pokemon-tradingcardgame",
    live: "https://pokemon-tradingcardgame.vercel.app",
  },
  niceGuyServices: {
    github: "https://github.com/DannyNguyenCode/niceguyservices",
    live: "https://niceguyservices.vercel.app/",
  },
} as const;

const CREW = [
  { name: "Nala", src: "/NalaCrew.png", alt: "Nala" },
  { name: "Mina", src: "/MinaCrew.png", alt: "Mina" },
  { name: "Flair", src: "/FlairCrew.png", alt: "Flair" },
] as const;

function ExternalLink({
  href,
  className,
  children,
}: {
  href: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </a>
  );
}

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 pb-20 pt-24 md:pt-28 lg:pt-32">
      {/* Hero */}
      <div className="mb-24 flex flex-col items-end gap-12 md:flex-row">
        <div className="flex-1">
          <p className="mb-4 font-label text-xs uppercase tracking-[0.2em] text-on-surface-variant">
            Curated Portfolio
          </p>
          <h1 className="font-headline text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-on-surface">
            Technical <br />{" "}
            <span className="text-primary italic">Creations</span>
          </h1>
          <p className="mt-8 max-w-lg text-xl leading-relaxed text-on-surface-variant">
            A collection of digital artifacts crafted with precision, inspired
            by the warmth of home and the companionship of my support crew.
          </p>
        </div>
        <div className="group relative shrink-0">
          <div className="absolute -inset-4 rounded-full bg-primary-container/20 blur-2xl transition-all duration-500 group-hover:bg-primary-container/30" />
          <div className="relative h-48 w-48 overflow-hidden rounded-xl shadow-2xl">
            <Image
              src={HERO_IMG}
              alt="Warm wooden desk with coffee and a laptop in soft amber light"
              fill
              className="object-cover"
              sizes="12rem"
              priority={true}
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Pokémon TCG — featured */}
        <div
          className={`rounded-xl bg-surface-container-lowest p-10 transition-colors duration-300 hover:bg-surface-bright md:col-span-8 ${cardShadow}`}
        >
          <div className="flex flex-col gap-10 md:flex-row">
            <div className="flex-1">
              <div className="mb-6 flex items-center gap-3">
                <span
                  className="material-symbols-outlined text-secondary"
                  style={filled}
                >
                  playing_cards
                </span>
                <span className="font-label text-xs font-bold uppercase tracking-widest text-secondary">
                  Multiplayer Experience
                </span>
              </div>
              <h2 className="mb-4 font-headline text-3xl font-bold">
                Pokémon Trading Card Game
              </h2>
              <p className="mb-8 leading-relaxed text-on-surface-variant">
                A high-stakes full-stack multiplayer application delivering
                real-time 1v1 tactical gameplay. Built for seamless interaction
                and competitive integrity.
              </p>
              <div className="mb-8 flex flex-wrap gap-2">
                {["Next.js", "Socket.IO", "Python Flask"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-secondary-container px-4 py-1.5 text-xs font-semibold text-on-secondary-container"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex gap-4">
                <ExternalLink
                  href={LINKS.pokemon.github}
                  className="rounded-md bg-primary px-6 py-3 text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
                >
                  View on GitHub
                </ExternalLink>
                <ExternalLink
                  href={LINKS.pokemon.live}
                  className="rounded-md bg-secondary-container px-6 py-3 text-sm font-semibold text-on-secondary-container transition-opacity hover:opacity-90"
                >
                  Live Demo
                </ExternalLink>
              </div>
            </div>
            <div className="h-64 w-full shrink-0 overflow-hidden rounded-lg grayscale transition-all duration-700 hover:grayscale-0 md:w-64">
              <Image
                src={POKEMON_CARD_IMG}
                alt="Mew Pokémon Trading Card Game promo card"
                width={256}
                height={256}
                className="h-full w-full object-cover"
                sizes="(min-width: 768px) 16rem, 100vw"
              />
            </div>
          </div>
        </div>

        {/* Nice Guy Services — tall */}
        <div
          className={`flex flex-col justify-between rounded-xl bg-surface-container-low p-8 transition-colors duration-300 hover:bg-surface-bright md:col-span-4 ${cardShadow}`}
        >
          <div>
            <div className="mb-8 h-48 w-full overflow-hidden rounded-lg">
              <Image
                src={NICE_GUY_SERVICES_IMG}
                alt="Nice Guy Services website screenshot"
                width={400}
                height={192}
                className="h-full w-full object-cover object-top"
                sizes="(min-width: 768px) 33vw, 100vw"
              />
            </div>
            <h2 className="mb-3 font-headline text-2xl font-bold">
              Nice Guy Services
            </h2>
            <p className="mb-6 text-sm leading-relaxed text-on-surface-variant">
              A Toronto-based web development studio focused on fast,
              maintainable websites for small businesses — technical precision
              without the jargon.
            </p>
            <div className="mb-8 flex flex-wrap gap-2">
              {["Next.js", "React", "Tailwind CSS", "DaisyUI"].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-3 py-1 text-[10px] font-bold uppercase tracking-wider text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <ExternalLink
              href={LINKS.niceGuyServices.github}
              className="w-full rounded-md bg-primary py-3 text-center text-sm font-semibold text-on-primary"
            >
              View on GitHub
            </ExternalLink>
            <ExternalLink
              href={LINKS.niceGuyServices.live}
              className="w-full py-3 text-center text-sm font-bold text-primary underline-offset-4 hover:underline"
            >
              Live Demo
            </ExternalLink>
          </div>
        </div>

        {/* Portfolio — wide */}
        <div className="flex flex-col items-center justify-between rounded-xl border-l-12 border-primary-container bg-surface-container-lowest p-8 md:col-span-12 md:flex-row">
          <div>
            <h2 className="mb-2 font-headline text-2xl font-bold">
              Personal Portfolio
            </h2>
            <p className="text-sm text-on-surface-variant">
              Crafting the &quot;Digital Hearth&quot; aesthetic with Next.js and
              responsive design principles.
            </p>
          </div>
          <div className="mt-6 flex gap-6 md:mt-0">
            <div className="text-center">
              <div className="font-headline text-2xl font-extrabold text-primary">
                100
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Lighthouse Score
              </div>
            </div>
            <div className="h-10 w-px bg-outline-variant/30" />
            <div className="text-center">
              <div className="font-headline text-2xl font-extrabold text-primary">
                60fps
              </div>
              <div className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
                Transitions
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Support crew */}
      <section className="relative mt-32 overflow-hidden rounded-xl bg-tertiary-fixed p-12">
        <div className="relative z-10 max-w-2xl">
          <h3 className="mb-6 font-headline text-2xl font-bold italic text-primary">
            The Support Crew
          </h3>
          <p className="italic leading-relaxed text-on-surface-variant">
            &ldquo;Every line of code and architectural decision in these
            projects was made under the watchful eyes and gentle paws of my
            moral support team.&rdquo;
          </p>
          <div className="mt-10 flex flex-wrap gap-8">
            {CREW.map((pet) => (
              <div key={pet.name} className="flex items-center gap-3">
                <div className="h-12 w-12 overflow-hidden rounded-full bg-primary-container">
                  <Image
                    src={pet.src}
                    alt={pet.alt}
                    width={48}
                    height={48}
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="font-headline text-sm font-bold">
                  {pet.name}
                </span>
              </div>
            ))}
          </div>
        </div>
        <span className="material-symbols-outlined pointer-events-none absolute -bottom-8 -right-8 select-none text-[200px] text-primary/5">
          pets
        </span>
      </section>
    </main>
  );
}
