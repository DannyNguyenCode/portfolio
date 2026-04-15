import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { ContactHeartFab } from "@/components/ContactHeartFab";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "The Digital Hearth — building software with a developer's mind and a caregiver's heart.",
};

const cardShadow = "shadow-[0_20px_40px_rgba(55,45,36,0.06)]";

const INSPIRED_IMGS = [
  "/HomepageNalainspiration.png",
  "/HomepageMinainspiration.png",
] as const;

const PET_CHIPS = [
  { name: "Nala", src: "/NalaCrew.png" },
  { name: "Mina", src: "/MinaCrew.png" },
  { name: "Flair", src: "/FlairCrew.png" },
] as const;

/** Replace with your resume URL (e.g. PDF or Cloudinary) and GitHub profile. */
// const RESUME_HREF = "#";
const GITHUB_HREF = "https://github.com/DannyNguyenCode";

const SKILL_ROWS = [
  { label: "JavaScript", width: "90%" },
  { label: "React", width: "85%" },
  { label: "Tailwind CSS", width: "95%" },
] as const;

export default function HomePage() {
  return (
    <>
      <main className="pt-12 md:pt-16">
        {/* Hero */}
        <section className="mx-auto max-w-7xl px-8 py-20 md:py-30">
          <div className="flex flex-col items-center gap-16 md:flex-row">
            <div className="flex-1 space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-surface-container px-4 py-2">
                <span className="material-symbols-outlined text-primary">
                  home_health
                </span>
                <span className="font-label text-xs font-bold uppercase tracking-wider text-on-surface-variant">
                  Welcome to the Digital Hearth
                </span>
              </div>
              <h1 className="font-headline text-5xl font-extrabold leading-tight tracking-tight text-on-surface md:text-7xl">
                Building software with a{" "}
                <span className="text-primary italic">developer&apos;s mind</span>{" "}
                and a{" "}
                <span className="text-secondary">caregiver&apos;s heart</span>.
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-on-surface-variant">
                A cozy space where technology meets empathy. Backed by my
                incredible support crew: <strong>Nala</strong>,{" "}
                <strong>Mina</strong>, and <strong>Flair</strong>.
              </p>
              <div className="flex flex-wrap gap-4 pt-2">
                {/* <a
                  href={RESUME_HREF}
                  className="rounded-md bg-primary px-6 py-3 font-headline text-sm font-semibold text-on-primary transition-opacity hover:opacity-90"
                >
                  View Resume
                </a> */}
                <a
                  href={GITHUB_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border-2 border-primary px-6 py-3 font-headline text-sm font-semibold text-primary transition-colors hover:bg-surface-container-low"
                >
                  GitHub
                </a>
              </div>
              <div className="flex flex-wrap gap-4 pt-4">
                {PET_CHIPS.map((pet) => (
                  <div
                    key={pet.name}
                    className="flex items-center gap-2 rounded-full bg-surface-container px-3 py-1.5"
                  >
                    <div className="h-6 w-6 overflow-hidden rounded-full bg-surface-container-high">
                      <Image
                        src={pet.src}
                        alt={pet.name}
                        width={24}
                        height={24}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span className="text-xs font-semibold">{pet.name}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative flex-1">
              <div
                className={`relative z-10 aspect-square overflow-hidden rounded-xl ${cardShadow}`}
              >
                <Image
                  src="/FlairHomepageHero.png"
                  alt="Flair at the Digital Hearth — warm home workspace"
                  width={700}
                  height={700}
                  className="h-full w-full object-cover"
                  priority
                  sizes="(min-width: 768px) 50vw, 100vw"
                />
              </div>
              <div className="absolute -bottom-10 -right-10 z-0 h-64 w-64 rounded-xl bg-primary-container/20" />
            </div>
          </div>
        </section>

        {/* Bento */}
        <section className="mx-auto max-w-7xl px-8 pb-32">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
            <div
              id="skills"
              className={`group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-12 transition-colors duration-300 hover:bg-surface-bright md:col-span-8 ${cardShadow}`}
            >
              <div>
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-secondary">
                  Skills in Action
                </span>
                <h2 className="mb-6 font-headline text-3xl font-bold">
                  Crafting with Modern Tools
                </h2>
                <div className="mb-8 grid grid-cols-2 gap-6 md:grid-cols-3">
                  {SKILL_ROWS.map((row) => (
                    <div key={row.label} className="space-y-2">
                      <p className="font-semibold">{row.label}</p>
                      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
                        <div
                          className="h-full rounded-full bg-linear-to-r from-secondary to-secondary-fixed-dim"
                          style={{ width: row.width }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <Link
                href="/skills"
                className="inline-flex items-center font-bold text-primary transition-transform group-hover:translate-x-2"
              >
                Explore Full Skillset{" "}
                <span className="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </Link>
            </div>

            <div
              id="education"
              className="flex flex-col justify-between rounded-xl bg-primary p-12 text-on-primary md:col-span-4"
            >
              <div>
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-on-primary/70">
                  Academic Foundation
                </span>
                <h2 className="mb-4 font-headline text-3xl font-bold">
                  Seneca Honors
                </h2>
                <p className="mb-6 text-lg leading-relaxed opacity-90">
                  Maintained a 3.8 GPA while pursuing excellence in Computer
                  Science at Seneca College.
                </p>
                <div className="inline-block rounded-lg bg-on-primary/10 p-4">
                  <span className="text-2xl font-extrabold">3.8 GPA</span>
                </div>
              </div>
              <Link
                href="/education"
                className="mt-8 inline-flex items-center font-bold hover:underline hover:underline-offset-4"
              >
                View Honors{" "}
                <span className="material-symbols-outlined ml-2">school</span>
              </Link>
            </div>

            <div
              id="experience"
              className="flex flex-col gap-8 rounded-xl bg-surface-container p-12 md:col-span-5"
            >
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-surface">
                <span className="material-symbols-outlined text-3xl text-primary">
                  work_history
                </span>
              </div>
              <div>
                <span className="mb-4 block font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
                  The Professional Journey
                </span>
                <h2 className="mb-4 font-headline text-3xl font-bold">
                  From Caregiver to Creator
                </h2>
                <p className="mb-6 text-base leading-relaxed text-on-surface-variant">
                  Blending a deep background in customer care with freelance
                  development. Empathy drives my code.
                </p>
                <Link
                  href="/employment"
                  className="inline-block rounded-md bg-secondary px-8 py-3 font-bold text-on-secondary transition-opacity hover:opacity-90"
                >
                  Full Experience
                </Link>
              </div>
            </div>

            <div
              id="projects"
              className="group flex flex-col overflow-hidden rounded-xl bg-surface-container-high p-4 md:col-span-7 md:flex-row"
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
                  <span className="material-symbols-outlined ml-2">
                    auto_awesome
                  </span>
                </Link>
              </div>
              <div className="h-64 flex-1 overflow-hidden rounded-lg md:h-auto">
                <Image
                  src="/EeveeTCGTeaser.png"
                  alt="Pokémon Trading Card Game style card teaser"
                  width={600}
                  height={400}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(min-width: 768px) 40vw, 100vw"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Inspired by */}
        <section className="overflow-hidden bg-surface-container-low py-32">
          <div className="mx-auto flex max-w-7xl flex-col items-center gap-20 px-8 md:flex-row">
            <div className="order-2 flex-1 md:order-1">
              <div className="grid grid-cols-2 gap-4">
                <div className="mt-12 h-64 overflow-hidden rounded-xl">
                  <Image
                    src={INSPIRED_IMGS[0]}
                    alt="Yellow Labrador in tall grass at golden hour"
                    width={400}
                    height={256}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>
                <div className="h-64 overflow-hidden rounded-xl">
                  <Image
                    src={INSPIRED_IMGS[1]}
                    alt="Silver tabby kitten sleeping curled in a chunky knit blanket"
                    width={400}
                    height={256}
                    className="h-full w-full object-cover"
                    sizes="(min-width: 768px) 25vw, 50vw"
                  />
                </div>
              </div>
            </div>
            <div className="order-1 flex-1 space-y-8 md:order-2">
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
                &ldquo;In a world of fast-paced tech, The Digital Hearth is a
                reminder that people (and their pets) come first.&rdquo;
              </div>
            </div>
          </div>
        </section>
      </main>

      <ContactHeartFab />
    </>
  );
}
