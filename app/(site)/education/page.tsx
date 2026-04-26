import type { Metadata } from "next";
import Image from "next/image";

import { CrewSpotlight, flairSpotlightPreset } from "@/components/CrewSpotlight";
import { MaterialSymbol } from "@/components/MaterialSymbol";

export const metadata: Metadata = {
  title: "Academic Foundation",
  description:
    "Seneca College Computer Programming Diploma — technical mastery, coursework, and academic highlights.",
};

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuA5kWmo7USPHQDqxiem24sHze7TPtQyqJEuJGM030_T-WjmCWfo-JlQlZiwFlCWJj-PZ9PRiuwBP2voPaVsyf0o-RP8unYlFBFxQzVzVxYhoDN_6KR1AEnP54Qw2oG7jEoyeLBcbhtnZTuY8ZaHg3kvSAkogKDlCrJcIvqEq_aMK8fdrix29kjxK_HiBQYQVtMvfEsDseMUpxWBfdXalsnnRB-4nNgvImHuXeszSLYeeDDjqoTIdJjnwjsBZF1Ud634JCDZBIeouQ0";

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-7xl px-6 pb-20 pt-24 selection:bg-primary-container selection:text-on-primary-container md:px-8 md:pt-28 lg:pt-32">
      {/* Hero */}
      <section className="mb-24">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">

            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-surface-container-high px-4 py-2 font-label text-xs font-bold uppercase tracking-widest text-on-surface-variant">
              <MaterialSymbol name="school" className="text-base text-primary" filled />
              Academic Excellence
            </div>

            <h1 className="mb-8 font-headline text-5xl font-extrabold leading-[1.1] tracking-tighter text-on-surface md:text-7xl">
              The <span className="text-primary">Academic <br /> Foundation</span>

            </h1>
            <p className="mb-10 max-w-2xl text-lg leading-relaxed text-on-surface-variant md:text-xl">
              A journey of technical mastery and architectural thinking, cultivated
              through rigorous study and supported by a warm community of mentors
              and peers.
            </p>
            <div className="flex flex-wrap gap-6">
              <div className="flex min-w-[160px] flex-col items-center justify-center rounded-xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(55,45,36,0.06)]">
                <span className="mb-1 font-headline text-4xl font-black text-primary md:text-5xl">
                  3.8
                </span>
                <span className="font-label text-sm font-bold uppercase tracking-tighter text-on-surface-variant">
                  Cumulative GPA
                </span>
              </div>
              <div className="flex min-w-[160px] flex-col items-center justify-center rounded-xl bg-surface-container-lowest p-8 shadow-[0_20px_40px_rgba(55,45,36,0.06)]">
                <span className="mb-1 font-headline text-4xl font-black text-secondary md:text-5xl">
                  Honours
                </span>
                <span className="font-label text-sm font-bold uppercase tracking-tighter text-on-surface-variant">
                  President&apos;s List
                </span>
              </div>
            </div>
          </div>
          <div className="relative lg:col-span-5">
            <div className="absolute -left-12 -top-12 h-48 w-48 rounded-full bg-tertiary-container opacity-30 mix-blend-multiply blur-3xl filter" />
            <div className="relative z-10 aspect-4/5 overflow-hidden bg-surface-container-highest asymmetric-image-mask">
              <Image
                src={HERO_IMG}
                alt="Modern university campus architecture with sunlight streaming through large glass windows onto a clean minimalist atrium with students"
                width={800}
                height={800}
                className="h-full w-full object-cover"
                priority={true}
                sizes="(min-width: 1024px) 40vw, 100vw"
              />
            </div>
            <div className="absolute -bottom-8 -right-8 z-20 max-w-[200px] rounded-lg bg-surface-bright p-6 shadow-xl">
              <p className="text-sm font-medium italic text-on-surface">
                &ldquo;The Web Design Lounge of my career was built here, brick by line of
                code.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Curated Disciplines */}
      <section className="mb-32">
        <div className="mb-12 flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <h2 className="mb-4 font-headline text-3xl font-bold tracking-tight md:text-4xl">
              Curated Disciplines
            </h2>
            <p className="text-on-surface-variant">
              The pillars of my technical foundation.
            </p>
          </div>
          <div className="mb-5 hidden h-[2px] grow bg-surface-container-highest md:mx-8 md:block" />
        </div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          <div className="group flex flex-col justify-between rounded-xl bg-surface-container-lowest p-10 transition-all duration-500 hover:bg-surface-bright md:col-span-2 md:row-span-2">
            <div>
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-primary-container text-on-primary-container">
                <MaterialSymbol name="terminal" className="text-3xl" />
              </div>
              <h3 className="mb-4 font-headline text-2xl font-bold">
                Web Development
              </h3>
              <p className="mb-6 leading-relaxed text-on-surface-variant">
                Crafting digital experiences through modern frameworks, focusing
                on semantic structures and responsive flows that feel like a
                digital sanctuary.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "TypeScript", "Tailwind CSS", "Node.js"].map(
                  (tag) => (
                    <span
                      key={tag}
                      className="rounded-full bg-surface-container px-3 py-1 text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ),
                )}
              </div>
            </div>
            <div className="mt-10 border-t border-surface-container pt-6">
              <div className="flex items-center gap-4">
                <div className="grow">
                  <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container-highest">
                    <div className="h-full w-[95%] rounded-full bg-linear-to-r from-primary to-primary-container" />
                  </div>
                </div>
                <span className="font-label text-xs font-bold">
                  A+ Achievement
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-8 rounded-xl bg-surface-container-high p-8 transition-transform hover:-translate-y-1 md:col-span-2">
            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-surface-container-lowest">
              <MaterialSymbol
                name="account_tree"
                className="text-4xl text-secondary"
              />
            </div>
            <div>
              <h3 className="mb-2 font-headline text-xl font-bold">
                Project Management
              </h3>
              <p className="text-sm text-on-surface-variant">
                Agile methodologies and strategic planning to ensure project
                longevity and heirloom quality.
              </p>
            </div>
          </div>

          <div className="flex flex-col justify-center rounded-xl border border-transparent bg-surface-container-lowest p-8 transition-colors hover:border-outline-variant/20 md:col-span-1">
            <MaterialSymbol
              name="database"
              className="mb-4 text-3xl text-primary-dim"
            />
            <h3 className="mb-2 font-headline text-lg font-bold">
              Database Systems
            </h3>
            <p className="mb-4 font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Architecture &amp; Design
            </p>
            <p className="text-sm text-on-surface-variant">
              Relational modeling and complex query optimization with SQL and
              NoSQL.
            </p>
          </div>

          <div className="flex flex-col justify-center rounded-xl bg-surface-container p-8 md:col-span-1">
            <MaterialSymbol
              name="reorder"
              className="mb-4 text-3xl text-secondary-dim"
            />
            <h3 className="mb-2 font-headline text-lg font-bold">
              Object Oriented
            </h3>
            <p className="mb-4 font-label text-xs uppercase tracking-widest text-on-surface-variant">
              Programming Pillars
            </p>
            <p className="text-sm text-on-surface-variant">
              Advanced C++ and Java patterns, mastering the inheritance of robust
              code.
            </p>
          </div>
        </div>
      </section>

      {/* Proficiency Web Design Lounge */}
      <section className="mb-24">
        <div className="relative overflow-hidden rounded-xl bg-surface-container-low p-12 md:p-20">
          <div className="pointer-events-none absolute top-0 right-0 h-full w-1/3 opacity-10">
            <MaterialSymbol
              name="school"
              className="absolute -top-10 -right-20 text-[20rem] text-primary"
            />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="mb-8 font-headline text-3xl font-bold md:text-5xl">
              The Proficiency Web Design Lounge
            </h2>
            <div className="space-y-10">
              <div className="space-y-3">
                <div className="flex items-end justify-between">
                  <span className="font-label text-sm font-bold uppercase tracking-widest">
                    Software Architecture
                  </span>
                  <span className="text-xs font-bold text-primary">
                    High Honours Mastery
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest">
                  <div className="h-full w-[92%] rounded-full bg-linear-to-r from-secondary to-secondary-fixed-dim shadow-lg shadow-secondary/20" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-end justify-between">
                  <span className="font-label text-sm font-bold uppercase tracking-widest">
                    Algorithmic Design
                  </span>
                  <span className="text-xs font-bold text-primary">
                    3.8 GPA Standard
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest">
                  <div className="h-full w-[88%] rounded-full bg-linear-to-r from-secondary to-secondary-fixed-dim shadow-lg shadow-secondary/20" />
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-end justify-between">
                  <span className="font-label text-sm font-bold uppercase tracking-widest">
                    Product Design &amp; UX
                  </span>
                  <span className="text-xs font-bold text-primary">
                    Distinction
                  </span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-surface-container-highest">
                  <div className="h-full w-[95%] rounded-full bg-linear-to-r from-secondary to-secondary-fixed-dim shadow-lg shadow-secondary/20" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Crew spotlight — Flair */}
      <CrewSpotlight
        {...flairSpotlightPreset}
        className="mt-12 w-full sm:mt-16"
      />
    </main>
  );
}
