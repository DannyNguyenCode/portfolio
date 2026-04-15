import type { Metadata } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Academic Foundation",
  description:
    "Seneca College Computer Programming Diploma — technical mastery, coursework, and academic highlights.",
};

const HERO_IMG =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDRRkDf9LpLXAjFIDCJqJBcOdSSueCoYmddVWvJHCn1bDohAAWQ44-nLLfu6I8FhXj3gSyy2Fj9IsEWcVj3gQVhKjOXYOjJ8vUdJP-fpwk7IltPrBSikBDf-Y-w2v82befLBWMZa9Pi4LAYQJcMTM1-6WwYvoHjfnIRAQcXxz88wWp4zD1kTV5xkUfAOrOC3lhJhgsB_NXpNPWevcQNgeifVuu16v9WZk5XLlTxJWxHNLymAnvNAkds1qcXUllp9OWsKr1rS16tRrU";

const filledIcon = {
  fontVariationSettings: "'FILL' 1, 'wght' 400, 'GRAD' 0, 'opsz' 24",
} as const;

function Icon({
  name,
  className = "",
  filled,
  style,
}: {
  name: string;
  className?: string;
  filled?: boolean;
  style?: CSSProperties;
}) {
  return (
    <span
      className={`material-symbols-outlined ${className}`}
      style={filled ? { ...filledIcon, ...style } : style}
    />
  );
}

const PET_CHIPS = [
  {
    label: "Supported by Nala",
    src: "/NalaCrew.png",
    alt: "Nala",
    ring: "bg-primary-container",
  },
  {
    label: "Inspired by Mina",
    src: "/MinaCrew.png",
    alt: "Mina",
    ring: "bg-secondary-container",
  },
  {
    label: "Motivated by Flair",
    src: "/FlairCrew.png",
    alt: "Flair",
    ring: "bg-tertiary-container",
  },
] as const;

