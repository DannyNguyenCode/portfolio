import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { MaterialSymbol } from "@/components/MaterialSymbol";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The Web Design Lounge — building software with a developer's mind and a caregiver's heart.",
};

const cardShadow = "shadow-[0_20px_40px_rgba(55,45,36,0.06)]";

const INSPIRED_GALLERY = [
  {
    src: "/HomepageNalainspiration.png",
    alt: "Yellow Labrador in tall grass at golden hour",
    className:
      "relative mt-8 aspect-[4/5] min-h-[220px] w-full overflow-hidden rounded-xl sm:mt-12 sm:min-h-[240px] md:mt-12 md:aspect-auto md:h-64 md:min-h-0",
  },
  {
    src: "/HomepageMinainspiration.png",
    alt: "Silver tabby kitten sleeping curled in a chunky knit blanket",
    className:
      "relative aspect-[4/5] min-h-[220px] w-full overflow-hidden rounded-xl sm:min-h-[240px] md:aspect-auto md:h-64 md:min-h-0",
  },
  {
    src: "/FlairEmployment.png",
    alt: "Flair at the Web Design Lounge—playful energy beside the work setup",
    className:
      "relative col-span-2 aspect-[16/9] min-h-[200px] w-full overflow-hidden rounded-xl sm:min-h-[220px] md:col-span-1 md:mt-12 md:aspect-auto md:h-64 md:min-h-0",
  },
] as const;

const PET_CHIPS = [
  { name: "Nala", src: "/NalaCrew.png" },
  { name: "Mina", src: "/MinaCrew.png" },
  { name: "Flair", src: "/FlairCrew.png" },
] as const;

const GITHUB_HREF = "https://github.com/DannyNguyenCode";

const SKILL_ROWS = [
  { label: "JavaScript", width: "90%" },
  { label: "React", width: "85%" },
  { label: "Tailwind CSS", width: "95%" },
] as const;

