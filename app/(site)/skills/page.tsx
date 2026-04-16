import type { Metadata } from "next";
import Image from "next/image";

import { CrewSpotlight, nalaSpotlightPreset } from "@/components/CrewSpotlight";
import { MaterialSymbol } from "@/components/MaterialSymbol";

export const metadata: Metadata = {
  title: "The Craftmanship",
  description:
    "Core stack, backend ecosystem, and the support crew behind The Digital Hearth.",
};

const CREW = [
  {
    name: "Nala",
    role: "Senior QA Lead",
    blurb:
      "The oldest cat. Ensures all keyboards are pre-warmed for maximum coding efficiency.",
    src: "/NalaCrew.png",
    alt: "Nala, senior QA lead",
  },
  {
    name: "Mina",
    role: "Happiness Director",
    blurb:
      "The dog. Mandates hourly breaks for fresh air and Vitamin D (and treats).",
    src: "/MinaCrew.png",
    alt: "Mina, happiness director",
  },
  {
    name: "Flair",
    role: "Senior Research Assistant",
    blurb:
      "The youngest cat. Keeps the cursor chasing game strong during late-night refactors.",
    src: "/FlairCrew.png",
    alt: "Flair, Senior Research Assistant",
  },
] as const;

export default function SkillsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pb-16 pt-20 sm:px-6 sm:pb-20 sm:pt-24 md:px-8 md:pb-24 md:pt-28 lg:pt-32">
      <header className="mb-12 flex flex-col items-stretch gap-8 sm:mb-16 md:mb-20 lg:flex-row lg:items-center lg:justify-between lg:gap-10 xl:gap-12">
        <div className="min-w-0 flex-1 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
            <MaterialSymbol name="construction" className="text-base text-primary" filled />
            Skills
          </div>
          <h1 className="mb-4 font-headline text-4xl font-extrabold leading-[1.08] tracking-tighter text-on-surface sm:mb-5 sm:text-5xl md:mb-6 md:text-6xl lg:text-7xl">
            The <br />
            <span className="text-primary">Craftmanship</span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-on-surface-variant sm:text-lg md:text-xl lg:mx-0">
            Every line of code is written from the warmth of a shared workspace.
            My technical journey is fueled by continuous learning and the quiet,
            unwavering companionship of my family.
          </p>
        </div>
        <div className="relative mx-auto aspect-square w-full max-w-[min(100%,280px)] shrink-0 overflow-hidden rounded-xl bg-surface-container rotate-2 transition-transform duration-500 hover:rotate-0 sm:max-w-xs md:max-w-sm lg:mx-0 lg:w-[min(100%,22rem)] lg:max-w-none xl:w-80">
          <Image
            src="/HeroFlair.png"
            alt="Flair, junior debugger, in a cozy home setting"
            fill
            className="object-cover"
            priority={true}
            sizes="(max-width: 1023px) min(320px, 100vw), 320px"
          />
        </div>
      </header>

      <div className="flex flex-col gap-12 sm:gap-14 lg:flex-row lg:gap-16">
        <section className="flex-2">
          <h2 className="mb-8 flex flex-wrap items-center gap-2 text-2xl font-bold sm:mb-10 sm:gap-3 sm:text-3xl">
            <MaterialSymbol name="terminal" className="text-secondary" />
            Core Stack
          </h2>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="group rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-headline text-lg font-bold">
                  JavaScript
                </span>
                <span className="font-bold text-secondary">85%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest">
                <div
                  className="h-full rounded-full bg-linear-to-r from-secondary to-secondary-fixed-dim transition-all duration-1000"
                  style={{ width: "85%" }}
                />
              </div>
              <p className="mt-4 text-sm text-on-surface-variant">
                The engine of my web solutions.
              </p>
            </div>

            <div className="rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-headline text-lg font-bold">React</span>
                <span className="font-bold text-secondary">85%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest">
                <div
                  className="h-full rounded-full bg-linear-to-r from-secondary to-secondary-fixed-dim"
                  style={{ width: "85%" }}
                />
              </div>
              <p className="mt-4 text-sm text-on-surface-variant">
                Building dynamic, component-driven UIs.
              </p>
            </div>

            <div className="rounded-xl bg-surface-container-lowest p-8 shadow-sm transition-shadow hover:shadow-md">
              <div className="mb-4 flex items-center justify-between">
                <span className="font-headline text-lg font-bold">
                  Tailwind CSS
                </span>
                <span className="font-bold text-secondary">80%</span>
              </div>
              <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest">
                <div
                  className="h-full rounded-full bg-linear-to-r from-secondary to-secondary-fixed-dim"
                  style={{ width: "80%" }}
                />
              </div>
              <p className="mt-4 text-sm text-on-surface-variant">
                Modern utility-first CSS framework for rapid UI development.
              </p>
            </div>

            <div className="flex flex-col items-center gap-8 rounded-xl bg-surface-container-high p-8 md:col-span-2 md:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 font-headline font-bold">
                  Backend Ecosystem
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between text-sm">
                    <span>NodeJS / Mongoose</span>
                    <span>75%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: "75%" }}
                    />
                  </div>
                  <div className="flex justify-between text-sm">
                    <span>SQLAlchemy / Flask</span>
                    <span>70%</span>
                  </div>
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
                    <div
                      className="h-full rounded-full bg-primary opacity-70"
                      style={{ width: "70%" }}
                    />
                  </div>
                </div>
              </div>
              <div className="hidden h-32 w-px bg-outline-variant opacity-20 md:block" />
              <div className="flex-1 italic leading-relaxed text-on-surface-variant">
                &ldquo;Focusing on scalable architectures and robust data
                modeling with a touch of architectural elegance.&rdquo;
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 md:col-span-2">
              {(
                [
                  ["Python", 70],
                  ["Angular 20+", 70],
                  ["NextJS / AuthJS", 70],
                  ["Firebase", 70],
                ] as const
              ).map(([label, pct]) => (
                <div
                  key={label}
                  className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6"
                >
                  <span className="mb-2 block font-headline font-semibold">
                    {label}
                  </span>
                  <div className="h-1.5 w-full rounded-full bg-surface-container-highest">
                    <div
                      className="h-full rounded-full bg-secondary-dim"
                      style={{ width: `${pct}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between rounded-xl bg-primary p-8 text-on-primary md:col-span-2">
              <div>
                <h3 className="mb-2 font-headline text-xl font-bold">
                  Workflow &amp; Tools
                </h3>
                <div className="flex flex-wrap gap-3">
                  <span className="rounded-full bg-on-primary/10 px-4 py-1.5 text-sm font-medium">
                    Git (70%)
                  </span>
                  <span className="rounded-full bg-on-primary/10 px-4 py-1.5 text-sm font-medium">
                    GitHub (65%)
                  </span>
                  <span className="rounded-full bg-on-primary/10 px-4 py-1.5 text-sm font-medium">
                    Flutter (65%)
                  </span>
                </div>
              </div>
              <MaterialSymbol
                name="architecture"
                className="text-4xl opacity-50"
              />
            </div>
          </div>
        </section>

        <aside className="flex-1 lg:max-w-sm">
          <div className="lg:sticky lg:top-28">
            <div className="rounded-xl border-l-4 border-primary bg-surface-container p-8">
              <h2 className="mb-6 flex items-center gap-2 font-headline text-2xl font-bold">
                <MaterialSymbol name="favorite" />
                The Support Crew
              </h2>
              <p className="mb-8 text-sm leading-relaxed text-on-surface-variant">
                Behind every successful deployment is a team of specialists who
                keep the morale high and the chairs warm.
              </p>
              <div className="space-y-6">
                {CREW.map((member) => (
                  <div
                    key={member.name}
                    className="group flex items-center gap-4"
                  >
                    <div className="h-16 w-16 shrink-0 overflow-hidden rounded-full bg-white shadow-sm transition-transform group-hover:scale-110">
                      <Image
                        src={member.src}
                        alt={member.alt}
                        width={64}
                        height={64}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold leading-none text-on-surface">
                        {member.name}
                      </h4>
                      <span className="font-label text-xs uppercase tracking-widest text-primary">
                        {member.role}
                      </span>
                      <p className="mt-1 text-xs text-on-surface-variant">
                        {member.blurb}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-10 border-t border-outline-variant/20 pt-8 text-sm italic text-on-surface-variant">
                &ldquo;They don&apos;t know much about React, but they know
                exactly when I need a hug.&rdquo;
              </div>
            </div>
          </div>
        </aside>
      </div>

      <CrewSpotlight {...nalaSpotlightPreset} className="mt-16 w-full sm:mt-20" />
    </main>
  );
}