export default function EducationPage() {
  return (
    <main className="mx-auto max-w-7xl px-8 pb-16 pt-24 md:pt-28 lg:pt-32">
      <header className="mb-24 flex flex-col items-center gap-16 md:flex-row">
        <div className="w-full md:w-3/5">
          <div className="mb-6 flex items-center gap-3">
            <span className="rounded-full bg-secondary-container px-4 py-1.5 font-label text-sm font-semibold tracking-wide text-on-secondary-container">
              ACADEMIC PATHWAY
            </span>
          </div>
          <h1 className="mb-8 font-headline text-6xl font-extrabold leading-none tracking-tighter text-primary md:text-7xl">
            Academic Foundation
          </h1>
          <p className="max-w-2xl text-xl leading-relaxed text-on-surface-variant">
            A journey of technical mastery and architectural thinking, cultivated
            through rigorous study and supported by a warm community of mentors
            and peers.
          </p>
        </div>
        <div className="relative w-full md:w-2/5">
          <div className="aspect-square rotate-2 overflow-hidden rounded-xl bg-surface-container shadow-2xl transition-transform duration-500 hover:rotate-0">
            <Image
              src={HERO_IMG}
              alt="Graduation cap and diploma on an oak desk with soft afternoon light"
              width={600}
              height={600}
              className="h-full w-full object-cover"
              priority={true}
              sizes="(min-width: 768px) 40vw, 100vw"
            />
          </div>
          <div className="absolute -bottom-14 -left-18 z-10 max-w-[200px] rounded-lg border border-outline-variant/15 bg-surface-container-lowest p-6 shadow-xl">
            <div className="mb-2 flex items-center gap-2">
              <Icon name="stars" className="text-secondary" filled />
              <span className="font-bold text-on-surface">Honours</span>
            </div>
            <p className="text-xs text-on-surface-variant">
              Recognized for consistent academic excellence and technical
              leadership.
            </p>
          </div>
        </div>
      </header>

      <section className="mb-32">
        <div className="group relative overflow-hidden rounded-xl bg-surface-container-lowest p-12 shadow-sm">
          <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 transition-transform duration-700 group-hover:scale-110" />
          <div className="relative z-10 flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
            <div>
              <h2 className="mb-2 font-headline text-4xl font-bold text-on-surface">
                Seneca College
              </h2>
              <h3 className="mb-4 font-headline text-2xl font-medium text-primary-dim">
                Computer Programming Diploma
              </h3>
              <div className="mt-6 flex flex-wrap gap-4">
                <div className="flex items-center gap-2 rounded-full bg-surface-container px-4 py-2">
                  <Icon name="school" className="text-primary" />
                  <span className="font-medium text-on-surface-variant">
                    2-Year Diploma
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-surface-container px-4 py-2">
                  <Icon name="military_tech" className="text-primary" />
                  <span className="font-medium text-on-surface-variant">
                    3.8 GPA
                  </span>
                </div>
                <div className="flex items-center gap-2 rounded-full bg-primary-container px-4 py-2 text-on-primary-container">
                  <Icon name="workspace_premium" filled />
                  <span className="font-bold">High Honours</span>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center gap-2 md:items-end">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-surface-container-high text-3xl font-bold text-primary-dim">
                SC
              </div>
              <span className="font-medium text-on-surface-variant">
                Toronto, ON
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-32 grid grid-cols-1 gap-8 md:grid-cols-12">
        {/* Web Development */}
        <div className="rounded-xl bg-surface-container-low p-10 transition-colors duration-300 hover:bg-surface-bright md:col-span-7">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
              <Icon name="language" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface">
              Web Development
            </h3>
          </div>
          <div className="space-y-6">
            {(
              [
                {
                  icon: "code" as const,
                  title: "Web Programming Principles",
                  desc: "Foundation of modern web architectures and semantic markup.",
                },
                {
                  icon: "rebase_edit" as const,
                  title: "Web Programming Tools and Frameworks",
                  desc: "Deep dive into React, State Management, and Build Tooling.",
                },
                {
                  icon: "cloud_done" as const,
                  title: "Web Programming for Apps and Services",
                  desc: "Developing scalable RESTful APIs and microservice patterns.",
                },
              ] as const
            ).map((row) => (
              <div
                key={row.title}
                className="flex items-start gap-4 rounded-lg bg-surface-container-lowest/50 p-4"
              >
                <Icon
                  name={row.icon}
                  className="mt-1 text-secondary-dim"
                />
                <div>
                  <h4 className="font-bold text-on-surface">{row.title}</h4>
                  <p className="text-sm text-on-surface-variant">{row.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Management */}
        <div className="flex flex-col justify-between rounded-xl bg-surface-container p-10 md:col-span-5">
          <div>
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Icon name="account_tree" />
              </div>
              <h3 className="font-headline text-2xl font-bold text-on-surface">
                Project Management
              </h3>
            </div>
            <ul className="space-y-4">
              {[
                "Requirements Gathering (OO Models)",
                "Analysis and Design (OO Models)",
                "Project Planning and Management",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-on-surface-variant"
                >
                  <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary-fixed-dim" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-12 flex items-center gap-4 rounded-lg bg-surface-container-highest p-4">
            <Icon name="pets" className="text-primary" filled />
            <span className="text-sm font-medium italic text-on-tertiary-fixed-variant">
              Supported by Flair&apos;s focused energy.
            </span>
          </div>
        </div>

        {/* Database Systems */}
        <div className="rounded-xl bg-surface-container p-10 md:col-span-5">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-tertiary/10 text-tertiary">
              <Icon name="database" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface">
              Database Systems
            </h3>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {(
              [
                {
                  title: "Database Services",
                  desc: "Advanced SQL, indexing strategies, and database optimization.",
                },
                {
                  title: "Data Structures & Algorithms",
                  desc: "Computational complexity and efficient information storage.",
                },
                {
                  title: "Oracle PL/SQL",
                  desc: "Stored procedures, triggers, and enterprise database logic.",
                },
              ] as const
            ).map((row) => (
              <div
                key={row.title}
                className="rounded-xl border border-outline-variant/10 bg-surface-container-lowest p-6"
              >
                <h4 className="mb-2 font-bold text-primary-dim">{row.title}</h4>
                <p className="text-sm text-on-surface-variant">{row.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Object Oriented Programming */}
        <div className="relative overflow-hidden rounded-xl bg-surface-container-high p-10 md:col-span-7">
          <div className="mb-8 flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
              <Icon name="data_object" />
            </div>
            <h3 className="font-headline text-2xl font-bold text-on-surface">
              Object Oriented Programming
            </h3>
          </div>
          <div className="relative z-10 grid gap-6 md:grid-cols-2">
            <div className="space-y-4">
              <div className="group">
                <h4 className="text-lg font-bold text-on-surface transition-colors group-hover:text-primary">
                  Software Development
                </h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Mastering memory management and architectural patterns in C++.
                </p>
              </div>
              <div className="group">
                <h4 className="text-lg font-bold text-on-surface transition-colors group-hover:text-primary">
                  Open Source Dev
                </h4>
                <p className="text-sm leading-relaxed text-on-surface-variant">
                  Collaborating on global ecosystems and managing contributions.
                </p>
              </div>
            </div>
            <div className="rounded-xl border border-white/20 bg-surface-container-lowest/40 p-6 backdrop-blur-md">
              <div className="mb-4 flex items-center justify-between">
                <h4 className="font-bold text-on-surface">Capstone Project</h4>
                <Icon name="verified" className="text-secondary" />
              </div>
              <p className="mb-4 text-sm text-on-surface-variant">
                Open Source Development Project: Building and scaling an
                end-to-end community-driven platform.
              </p>
              <div className="h-2 w-full overflow-hidden rounded-full bg-surface-container">
                <div className="h-full w-full bg-linear-to-r from-secondary to-secondary-fixed-dim" />
              </div>
            </div>
          </div>
          <div className="pointer-events-none absolute bottom-0 right-0 opacity-10">
            <span className="material-symbols-outlined text-[12rem]">
              terminal
            </span>
          </div>
        </div>
      </section>

      <section className="mb-16 flex flex-wrap justify-center gap-6">
        {PET_CHIPS.map((pet) => (
          <div
            key={pet.label}
            className="flex cursor-default items-center gap-3 rounded-full bg-surface-container px-6 py-3 transition-all hover:bg-surface-bright"
          >
            <div
              className={`h-10 w-10 overflow-hidden rounded-full ${pet.ring}`}
            >
              <Image
                src={pet.src}
                alt={pet.alt}
                width={40}
                height={40}
                className="h-full w-full object-cover"
              />
            </div>
            <span className="font-label text-sm font-semibold text-on-surface">
              {pet.label}
            </span>
          </div>
        ))}
      </section>
    </main>
  );
}