export default function HomePage() {
  return (
    <>
      <main className="pt-12 md:pt-28 lg:pt-32">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-8 pb-20 md:pb-30">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-2 md:mb-10">
            <MaterialSymbol
              name="home_health"
              className="text-primary"
            />
            <span className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
              Welcome to the Web Design Lounge
            </span>
          </div>

          <div className="flow-root">
            <div className="relative z-10 mx-auto mb-10 aspect-square w-full max-w-[min(100%,28rem)] shrink-0 md:float-right md:mb-6 md:ml-10 md:mt-1 md:w-[min(42%,26rem)] md:max-w-none lg:ml-12 lg:w-[min(40%,28rem)]">
              <div
                className={`relative z-10 aspect-square w-full overflow-hidden rounded-xl ${cardShadow}`}
              >
                <Image
                  src="/FlairHomepageHero.png"
                  alt="Flair at the Web Design Lounge — warm home workspace"
                  fill
                  preload
                  fetchPriority="high"
                  loading="eager"
                  className="object-cover"
                  sizes="(min-width: 1024px) 448px, (min-width: 768px) min(416px, 42vw), calc(100vw - 2rem)"
                />
              </div>
              <div className="absolute inset-x-0 -bottom-8 z-0 h-64 rounded-xl bg-primary-container/20 md:inset-x-auto md:-bottom-10 md:-right-10 md:left-auto md:w-64" />
            </div>

            <div className="space-y-8">
              <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight text-on-surface md:text-7xl">
                Building software with a{" "}
                <span className="text-primary italic">developer&apos;s mind</span>{" "}
                and a{" "}
                <span className="text-secondary">caregiver&apos;s heart</span>.
              </h1>
              <p className="text-base leading-relaxed text-on-surface-variant md:max-w-none">
                A cozy space where technology meets empathy. Backed by my
                incredible support crew: <strong>Nala</strong>,{" "}
                <strong>Mina</strong>, and <strong>Flair</strong>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href={GITHUB_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border-2 border-primary px-6 py-3 font-headline text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low"
                >
                  GitHub
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-4 md:gap-5">
                {PET_CHIPS.map((pet) => (
                  <div
                    key={pet.name}
                    className="flex items-center gap-2 rounded-full bg-surface-container px-3 py-1.5 md:gap-3 md:px-5 md:py-2.5 lg:px-6 lg:py-3"
                  >
                    <div className="relative h-6 w-6 overflow-hidden rounded-full bg-surface-container-high md:h-10 md:w-10 lg:h-12 lg:w-12">
                      <Image
                        src={pet.src}
                        alt={pet.name}
                        fill
                        className="object-cover"
                        sizes="(min-width: 1024px) 48px, (min-width: 768px) 40px, 24px"
                      />
                    </div>
                    <span className="text-xs font-semibold md:text-sm lg:text-base">
                      {pet.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Bento */}
        <section className="mx-auto max-w-7xl px-8 pb-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div
              id="experience"
              className="group flex flex-col justify-between rounded-xl bg-surface-container p-12 md:col-span-8"
            >
              <div>
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-secondary">
                  The Professional Journey
                </span>
                <h2 className="mb-6 font-headline text-3xl font-bold">
                  From Caregiver to Creator
                </h2>
                <p className="mb-8 text-base leading-relaxed text-on-surface-variant">
                  Blending a deep background in customer care with freelance
                  development. Empathy drives my code.
                </p>
              </div>
              <Link
                href="/employment"
                className="inline-flex items-center font-bold text-primary transition-transform group-hover:translate-x-2"
              >
                Full Experience{" "}
                <MaterialSymbol name="arrow_forward" className="ml-2" />
              </Link>
            </div>

            <div
              id="skills"
              className="flex flex-col justify-between rounded-xl bg-primary p-12 text-on-primary md:col-span-4"
            >
              <div>
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-on-primary">
                  Skills in Action
                </span>
                <h2 className="mb-4 font-headline text-3xl font-bold">
                  Crafting with Modern Tools
                </h2>
                <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  {SKILL_ROWS.map((row) => (
                    <div key={row.label} className="space-y-2">
                      <p className="font-semibold text-on-primary">{row.label}</p>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-on-primary/20">
                        <div
                          className="h-full rounded-full bg-on-primary"
                          style={{ width: row.width, maxWidth: "100%" }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/skills"
                className="w-fit mt-8 inline-flex rounded-md border-2 border-transparent px-2 py-1 font-bold transition-colors hover:border-on-primary"
              >
                Explore Full Skillset{" "}
                <MaterialSymbol name="arrow_forward" className="ml-2" />
              </Link>
            </div>

            <div
              id="education"
              className={`flex flex-col gap-8 rounded-xl bg-surface-container-lowest p-12 transition-colors duration-300 hover:bg-surface-bright md:col-span-5 ${cardShadow}`}
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface">
                <MaterialSymbol
                  name="school"
                  className="text-3xl text-primary"
                />
              </div>
              <div>
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Academic Foundation
                </span>
                <h2 className="mb-4 font-headline text-3xl font-bold">
                  Seneca Honors
                </h2>
                <p className="mb-6 text-base leading-relaxed text-on-surface-variant">
                  Maintained a 3.8 GPA while pursuing excellence in Computer
                  Science at Seneca College.
                </p>
                <div className="flex items-center gap-2 justify-around align-middle align-center">
                  <div className="inline-block rounded-lg bg-surface-container-high px-4 py-3">
                    <span className="text-2xl font-extrabold text-on-surface">
                      3.8 GPA
                    </span>
                  </div>
                  <Link
                    href="/education"
                    className="inline-block rounded-md bg-secondary px-8 py-3 font-bold text-on-secondary transition-opacity hover:opacity-90"
                  >
                    View Honors
                  </Link>
                </div>
              </div>
            </div>

            <div
              id="projects"
              className="group flex min-h-0 flex-col overflow-hidden rounded-xl bg-surface-container-high p-4 md:col-span-7 md:flex-row md:items-stretch"
            >
              <div className="flex flex-1 flex-col justify-center p-8">
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  Technical Creations
                </span>
                <h2 className="mb-4 font-headline text-3xl font-bold">
                  Pokémon TCG Master
                </h2>
                <p className="mb-6 text-base leading-relaxed text-on-surface-variant">
                  A high-performance trading card game engine built with React
                  and custom animations.
                </p>
                <Link
                  href="/projects"
                  className="inline-flex items-center font-bold text-primary"
                >
                  View Case Study{" "}
                  <MaterialSymbol name="auto_awesome" className="ml-2" />
                </Link>
              </div>
              <div className="relative h-56 w-full shrink-0 overflow-hidden rounded-lg sm:h-64 md:h-72 md:min-h-64 md:flex-1">
                <Image
                  src="/EeveeTCGTeaser.png"
                  alt="Pokémon Trading Card Game style card teaser"
                  fill
                  quality={72}
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 1024px) 360px, (min-width: 768px) min(360px, 42vw), calc(100vw - 2rem)"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Inspired by */}
        <section className="overflow-hidden bg-surface-container-low py-20 sm:py-24 md:py-32">
          <div className="mx-auto flex w-full max-w-7xl flex-col items-stretch gap-12 px-4 sm:gap-16 sm:px-6 md:flex-row md:items-center md:gap-20 md:px-8">
            <div className="order-2 w-full min-w-0 flex-1 shrink-0 md:order-1 md:max-w-none">
              <div className="grid w-full grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3">
                {INSPIRED_GALLERY.map((item) => (
                  <div key={item.src} className={item.className}>
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(min-width: 1024px) 320px, (min-width: 768px) 30vw, min(100vw - 2rem, 480px)"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div className="order-1 w-full min-w-0 flex-1 space-y-8 md:order-2">
              <h2 className="font-headline text-4xl font-extrabold leading-tight">
                The &quot;Pawsitive&quot; <br />
                Influence
              </h2>
              <p className="text-base leading-relaxed text-on-surface-variant">
                My work is fueled by the calm energy of my pets. They remind me
                to build interfaces that are gentle, accessible, and warm.
                Every project I undertake is &quot;Inspired by Nala&quot; or
                &quot;Supported by Mina&quot;.
              </p>
              <div className="rounded-xl border-l-4 border-primary bg-surface-container-lowest p-8 italic text-on-surface-variant">
                &ldquo;In a world of fast-paced tech, The Web Design Lounge is a
                reminder that people (and their pets) come first.&rdquo;
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
